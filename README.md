# Recallify — Interactive Exam Preparation Platform

Recallify is a modern, responsive, frontend-only exam preparation platform inspired by Quizlet. It is engineered with React, Vite, and Tailwind CSS, providing university students with active recall and spaced repetition tools across three study modalities: **Flashcards**, **Adaptive Learning** (with an automatic repetition queue for incorrect questions), and **Simulated Exams** (with hidden answer keys until submission).

The platform initially hosts **527 verified exam questions** extracted directly from academic course documents using GenOffice MCP:
- **SWD301: Software Architecture & Design** (198 questions across 20 chapters)
- **SBA301: Modern React & Web Development** (329 questions across 22 chapters)

---

## 1. Key Features

### 🗂️ Subject & Question Bank Management
- Interactive dashboard with high-level learning KPIs, daily goals, and exam countdowns.
- Subject overview hub with syllabus topics and mastery progress.
- Comprehensive, searchable Question Bank with chapter filters, keyword search, and toggleable answer keys.

### 🃏 Flashcards Mode (FR-02)
- Hardware-accelerated 3D card-flip animations (`Space` or click).
- Keyboard shortcuts: `Space` (flip), `←`/`→` (navigate), `B` (bookmark).
- Deck shuffle using the Fisher-Yates algorithm.
- Progress bar and deck completion summary.

### 🧠 Adaptive Learning Mode (FR-03 — Critical Feature)
- Immediate answer evaluation with clear visual feedback:
  - Selected correct options highlighted in emerald green (`#10B981`) with checkmarks.
  - Selected incorrect options highlighted in rose red (`#EF4444`) with X marks, while revealing the correct answer.
- Answer choices lock immediately upon evaluation to prevent answer changing.
- **Incorrect Question Repetition Queue:** Questions answered incorrectly in any round are automatically isolated into subsequent review rounds until mastered or until the student exits. Mastered questions graduate and are excluded from subsequent repetition rounds.
- Real-time round accuracy and celebration confetti upon 100% mastery.

### 📝 Simulated Test Mode (FR-04)
- Test configuration: customizable question count (5 to maximum available) and test title.
- Randomized question sampling guaranteeing zero duplicates.
- **Strict Test Secrecy Rule:** Correct answers, explanations, and scores are strictly hidden prior to explicit submission.
- Bidirectional navigation drawer/grid with answered/unanswered and flagged indicators.
- Submission confirmation modal warning of any unanswered questions.
- Comprehensive post-test scorecard with radial gauge, pass/fail status ($\ge 70\%$), and detailed question-by-question review.

### 📊 Progress Analytics & Persistence (FR-05 & FR-06)
- Client-side persistence via `localStorage` with versioned keys and defensive corruption fallbacks.
- Interactive data visualizations with Recharts:
  - Curriculum mastery stacked bar chart by subject.
  - Test score progression line chart with 70% passing threshold marker.
- Complete test history logs and bookmarked questions manager.
- Safe "Reset All Progress" utility with double confirmation.

---

## 2. Technology Stack

- **Framework:** React 18 (SPA)
- **Build Tool:** Vite 5 (Rollup code-splitting)
- **Routing:** React Router v6
- **Styling:** Tailwind CSS 3, PostCSS, Autoprefixer
- **Icons:** Lucide React
- **State Management:** Zustand
- **Visualizations:** Recharts
- **Celebrations:** Canvas Confetti
- **Utilities:** clsx, tailwind-merge
- **Automated QA:** Node test assertions & Playwright MCP

---

## 3. Project Structure

