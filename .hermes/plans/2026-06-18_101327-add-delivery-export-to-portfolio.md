# Add Delivery Export to Portfolio Implementation Plan

> **For Hermes:** Implement only after Leandros approves the plan. This is a small content/assets update, not a portfolio redesign.

**Goal:** Add the Delivery Export mini app as a non-featured project in `/home/leandrosdim777/projects/portfolio`, using the existing project data format and copying the two available screenshots into a project-specific `public` folder.

**Architecture:** The portfolio is data-driven from `src/content/projects.ts`. Project screenshots are resolved by convention as `/${project.id}/${slide.id}.jpg`, so the new project should use `id: "delivery-export"` and assets under `public/delivery-export/` with filenames matching slide IDs.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, static project content, public image assets.

---

## Current context

Portfolio project path:

```txt
/home/leandrosdim777/projects/portfolio
```

Delivery Export source screenshots:

```txt
/home/leandrosdim777/projects/delivery-export/docs/Delivery export Presentation/Main Form - Top side.jpg
/home/leandrosdim777/projects/delivery-export/docs/Delivery export Presentation/Main Form - Bot side.jpg
```

Portfolio project data file:

```txt
/home/leandrosdim777/projects/portfolio/src/content/projects.ts
```

Existing image convention:

```tsx
src={`/${project.id}/${slide.id}.jpg`}
```

Therefore new screenshots should be copied to:

```txt
/home/leandrosdim777/projects/portfolio/public/delivery-export/deliveryexport1.jpg
/home/leandrosdim777/projects/portfolio/public/delivery-export/deliveryexport2.jpg
```

The project should be:

```ts
featured: false
status: "Live" | "Not Live" | "Building"
type: "Web"
```

Recommended status: `Not Live`, unless Leandros has deployed URL to add.

---

## Proposed project entry

Add this object to the `projects` array in `src/content/projects.ts`, near the other non-featured web/business projects. Recommended placement: after `crm` or before `law-agent`.

Use `projectOrder: 10` to avoid disturbing existing featured order. Existing order has `law-agent` at `9`, so Delivery Export can become `10`.

```ts
  {
    id: "delivery-export",
    title: "Delivery Export",
    description:
      "One-page delivery entry app that replaces manual Excel editing with validated forms and ERP-compatible CSV export.",
    longDescription:
      "A lightweight web application built for a delivery services workflow where third-party partners previously completed an Excel import file manually. The app turns that process into a clean Greek-language form, supports multiple delivery entries, validates important fields, and exports an ERP-compatible CSV file while preserving the required column order and headers.",
    category: "Business Utility",
    technologies: ["Next.js", "JavaScript", "CSV Export", "Excel Workflow", "Tailwind CSS"],
    role: "Full-Stack Developer",
    challenge:
      "Replacing a fragile manual Excel process with a simple tool that non-technical delivery partners can use without changing the customer's ERP import workflow.",
    solution:
      "Built a schema-driven one-page form with reusable inputs, Excel-derived dropdown options, Greek validation messages, accordion-based multiple delivery entries, and CSV generation compatible with the existing import process.",
    results: [
      "Reduced manual Excel editing for delivery partners",
      "Added validation before export to prevent incomplete or malformed delivery data",
      "Generated ERP-compatible CSV files with preserved Greek headers and column order",
      "Improved usability with accordion delivery cards and mobile-friendly layout"
    ],
    status: "Not Live",
    type: "Web",
    featured: false,
    projectOrder: 10,
    slides: [
      {
        id: "deliveryexport1",
        title: "Delivery Entry Form",
        description:
          "Clean Greek-language form for entering delivery details, including date, document number, AFM fields, route information, and controlled dropdown options.",
        frame: "desktop"
      },
      {
        id: "deliveryexport2",
        title: "Validation, Summary & CSV Export",
        description:
          "Lower form sections and action area for completing delivery details, reviewing totals, adding entries, clearing data, and exporting an ERP-compatible CSV file.",
        frame: "desktop"
      }
    ]
  },
```

Notes:

- If the app is deployed, replace `status: "Not Live"` with `"Live"` and add `url: "..."`.
- Keep `featured: false` as requested.
- Use English wording because existing portfolio project entries are written in English.

---

## Step-by-step build plan

