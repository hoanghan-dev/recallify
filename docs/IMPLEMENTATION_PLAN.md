# Implementation Plan & Roadmap

## 1. Sequence of Implementation
- **Phase 4:** UI/UX Design System & Stitch AI Generation
  - Formulate design tokens, typography, and color schemes.
  - Interact with Stitch AI MCP to generate screen references.
  - Document design specification.
- **Phase 5:** Project Foundation & Scaffolding
  - Initialize Vite + React project.
  - Install dependencies: `react-router-dom`, `lucide-react`, `zustand`, `framer-motion`, `recharts`, `clsx`, `tailwind-merge`, `canvas-confetti`.
  - Configure Tailwind CSS.
  - Build core layout, navigation, and reusable UI components.
  - Integrate question bank mock data.
- **Phase 6:** Dashboard & Subject Management
  - Implement Dashboard metrics, subject cards, and progress calculation.
  - Build Subject Hub with chapter breakdown and Question Bank browser.
- **Phase 7:** Flashcards Mode
  - 3D CSS flip animations, keyboard navigation, shuffle algorithm, and bookmarking.
- **Phase 8:** Adaptive Learning Mode
  - Immediate evaluation, feedback display, sequential progression.
  - **Critical:** Repetition queue engine for incorrect questions, graduation of mastered questions across rounds.
- **Phase 9:** Simulated Test Mode
  - Configuration modal, randomized sampling without duplicates.
  - Strict answer concealment, question grid navigation, submission confirmation modal.
  - Result scorecard, answer review, and retry capabilities.
- **Phase 10:** Persistence & Analytics
  - LocalStorage synchronization, test history logging, stats calculation, progress reset.
- **Phase 11:** Comprehensive QA & Verification
  - Automated business logic tests, browser testing via Playwright MCP.
- **Phase 12:** Final Documentation & Production Build
  - Production build verification, complete README.md and audit reports.

---
## 2. Risk Mitigation & Quality Control
| Identified Risk | Mitigation Strategy |
|---|---|
| Repetition queue infinite loop | Ensure mastered questions are strictly removed; round terminates when queue is empty or user chooses to exit |
| Premature test answer disclosure | Cleanly separate test question data from answers in active test view |
| Multi-choice answer matching errors | Normalize arrays, sort option IDs, and check symmetric equality |
| Corrupt localStorage crashes | Defensive parsing wrapper with try/catch and fallback defaults |

