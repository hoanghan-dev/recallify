# System Requirements Specification (SRS)

## 1. Project Purpose & Scope
**Recallify** is an autonomous, frontend-only exam preparation platform inspired by Quizlet. It provides students with three primary modes of studying:
1. **Flashcards Mode:** Fast-paced spatial repetition and conceptual familiarization.
2. **Learning Mode:** Interactive adaptive learning with immediate answer evaluation and a mandatory repetition queue for questions answered incorrectly until mastery.
3. **Test Mode:** Formal exam simulation with question randomization, navigation grid, hidden answers during the test, confirmation dialogues, and post-submission reviews.

## 2. Functional Requirements (FR)

### FR-01: Subject & Question Bank Management
- **FR-01.1:** Present an interactive dashboard displaying all available subjects (initially SWD301 and SBA301).
- **FR-01.2:** Display key subject metrics: total questions, answered questions, mastery percentage, topics covered.
- **FR-01.3:** Provide a dedicated Subject Detail / Question Bank view allowing users to inspect all questions, filter by topic, search questions, and launch learning modes.
- **FR-01.4:** Maintain read-only question banks derived directly from source documents.

### FR-02: Flashcards Mode
- **FR-02.1:** Render questions one card at a time with smooth 3D CSS flip animation.
- **FR-02.2:** Front of card reveals question text, chapter/topic, question number, and bookmark action.
- **FR-02.3:** Back of card reveals correct answer(s) and full explanation.
- **FR-02.4:** Support Next, Previous, and Shuffle controls.
- **FR-02.5:** Support keyboard navigation:
  - `Space` or `Up`/`Down`: Flip card
  - `Left` / `Right`: Previous / Next card
  - `B`: Toggle bookmark
- **FR-02.6:** Track card position progress indicator (`Current / Total`).

### FR-03: Learning Mode (Adaptive Queue & Spaced Repetition)
- **FR-03.1:** Load questions for the selected subject into Round 1.
- **FR-03.2:** Present questions sequentially with clear option selectors (radio for single-choice, checkboxes for multiple-choice).
- **FR-03.3:** Upon answer submission:
  - If correct: Display success indicator, highlight correct option in green, display explanation, show "Continue" button.
  - If incorrect: Display error indicator, highlight chosen answer in red, highlight correct answer in green, display explanation, show "Continue" button.
- **FR-03.4:** Lock choices once evaluated; prevent re-selection.
- **FR-03.5:** Update real-time session counters: Current Question, Remaining in Round, Correct Count, Incorrect Count, Real-time Accuracy.
- **FR-03.6:** At the end of the round, render the Learning Summary:
  - Total round questions, correct count, incorrect count, accuracy rate.
  - Action 1: "Review Incorrect Questions" (if any questions were answered incorrectly).
  - Action 2: "Finish Session" / "Return to Subject".
- **FR-03.7 (Critical Business Rule):** When "Review Incorrect Questions" is selected:
  - Initialize a new repetition round containing **only** the questions answered incorrectly in the previous round.
  - In the new round, evaluate answers immediately.
  - Questions answered correctly in the review round are marked as mastered and removed from subsequent repetition queues.
  - Questions answered incorrectly remain in the repetition queue.
  - Allow consecutive review rounds until all questions are mastered or the user finishes.
- **FR-03.8:** Handle edge cases: 100% correct in Round 1, 100% incorrect, browser refresh persistence, session exit.

### FR-04: Test Mode (Formal Assessment Simulation)
- **FR-04.1:** Test Configuration dialog:
  - Number of questions (validated: between 5 and total subject questions, default 20).
  - Optional custom test title.
  - Mode selection: Random or sequential.
- **FR-04.2:** Exam Execution:
  - Generate a non-duplicate random question subset.
  - Display one question at a time with question navigation drawer/sidebar.
  - Allow answering, modifying answers, and flagging questions for review.
  - Visual status on question index: Unanswered, Answered, Flagged.
  - **STRICT PROHIBITION:** Do NOT reveal correct/incorrect answers, explanations, or scores prior to submission.
- **FR-04.3:** Test Submission:
  - Explicit "Submit Test" button.
  - Modal confirmation showing total questions, answered count, and unanswered warning.
- **FR-04.4:** Test Results & Review:
  - Calculate final score percentage, pass/fail status (passing threshold $\ge 70\%$).
  - Breakdown: Total questions, Correct, Incorrect, Unanswered, Time spent.
  - In-depth Review Mode: View all questions with user selection vs correct answer, color-coded badges, and explanations.
  - Action buttons: "Review All Answers", "Retry Test", "Return to Subject".

### FR-05: Dashboard & Progress Analytics
- **FR-05.1:** High-level metrics: Total Subjects (2), Total Questions (527), Total Questions Attempted, Overall Accuracy, Completed Tests.
- **FR-05.2:** Subject-wise progress cards with visual progress bars.
- **FR-05.3:** Recent test history with scores, timestamps, and quick review links.
- **FR-05.4:** Bookmarked questions view for targeted quick study.
- **FR-05.5:** Recharts visualizations: Accuracy trends and topic mastery.

### FR-06: Local Persistence & Storage Architecture
- **FR-06.1:** Zero-backend architecture relying on browser `localStorage`.
- **FR-06.2:** Schema versioning with safe JSON serialization/deserialization.
- **FR-06.3:** Fallback to defaults on corrupt storage state.
- **FR-06.4:** "Reset All Progress" modal with double confirmation, preserving immutable question banks.

## 3. Non-Functional Requirements (NFR)
- **NFR-01 (Performance):** Instantaneous route transitions ($< 100$ms), smooth 60fps animations.
- **NFR-02 (Responsiveness):** Fully responsive across Mobile (375px+), Tablet (768px+), and Desktop (1280px+).
- **NFR-03 (Accessibility):** WCAG 2.1 AA compliant color contrasts, semantic HTML, keyboard navigable.
- **NFR-04 (Reliability):** Zero uncaught runtime errors; defensive programming for state management.
- **NFR-05 (Aesthetics):** Modern educational SaaS interface inspired by Quizlet: clean typography (Inter / system font stack), rounded corners, subtle shadows, crisp feedback states.

