# Use Case Specification: Recallify Exam Preparation Platform

## 1. System Actor
- **Student (Primary Actor):** An autonomous learner preparing for academic exams using Flashcards, Learning Mode, and Simulated Tests.

---

## 2. Use Case Catalog & Detail Specifications

### UC-01: View Dashboard
- **Actor:** Student
- **Preconditions:** Application is loaded in modern web browser.
- **Main Flow:**
  1. Student navigates to the application root `/`.
  2. System loads aggregated metrics from `localStorage`: total subjects, total questions, questions mastered, overall accuracy, completed tests.
  3. System renders subject overview cards with progress bars.
  4. System renders recent activity timeline, test history summary, and bookmarked questions counter.
- **Alternative Flow:**
  - *2a. First-time visit (empty storage):* System initializes default user stats (0 answers, 0 tests) and displays starter guidance.
- **Postconditions:** Student sees high-level performance metrics and quick-start actions.

### UC-02: View Subjects
- **Actor:** Student
- **Preconditions:** System has valid subject definitions loaded.
- **Main Flow:**
  1. Student clicks "Subjects" in the navigation bar.
  2. System lists all available subjects (SWD301 and SBA301) with code, title, topic count, total questions, answered questions, and mastery percentage.
- **Postconditions:** Student chooses a subject to study.

### UC-03: Select Subject
- **Actor:** Student
- **Preconditions:** Subject list is visible.
- **Main Flow:**
  1. Student clicks on a specific subject card (e.g. SWD301).
  2. System transitions to `/subjects/:subjectId`.
  3. System displays the Subject Overview Hub featuring launch buttons for Flashcards, Learning, and Test modes, alongside subject syllabus topics.
- **Postconditions:** Active subject is set in memory.

### UC-04: View Question Bank
- **Actor:** Student
- **Preconditions:** Subject is selected.
- **Main Flow:**
  1. Student selects "Question Bank" tab inside the Subject Hub.
  2. System displays the complete list of questions for the subject.
  3. Student can filter questions by chapter/topic or search by keyword.
  4. System displays question prompt, options, answer key, and explanation.
- **Postconditions:** Student browses all questions in read-only mode.

### UC-05: Start Flashcards
- **Actor:** Student
- **Preconditions:** Subject is selected.
- **Main Flow:**
  1. Student clicks "Start Flashcards" on the Subject Hub or navigation.
  2. System loads questions for the subject into the flashcard engine.
  3. System renders Card 1 of N in its front-facing state.
- **Postconditions:** Flashcards session initialized at index 0.

### UC-06: Flip Flashcard
- **Actor:** Student
- **Preconditions:** Flashcards session is active.
- **Main Flow:**
  1. Student clicks the flashcard or presses `Space`/`Up`/`Down`.
  2. System triggers a 3D perspective flip transition.
  3. System renders the back side revealing correct answer(s) and explanation.
- **Alternative Flow:**
  - *1a. Flipping back:* Student clicks or presses flip key again to return to the front.
- **Postconditions:** Card flip state toggles between front and back.

### UC-07: Navigate Flashcards
- **Actor:** Student
- **Preconditions:** Flashcards session is active.
- **Main Flow:**
  1. Student clicks "Next" (or presses `ArrowRight`) or "Previous" (or presses `ArrowLeft`).
  2. System updates the current index ($i \leftarrow i \pm 1$).
  3. System resets card rotation to front.
  4. System updates progress bar ($i / N$).
- **Alternative Flow:**
  - *1a. At last card:* Clicking "Next" wraps to first card or prompts completion.
- **Postconditions:** Current card updated.

### UC-08: Shuffle Flashcards
- **Actor:** Student
- **Preconditions:** Flashcards session is active.
- **Main Flow:**
  1. Student clicks "Shuffle" toggle button.
  2. System performs a Fisher-Yates shuffle on the question array.
  3. System resets index to 0 with card facing front.
- **Postconditions:** Deck order randomized.

### UC-09: Bookmark Question
- **Actor:** Student
- **Preconditions:** Question is displayed in Flashcards, Learning, Question Bank, or Review.
- **Main Flow:**
  1. Student clicks the bookmark icon (`B` key in Flashcards).
  2. System toggles the question ID inside the `bookmarkedQuestions` array in `localStorage`.
  3. System displays immediate visual badge change.
- **Postconditions:** Bookmark status persisted.

### UC-10: Start Learning Session
- **Actor:** Student
- **Preconditions:** Subject selected.
- **Main Flow:**
  1. Student clicks "Start Learning" on Subject Hub.
  2. System initializes a new learning session in `learningStore`:
     - `round`: 1
     - `queue`: all subject questions (shuffled or sequential)
     - `currentIndex`: 0
     - `roundCorrect`: []
     - `roundIncorrect`: []
     - `mastered`: []
  3. System renders the first question.