### Task 1: Create the public image folder

**Objective:** Add the project-specific image directory matching the portfolio screenshot convention.

**Files:**

- Create directory: `public/delivery-export/`

**Command:**

```bash
cd /home/leandrosdim777/projects/portfolio
mkdir -p public/delivery-export
```

### Task 2: Copy and rename the screenshots

**Objective:** Copy the two delivery-export screenshots into the portfolio under filenames matching the new slide IDs.

**Files:**

- Create: `public/delivery-export/deliveryexport1.jpg`
- Create: `public/delivery-export/deliveryexport2.jpg`

**Commands:**

```bash
cp "/home/leandrosdim777/projects/delivery-export/docs/Delivery export Presentation/Main Form - Top side.jpg" \
  "/home/leandrosdim777/projects/portfolio/public/delivery-export/deliveryexport1.jpg"

cp "/home/leandrosdim777/projects/delivery-export/docs/Delivery export Presentation/Main Form - Bot side.jpg" \
  "/home/leandrosdim777/projects/portfolio/public/delivery-export/deliveryexport2.jpg"
```

**Verification:**

```bash
stat public/delivery-export/deliveryexport1.jpg public/delivery-export/deliveryexport2.jpg
```

Expected: both files exist and have non-zero size.

### Task 3: Add the project object to `projects.ts`

**Objective:** Add Delivery Export to the portfolio data array using the existing `IProject` format.

**File:**

- Modify: `src/content/projects.ts`

**Implementation:**

Insert the object from the “Proposed project entry” section before the final closing `];` or between existing non-featured project objects.

**Important details:**

- `id` must be `delivery-export` because image paths resolve from `/${project.id}/...`.
- Slide IDs must match filenames without `.jpg`:
  - `deliveryexport1`
  - `deliveryexport2`
- Keep `featured: false`.
- Keep `type: "Web"`.
- Keep `status: "Not Live"` unless a live URL exists.

### Task 4: Run formatting/type/build checks

**Objective:** Ensure the portfolio still compiles after the content update.

**Commands:**

```bash
cd /home/leandrosdim777/projects/portfolio
npm run lint
npm run typecheck
npm run build
```

If `npm run typecheck` is not available or fails because the script does not exist, inspect `package.json` and run the available equivalent.

### Task 5: Optional local visual check

**Objective:** Confirm the new project appears in the portfolio and the screenshots load.

**Commands:**

```bash
cd /home/leandrosdim777/projects/portfolio
npm run dev
```

Then check:

```txt
/projects or /portfolio depending on existing routing
/portfolio/delivery-export
```

Expected:

- Delivery Export appears in the non-featured project list.
- It does not appear as a featured project on the homepage unless the portfolio shows all projects somewhere.
- Detail page loads with two desktop screenshots.
- No broken image icons.

---

## Files likely to change

```txt
/home/leandrosdim777/projects/portfolio/src/content/projects.ts
/home/leandrosdim777/projects/portfolio/public/delivery-export/deliveryexport1.jpg
/home/leandrosdim777/projects/portfolio/public/delivery-export/deliveryexport2.jpg
```

No component changes should be needed.

---

## Risks / open questions

1. **Live URL:** I do not currently know whether Delivery Export is deployed. Default plan uses `status: "Not Live"` and no `url`.
2. **Ordering:** `projectOrder: 10` avoids disturbing existing ordering. If Leandros wants it earlier in the portfolio list, adjust this number.
3. **Image aspect:** The screenshots are desktop screenshots and should work with `frame: "desktop"` and `aspect-video` containers. If they look too cropped, a later component-level image-fit tweak may be needed, but do not change components unless visual review shows a problem.
4. **Copy tone:** Existing project entries are in English, so the new entry should also be in English.

---

## Verification checklist

- [ ] `public/delivery-export/deliveryexport1.jpg` exists
- [ ] `public/delivery-export/deliveryexport2.jpg` exists
- [ ] `src/content/projects.ts` contains one new `delivery-export` object
- [ ] `featured` is `false`
- [ ] `projectOrder` does not conflict in a harmful way
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes if available
- [ ] `npm run build` passes
- [ ] Detail page image URLs resolve as:
  - `/delivery-export/deliveryexport1.jpg`
  - `/delivery-export/deliveryexport2.jpg`

