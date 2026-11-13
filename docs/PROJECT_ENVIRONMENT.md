# Project Environment & Tool Discovery

## 1. System Environment
- **Operating System:** Windows 10/11
- **Node.js:** v22.19.0
- **npm:** 10.9.3
- **Git:** 2.48.1.windows.1
- **Project Directory:** `d:\Workspace\recallify`

## 2. Source Documents Located
1. `docs/202_cau_hoi_trac_nghiem_swd301.docx` (56,421 bytes)
   - Subject: SWD301 (Software Architecture & Design)
2. `docs/sba301-complete-exam-questions-part1-to-part22.docx` (137,639 bytes)
   - Subject: SBA301 (System & Business Analysis)

## 3. Tool Discovery & MCP Integrations
- **GenOffice MCP (`genoffice`):**
  - Tool `docs_read`: Extracts text, paragraphs, tables, headings from `.docx` files with full content capabilities.
  - Verification: Schema and instructions reviewed.
- **Stitch AI MCP (`stitch` / `StitchMCP`):**
  - Tools available: `create_project`, `create_design_system`, `create_design_system_from_design_md`, `generate_screen_from_text`, `get_screen`, `list_screens`, `download_file`, `edit_screens`.
  - Skill packages present in `.agent/stitch-skills`: `stitch-build`, `stitch-design`, `stitch-utilities`.
- **Playwright MCP (`playwright`):**
  - Tools available: `browser_navigate`, `browser_click`, `browser_snapshot`, `browser_take_screenshot`, `browser_evaluate`, etc. for automated browser QA.

## 4. Planned Frontend Architecture & Libraries
- **Framework:** React 19 / 18 with Vite
- **Language:** JavaScript (ES6+)
- **Routing:** React Router v7 / v6
- **Styling:** Tailwind CSS + PostCSS + Lucide React icons
- **State Management:** Zustand
- **Animations:** Framer Motion
- **Progress Visualization:** Recharts
- **Notifications:** Sonner / Lucide Toast
- **Persistence:** Safe localStorage abstraction with validation, versioning, and reset logic

## 5. Phase 0 Quality Gate
- All required CLI tools (Node, npm, git) verified.
- Source DOCX files identified and accessible.
- MCP tools confirmed operational.
- Phase 0 status: **COMPLETED**.

