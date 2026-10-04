# Shared Project Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace duplicated project detail markup with one shared renderer and data-driven project records while preserving all existing project URLs and content.

**Architecture:** Keep each existing project `.html` URL as a small bootstrap page that identifies its project. Extend the existing application records in `js/data.js` with detail-only presentation fields, then use a dedicated renderer loaded by the shared project page bootstrap to build the common page. Preserve existing interaction code and CSS hooks.

**Tech Stack:** Static HTML, vanilla JavaScript, existing CSS.

**Spec:** `docs/superpowers/specs/2026-10-04-shared-project-pages-design.md`

## Global Constraints

- Preserve all 16 existing project `.html` URLs.
- Preserve current visible project text, project order, colors, galleries, store links, and interactions.
- Keep legal pages and homepage behavior out of scope.
- Add no dependencies and make no CSS redesign.
- Escape inserted text and attributes; render only valid HTTP(S) store URLs.
- Omit absent store links and handle projects with no screenshots without broken markup.

## Review Focus

- Missing optional store links, especially coming-soon projects: render no dead badges.
- Missing or short screenshot arrays: render available images only and keep gallery controls valid.
- Project names and descriptions containing punctuation or markup-like characters: escape before insertion.
- Invalid project key: show a useful recovery link to the project list.
- Non-project pages loading shared scripts: do not initialize project rendering there.

## File Map

- `js/data.js`: canonical records for project detail content and stable page keys.
- `js/project-detail.js` (new): pure-ish template rendering, metadata updates, input escaping and URL validation.
- `js/page.js`: bootstrap project renderer only on project pages; retain existing carousel behavior.
- All 16 project `.html` files: thin bootstrap documents with project keys and shared assets.
- `docs/superpowers/plans/2026-10-04-shared-project-pages.md`: this execution checklist.

## Tasks

### Task 1: Complete canonical project detail data

**Files:**
- Modify: `js/data.js`
- Reference: all 16 current project HTML files

- [x] Add stable slugs matching existing filenames and accent colors to every project record.
- [x] Reconcile each record’s description, feature list, platform label, status, app-store links, screenshots, icon and technology line against its current HTML page.
- [x] Preserve catalogue configuration and project order; do not overwrite catalogue-only fields.
- [x] Add explicit handling for records whose gallery/store list is empty.

### Task 2: Implement the shared project renderer

**Files:**
- Create: `js/project-detail.js`
- Modify: `js/page.js`

- [x] Add a renderer that receives a project record and emits the existing header, intro, features, gallery, next-project CTA and footer structure with current CSS classes.
- [x] Build gallery and badges from available data; choose first and second available screenshots for hero devices.
- [x] Escape text and attribute values, and validate store URLs as HTTP(S) before creating links.
- [x] Update document title and description from the selected record.
- [x] Resolve the current and next project from the existing project order; provide a recovery state for an unknown key.
- [x] Keep gallery keyboard, pointer, resize and button behavior operating on the rendered gallery.

### Task 3: Convert project pages to shared bootstraps

**Files:**
- Modify: `appsly.html`, `babyplus.html`, `clipboardai.html`, `jsontools.html`, `linguago.html`, `markdown.html`, `pawsy.html`, `picnic.html`, `projectx.html`, `recuro.html`, `rewire.html`, `routly.html`, `sakura.html`, `shiflabs.html`, `studygo.html`, `toolbox.html`

- [x] Replace per-page project body markup with the same minimal accessible mount point and shared script/style setup.
- [x] Set the project slug per file and retain each canonical URL.
- [x] Keep legal-page files and homepage untouched.

### Task 4: Verify parity and integration

**Files:**
- Review: `js/data.js`, `js/project-detail.js`, `js/page.js`, all project HTML files

- [x] Check that all 16 filenames resolve to exactly one project record and every project record used by the homepage remains intact.
- [x] Compare generated content fields against the original pages for all projects, including empty store/gallery cases.
- [x] Inspect rendered pages at desktop width and verify navigation, gallery, next-project links and metadata; responsive layout is inherited from existing CSS.
- [x] Confirm `index.html` and all legal pages remain unchanged.

## Self-review

- Spec coverage: data reconciliation, one renderer, thin URL-preserving bootstraps, safe insertion, optional media handling and parity checks are represented in Tasks 1–4.
- No automated test files or test commands are added; verification is a source/data audit and browser inspection.
- Page key, data slug and filename use the same slug string; renderer receives the matched record.
