# Business Rules Specification (BRS)

## 1. Question Bank Integrity & Immutability Rules
- **BR-DATA-01 (Immutability):** Source question banks extracted from course documents are strictly read-only within the client application. Users cannot delete, mutate, or add questions to standard banks.
- **BR-DATA-02 (Unique Identity):** Every question possesses an immutable ID string structured as `{subjectCode}-q{index}` (e.g., `swd301-q001`, `sba301-q042`).
- **BR-DATA-03 (Option Conformity):** Each option contains an ID (`A`, `B`, `C`, etc.) and non-empty text.

---

## 2. Flashcards Engine Rules
- **BR-FC-01 (Two-Sided Inspection):** Card fronts must never display the answer key or explanation. Card backs must display the correct answer and explanation (where available).
- **BR-FC-02 (Zero-Penalty Exploration):** Flipping or browsing flashcards does not penalize or modify the student's mastery score; flashcards serve exclusively as conceptual familiarization.
- **BR-FC-03 (Stateful Shuffle):** Shuffling randomizes all cards using Fisher-Yates and safely preserves the active bookmark state.

---

## 3. Adaptive Learning Mode & Repetition Queue Rules (Critical)
- **BR-LRN-01 (Immediate Answer Locking):** Once an answer is submitted, all option choices for that question are permanently disabled. The user cannot switch choices after evaluation.
- **BR-LRN-02 (Evaluation Criteria):**
  - **Single Choice:** Evaluated as correct if `selectedOptionId === question.correctAnswer`.
  - **Multiple Choice:** Evaluated as correct if and only if the set of selected option IDs exactly matches the set in `question.correctAnswer` (i.e. all correct options chosen, and no incorrect options chosen).
- **BR-LRN-03 (Round Separation):**
  - Learning executes in sequential rounds ($R_1, R_2, R_3, \dots$).
  - Round 1 contains all selected subject questions (or filtered chapter subset).
  - Answering increments either `roundCorrect` or `roundIncorrect`.
- **BR-LRN-04 (Repetition Queue Management — Critical Rule):**
  - When Round $R$ completes, if `roundIncorrect.length > 0`:
    - The questions answered **correctly** in Round $R$ are marked as **Mastered** and permanently removed from subsequent repetition queues.
    - The questions answered **incorrectly** form Round $R+1$'s new question queue.
    - Previous question IDs are strictly preserved.
    - Repetition continues until all questions in the queue are answered correctly, or the user manually exits the session.
- **BR-LRN-05 (Mastery Graduation):** Once a question is answered correctly in any round, it must not appear in the next round of that session.

---

## 4. Formal Test Mode Rules
- **BR-TST-01 (Question Limit & Validation):**
  - Allowed test question count $N$: $5 \le N \le \text{totalAvailableQuestions}$.
  - Default $N = 20$.
- **BR-TST-02 (Non-Duplicate Random Sampling):** Test generation uses reservoir sampling or Fisher-Yates slicing to guarantee that no test instance contains duplicate questions.
- **BR-TST-03 (Strict Test Secrecy Rule):**
  - During an ongoing test, the application is strictly prohibited from rendering:
    - Whether any answer is correct or incorrect.
    - Real-time score or percentage.
    - Answer explanations.
    - Visual cues (e.g. green/red styling) identifying the answer key.
  - The DOM must not leak answer correctness in accessible attributes or hidden elements prior to submission.
- **BR-TST-04 (Bidirectional Navigation & Modifiability):**
  - Students can navigate forward and backward freely across all questions in the test.
  - Students can alter any answer until the final "Submit Test" action is confirmed.
- **BR-TST-05 (Submission Confirmation):**
  - Submitting requires modal confirmation.
  - If unanswered questions exist, the modal must explicitly display an amber warning: *"You have X unanswered questions out of Y. Are you sure you want to submit?"*
- **BR-TST-06 (Scoring & Grading):**
  - $\text{Score} = \left( \frac{\text{Correct Count}}{\text{Total Questions}} \right) \times 100\%$
  - Pass Status: $\text{Score} \ge 70\%$ yields **PASS**; otherwise **FAIL**.
- **BR-TST-07 (Session Retention):** Refreshing the browser during a test must restore the active test questions and recorded answers from `localStorage` without prematurely submitting the exam.

---

## 5. Local Persistence & State Management Rules
- **BR-STR-01 (Prefix & Namespacing):** All stored keys must use the `recallify_` namespace:
  - `recallify_stats_v1`: Aggregated mastery statistics and counts.
  - `recallify_tests_v1`: History of completed tests.
  - `recallify_active_test_v1`: Active in-progress test session for refresh recovery.
  - `recallify_active_learning_v1`: Active learning session state.
  - `recallify_bookmarks_v1`: Array of bookmarked question IDs.
- **BR-STR-02 (Defensive Deserialization):**
  - JSON parse errors or malformed storage payloads must automatically fall back to safe default values without throwing uncaught exceptions.
- **BR-STR-03 (Reset Progress Protection):**
  - Resetting progress wipes only `recallify_` user data.
  - Resetting progress never alters the built-in question banks.