- **Postconditions:** Learning engine active; question presented.

### UC-11: Answer Question
- **Actor:** Student
- **Preconditions:** Learning session question presented.
- **Main Flow:**
  1. For single choice: Student clicks an option.
  2. For multiple choice: Student selects one or more options and clicks "Submit Answer".
  3. System passes selection to answer evaluation engine.
- **Postconditions:** Selection captured.

### UC-12: View Immediate Feedback
- **Actor:** Student
- **Preconditions:** Answer submitted in Learning Mode.
- **Main Flow:**
  1. System compares user selection against `correctAnswer`.
  2. If correct:
     - Mark question correct; add question ID to `roundCorrect`.
     - Highlight selected option in emerald green with check icon.
     - Display "Correct!" banner and explanation.
  3. If incorrect:
     - Mark question incorrect; add question ID to `roundIncorrect`.
     - Highlight selected option in rose red with X icon.
     - Highlight actual correct answer in emerald green.
     - Display "Incorrect" banner and explanation.
  4. Options become read-only.
  5. "Continue" button is focused.
- **Postconditions:** Feedback displayed; question recorded in round stats.

### UC-13: Continue Learning
- **Actor:** Student
- **Preconditions:** Feedback is visible.
- **Main Flow:**
  1. Student clicks "Continue" (or presses `Enter`).
  2. If `currentIndex < queue.length - 1`:
     - System advances `currentIndex` by 1.
     - Clears feedback state and renders next question.
  3. If `currentIndex == queue.length - 1`:
     - System invokes UC-14 (View Learning Summary).
- **Postconditions:** Next question rendered or round summary triggered.

### UC-14: View Learning Summary
- **Actor:** Student
- **Preconditions:** All questions in current learning round answered.
- **Main Flow:**
  1. System displays Round Completion Card:
     - Current Round Number.
     - Total questions answered in this round.
     - Correct count and accuracy percentage.
     - Number of mastered questions vs questions needing review.
  2. If `roundIncorrect.length > 0`:
     - Primary button: "Review Incorrect Questions (Count)" (triggers UC-15).
     - Secondary button: "Finish Session" (triggers UC-16).
  3. If `roundIncorrect.length == 0`:
     - Displays "Mastery Achieved! 100% Correct" celebratory banner.
     - Primary button: "Finish Learning".
- **Postconditions:** Round summary displayed.

### UC-15: Review Incorrect Questions (Critical Business Rule)
- **Actor:** Student
- **Preconditions:** Round completed with `roundIncorrect.length > 0`.
- **Main Flow:**
  1. Student clicks "Review Incorrect Questions".
  2. System generates Round $R + 1$:
     - New `queue` contains only the questions whose IDs are in `roundIncorrect`.
     - `roundCorrect` in previous round are added to `mastered` set.
     - Resets `roundCorrect = []`, `roundIncorrect = []`, `currentIndex = 0`.
     - Round counter increments ($R \leftarrow R + 1$).
  3. System renders the first question from the repetition queue.
  4. Evaluation continues as per UC-11 and UC-12.
- **Postconditions:** Repetition round started with narrowed queue.

### UC-16: Complete Learning Session
- **Actor:** Student
- **Preconditions:** Student chooses "Finish Session" or completes all rounds.
- **Main Flow:**
  1. System writes session results to `learningStats` in `localStorage`:
     - Questions answered, questions mastered, session duration, accuracy.
  2. System resets active learning session state.
  3. System navigates to Subject Hub with success notification.
- **Postconditions:** Learning progress updated in persistent storage.

### UC-17: Configure Test
- **Actor:** Student
- **Preconditions:** Subject Hub open.
- **Main Flow:**
  1. Student clicks "Create Test".
  2. System opens Test Configuration modal.
  3. Student specifies:
     - Number of questions (slider / numeric input, validated: min 5, max total subject questions, default 20).
     - Test Title (optional, default: "[Subject Code] Practice Exam").
     - Question order (Randomized or Chapter Order).
  4. Student clicks "Start Test".
- **Postconditions:** Test parameters validated; system initiates UC-18.

### UC-18: Start Test
- **Actor:** Student
- **Preconditions:** Valid test configuration provided.
- **Main Flow:**
  1. System executes non-duplicate random question selection:
     - Pulls exact count of questions from question bank.
     - Ensures zero duplicate questions.
  2. Initializes test state in `testStore`:
     - `testId`: unique timestamped ID.
     - `questions`: randomized subset.
     - `userAnswers`: empty object `{ [questionId]: selection }`.
     - `flaggedQuestions`: Set of flagged question IDs.
     - `startTime`: `Date.now()`.
     - `status`: `'in_progress'`.
  3. **CRITICAL SECURITY/EVALUATION RULE:** Correct answers are strictly hidden from UI state and DOM.
  4. Navigates to `/tests/:testId`.
