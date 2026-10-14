import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const root = new URL("../", import.meta.url);

function npmJson(args: string[]): {
  status: number;
  stdout: string;
} {
  const res = spawnSync("npm", args, {
    cwd: root,
    encoding: "utf-8",
    maxBuffer: 1024 * 1024 * 16,
  });
  return { status: res.status ?? -1, stdout: res.stdout ?? "" };
}

function pkgVersion(name: string): string {
  const json = readFileSync(
    new URL(`../node_modules/${name}/package.json`, import.meta.url),
    "utf-8"
  );
  return JSON.parse(json).version as string;
}

function compareVersions(a: string, b: string): number {
  const pa = a.split(/[+-]/)[0].split(".").map(Number);
  const pb = b.split(/[+-]/)[0].split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const da = pa[i] ?? 0;
    const db = pb[i] ?? 0;
    if (da !== db) return da - db;
  }
  return 0;
}

describe("dependency security", () => {
  it("npm audit reports zero vulnerabilities", () => {
    const { stdout, status } = npmJson(["audit", "--json"]);
    const report = JSON.parse(stdout);
    const v = report.metadata.vulnerabilities;

    expect(v.total).toBe(0);
    expect(v.info).toBe(0);
    expect(v.low).toBe(0);
    expect(v.moderate).toBe(0);
    expect(v.high).toBe(0);
    expect(v.critical).toBe(0);
    expect(status).toBe(0);
  });

  it("sharp is patched (>= 0.35.5)", () => {
    expect(compareVersions(pkgVersion("sharp"), "0.35.5")).toBeGreaterThanOrEqual(0);
  });

  it.each(["braces", "fast-glob", "micromatch"])(
    "%s is absent from the dependency tree",
    (pkg) => {
      const { stdout, status } = npmJson(["ls", pkg, "--json"]);
      const tree = JSON.parse(stdout);

      expect(tree.dependencies).toBeUndefined();
      expect(status).not.toBe(0);
    }
  );

  it("eslint-config-next is not a dependency", () => {
    const { stdout, status } = npmJson(["ls", "eslint-config-next", "--json"]);
    const tree = JSON.parse(stdout);

    expect(tree.dependencies).toBeUndefined();
    expect(status).not.toBe(0);
  });

  it.each([
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-jsx-a11y",
    "typescript-eslint",
  ])("%s is installed", (pkg) => {
    const version = pkgVersion(pkg);

    expect(typeof version).toBe("string");
    expect(version.length).toBeGreaterThan(0);
  });
});

describe("eslint flat config", () => {
  it("eslint.config.mjs loads and exports a valid config array", async () => {
    const mod = (await import("../eslint.config.mjs")) as {
      default: unknown[];
    };

    expect(Array.isArray(mod.default)).toBe(true);
    expect(mod.default.length).toBeGreaterThan(0);
  });
});