```text
recallify/
├── docs/                               # Architecture, SRS, and analysis specifications
│   ├── PROJECT_ENVIRONMENT.md
│   ├── SOURCE_ANALYSIS.md
│   ├── REQUIREMENTS.md
│   ├── USE_CASE_SPECIFICATION.md
│   ├── USE_CASE_DIAGRAM.md
│   ├── BUSINESS_RULES.md
│   ├── STATE_FLOW.md
│   ├── SYSTEM_ARCHITECTURE.md
│   ├── UI_COMPONENT_STRUCTURE.md
│   ├── IMPLEMENTATION_PLAN.md
│   ├── DESIGN_SYSTEM.md
│   ├── UI_DESIGN_SPECIFICATION.md
│   ├── TEST_REPORT.md
│   ├── KNOWN_LIMITATIONS.md
│   └── FINAL_REVIEW.md
│
├── scripts/                            # Extraction and test automation scripts
│   ├── extract_data.py                 # GenOffice output parser to JS mock banks
│   └── test_business_logic.js          # Automated unit test suite
│
├── src/
│   ├── app/
│   │   ├── App.jsx                     # Root application entry
│   │   └── router.jsx                  # React Router definitions
│   │
│   ├── components/                     # Reusable design system components
│   │   ├── common/                     # Button, Badge, ProgressBar, ScoreRadial, Modal
│   │   ├── layout/                     # Navbar, Footer, Layout
│   │   └── questions/                  # OptionItem, FlipCard, QuestionNavGrid
│   │
│   ├── data/                           # Immutable question banks & subject definitions
│   │   ├── subjects.js                 # Course metadata & question counts
│   │   └── questions/
│   │       ├── subject-01.js           # SWD301: 198 questions
│   │       ├── subject-02.js           # SBA301: 329 questions
│   │       └── index.js                # Accessor and bank registry
│   │
│   ├── features/                       # Modular page features
│   │   ├── dashboard/                  # DashboardPage.jsx
│   │   ├── subjects/                   # SubjectListPage.jsx, SubjectDetailPage.jsx
│   │   ├── flashcards/                 # FlashcardsPage.jsx
│   │   ├── learning/                   # LearningPage.jsx
│   │   ├── tests/                      # TestConfigModal.jsx, TestRunnerPage.jsx, TestResultPage.jsx, TestReviewPage.jsx
│   │   └── analytics/                  # AnalyticsPage.jsx
│   │
│   ├── services/                       # Pure framework-agnostic domain logic
│   │   ├── learning/learningEngine.js  # Answer evaluation & repetition queue
│   │   ├── testing/testEngine.js       # Sampling, grading & score calculation
│   │   ├── statistics/statsEngine.js   # Metric aggregations
│   │   └── storage/localStorageService.js # Versioned localStorage wrapper
│   │
│   ├── store/                          # Zustand state stores
│   │   ├── useAppStore.js              # Global metrics & bookmarks
│   │   ├── useLearningStore.js         # Adaptive learning state
│   │   └── useTestStore.js             # Active exam state & grading
│   │
│   ├── styles/                         # Tailwind directives & CSS 3D utilities
│   │   └── index.css
│   └── main.jsx                        # React DOM root mounting
│
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 4. Getting Started Locally

### Prerequisites
- Node.js $\ge 18$ (Tested on Node v22.19.0)
- npm $\ge 9$ (Tested on npm 10.9.3)

### Installation
```bash
# Clone or navigate into the project directory
cd d:\Workspace\recallify

# Install dependencies
npm install
```

### Development Server
```bash
# Start local Vite development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Run Automated Unit Tests
```bash
# Execute the domain logic test suite
node scripts/test_business_logic.js
```

### Production Build & Preview
```bash
# Compile and bundle optimized production build
npm run build

# Preview the minified production build locally
npm run preview
```

---

## 5. How Mock Data Is Organized & How to Add Subjects

All mock data is located inside `src/data/`:
1. `src/data/subjects.js`: Defines subject metadata, badges, colors, and question totals.
2. `src/data/questions/subject-01.js`: SWD301 questions array.
3. `src/data/questions/subject-02.js`: SBA301 questions array.

### Question Schema
Each question adheres to the following specification:
```javascript
{
  id: "subject-03-q001",           // Unique identifier
  subjectId: "subject-03",         // Foreign key to subject
  topic: "Chapter 1: Overview",    // Chapter or syllabus section
  type: "single",                  // "single" | "multiple"
  question: "What is ...?",        // Question prompt
  options: [
    { id: "A", text: "Option A" },
    { id: "B", text: "Option B" },
    { id: "C", text: "Option C" },
    { id: "D", text: "Option D" }
  ],
  correctAnswer: "B",              // String ("B") for single, Array (["A", "C"]) for multi
  explanation: "Official citation and rationale."
}
```

### Adding a New Subject
1. Create `src/data/questions/subject-03.js` exporting `subject03Questions`.
2. Register the subject in `src/data/questions/index.js` in `questionBanks` and exports.
3. Add a subject entry to `src/data/subjects.js` with `id`, `code`, `name`, `description`, and `totalQuestions`.
4. The dashboard, subject selection, flashcards, learning queue, and test generators will immediately recognize and support the new course without additional code modifications.

