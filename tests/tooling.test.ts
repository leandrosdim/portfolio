import { spawnSync } from "node:child_process";
import { describe, expect, it } from "vitest";

const root = new URL("../", import.meta.url);

function runScript(script: string, timeoutMs: number): {
  status: number;
  stdout: string;
  stderr: string;
} {
  const res = spawnSync("npm", ["run", script], {
    cwd: root,
    encoding: "utf-8",
    timeout: timeoutMs,
    maxBuffer: 1024 * 1024 * 32,
  });
  return {
    status: res.status ?? -1,
    stdout: res.stdout ?? "",
    stderr: res.stderr ?? "",
  };
}

describe("tooling", () => {
  it(
    "npm run lint exits with status 0",
    () => {
      const { status, stdout, stderr } = runScript("lint", 120_000);

      if (status !== 0) {
        console.error("lint stdout:\n", stdout);
        console.error("lint stderr:\n", stderr);
      }
      expect(status).toBe(0);
    },
    180_000
  );

  it(
    "npm run build exits with status 0",
    () => {
      const { status, stdout, stderr } = runScript("build", 300_000);

      if (status !== 0) {
        console.error("build stdout:\n", stdout);
        console.error("build stderr:\n", stderr);
      }
      expect(status).toBe(0);
    },
    360_000
  );
});