- **Postconditions:** Test runner interface active.

### UC-19: Answer Test Question
- **Actor:** Student
- **Preconditions:** Test is in progress.
- **Main Flow:**
  1. Student selects/unselects an option for the current question.
  2. System records `userAnswers[currentQuestionId] = selection`.
  3. Question index indicator highlights question as "Answered".
  4. Student is free to change answer at any time prior to submission.
- **Postconditions:** Answer updated in memory and cached in test storage.

### UC-20: Navigate Test Questions
- **Actor:** Student
- **Preconditions:** Test is in progress.
- **Main Flow:**
  1. Student navigates via:
     - "Next" / "Previous" buttons.
     - Question Navigation Grid: clicking any question pill jumps directly to that question.
     - "Flag for Review" button: marks question with a yellow flag indicator.
- **Postconditions:** Current view switches to target question.

### UC-21: Submit Test
- **Actor:** Student
- **Preconditions:** Test is in progress.
- **Main Flow:**
  1. Student clicks "Submit Test".
  2. System triggers Confirmation Modal displaying:
     - Total questions.
     - Number of answered questions.
     - Number of unanswered questions (with alert warning if $> 0$).
  3. Student confirms submission.
  4. System computes score (UC-22), records end time, saves record to `testHistory`, and transitions to Test Result screen.
- **Alternative Flow:**
  - *3a. Return to test:* Student clicks "Return to Test" to continue answering.
- **Postconditions:** Test submitted; answers locked; results generated.

### UC-22: View Test Results
- **Actor:** Student
- **Preconditions:** Test submitted.
- **Main Flow:**
  1. System evaluates `userAnswers` against actual `correctAnswer` for every test question:
     - Calculates: Correct Count, Incorrect Count, Unanswered Count, Score Percentage.
     - Evaluates Pass/Fail status (Passing $\ge 70\%$).
     - Computes duration (minutes and seconds).
  2. Renders high-impact result summary card with radial/circular score chart and stat badges.
  3. Offers actions: "Review All Answers" (UC-23), "Retry Test" (UC-24), "Return to Subject".
- **Postconditions:** Score presented.

### UC-23: Review Test Answers
- **Actor:** Student
- **Preconditions:** Test results visible.
- **Main Flow:**
  1. Student clicks "Review Answers" (or scrolls to review section).
  2. System renders all test questions with:
     - Student's selected answer.
     - Official correct answer.
     - Color-coded badges (Correct: Emerald, Incorrect: Rose, Unanswered: Amber).
     - Full explanation and source reference.
  3. Student can filter review list by: "All", "Incorrect Only", "Flagged".
- **Postconditions:** Question-by-question post-test review complete.

### UC-24: Retry Test
- **Actor:** Student
- **Preconditions:** Test results visible.
- **Main Flow:**
  1. Student clicks "Retry Test".
  2. System generates a fresh randomized test instance with the same parameters or questions.
  3. Test starts at question 1.
- **Postconditions:** New test in progress.

### UC-25: View Learning Statistics
- **Actor:** Student
- **Preconditions:** Student clicks "Progress" or "Analytics".
- **Main Flow:**
  1. System compiles analytics across all subjects:
     - Questions answered by subject.
     - Average test score.
     - Chapter mastery breakdown.
     - Activity timeline.
  2. Renders interactive charts using Recharts.
- **Postconditions:** Analytics displayed.

### UC-26: View Test History
- **Actor:** Student
- **Preconditions:** At least one test completed.
- **Main Flow:**
  1. Student navigates to "History" or Dashboard Test History widget.
  2. System renders list of past tests: Subject, Date, Score %, Correct/Total, Duration.
  3. Clicking any past test opens its archived answer review.
- **Postconditions:** Past exam logs accessible.

### UC-27: Reset Progress
- **Actor:** Student
- **Preconditions:** Student accesses Settings or Dashboard Reset.
- **Main Flow:**
  1. Student clicks "Reset All Progress".
  2. System opens a high-priority warning dialog requiring explicit confirmation.
  3. Upon confirmation, system clears user progress keys in `localStorage` (`recallify_stats`, `recallify_tests`, `recallify_bookmarks`, `recallify_learning`).
  4. System does NOT alter the read-only question banks.
  5. UI state resets to 0% fresh state.
- **Postconditions:** Progress cleared cleanly.

