# UI Design Specification: 14 Core Screens

This document defines the screen-level layout, components, and interaction patterns for all 14 screens of the Recallify platform based on the Stitch AI generated design architecture.

---

## Screen 1: Dashboard (`/`)
- **Header:** Sticky navbar with Recallify spark logo, Navigation links (Dashboard, Subjects, Tests, Analytics), Search shortcut (⌘K), Streak indicator ("12 Day Streak 🔥"), and profile menu.
- **Hero Banner:** Personalized greeting ("Welcome back, Student! 👋"), daily goal meter (e.g. 45/60 reviewed, 75% complete), and primary "Continue Session" CTA button.
- **Key Metrics Grid:** 4-card responsive layout:
  1. Total Questions (527 questions).
  2. Questions Mastered (e.g. 389 concepts, 74%).
  3. Learning Accuracy (e.g. 91.4% with sparkline trend).
  4. Completed Tests (e.g. 28 tests with 88% average score).
- **Active Subject Cards:**
  - Card 1: SWD301 — Software Architecture & Design (198 questions, 20 chapters).
  - Card 2: SBA301 — Modern React & Web Development (329 questions, 22 chapters).
  - Each card contains: Subject badge, exam timeline, progress bar, chapter pills, and 3 mode action buttons: **Flashcards**, **Learn**, and **Test**.
- **Sidebar Activities:** Recent test logs, weekly study activity chart, and quick memory tips.

---

## Screen 2: Subject Selection (`/subjects`)
- **Header:** Page title with search bar and category filters ("All", "Software Engineering", "Frontend").
- **Grid Layout:** Prominent interactive cards for SWD301 and SBA301.
- **Card Content:** Code, Name, Syllabus overview, Total Questions, Current mastery status, and "Explore Subject" button.

---

## Screen 3: Subject Detail / Question Bank (`/subjects/:subjectId`)
- **Breadcrumb Navigation:** Dashboard > Subjects > SWD301 / SBA301.
- **Subject Banner:** Title, course description, total questions, mastery percentage, launch buttons for Flashcards, Learn, and Test.
- **Tabbed Interface:**
  - Tab 1: **Study Modes:** Overview of available modes with descriptions and quick-launch buttons.
  - Tab 2: **Question Bank:** Complete searchable list of questions. Includes chapter/topic filter dropdown, keyword search, option inspection, and answer toggle.

---

## Screen 4: Flashcards (`/subjects/:subjectId/flashcards`)
- **Top Bar:** Back button to subject, Progress indicator ("Card 14 of 198"), Bookmark toggle button with icon.
- **Center Canvas:** Large 3D interactive Flashcard (`min-h-[380px]`, `rounded-2xl`, `shadow-md`):
  - **Front:** Chapter pill tag, Question number, Clear high-contrast question prompt, "Click or press Space to reveal answer" hint.
  - **Back:** "Correct Answer" badge in emerald green, Official answer text, Detailed explanation, and textbook/lecture reference.
- **Bottom Navigation:**
  - Previous (`←` or click)
  - Flip Card button (`Space` or click)
  - Next (`→` or click)
  - Shuffle toggle button
  - Keyboard hint bar (`←/→` Navigate, `Space` Flip, `B` Bookmark).
- **Completion Card:** Appears when the deck reaches the end with options to Restart, Shuffle, or switch to Learning Mode.

---

## Screen 5: Learning Session (`/subjects/:subjectId/learn`)
- **Top Bar:** Subject title, Round badge ("Round 1" or "Repetition Round 2"), Linear progress bar, Real-time counters (Correct: 6, Incorrect: 2, Accuracy: 75%).
- **Question Container:** Max-width 768px centered container:
  - Chapter tag and question type indicator (`Single Choice` or `Multiple Choice - Select all that apply`).
  - Question prompt in 20px semibold Inter.
  - Options list: 4-5 full-width option cards (`OptionItem`).
- **Interaction:**
  - Single Choice: Clicking an option selects it. For immediate feedback, option evaluates right away.
  - Multiple Choice: Clicking options toggles checkboxes; "Submit Answer" button triggers evaluation.

---

## Screen 6: Immediate Feedback State (Within Learning Session)
- **Visual Feedback:**
  - Correct Answer option turns soft emerald (`bg-emerald-50`, `border-emerald-500`) with checkmark badge.
  - If user chose an incorrect answer, user's choice turns soft rose (`bg-rose-50`, `border-rose-500`) with X badge.
  - Non-selected incorrect options fade to 60% opacity.
  - All option choices lock immediately.
- **Feedback Banner:**
  - Success banner ("Excellent! That is correct.") or Error banner ("Needs Review! The correct answer is highlighted.").
  - Detailed explanation container explaining why the answer is correct and quoting lecture/slide references.
- **Continue Action:** Large focused "Continue" button (`Enter` key support) to advance to next question.

---

## Screen 7: Learning Summary (`/subjects/:subjectId/learn/summary`)
- **Round Completion Card:**
  - Round Number ("Round 1 Completed" or "Repetition Round 2 Completed").
  - Circular or radial accuracy gauge showing round score.
  - Metric counters: Total Round Questions, Correct in Round, Incorrect in Round.
  - Mastered count vs Needs Review count.
- **Conditional Actions:**
  - If `roundIncorrect.length > 0`:
    - **Primary Button:** "Review Incorrect Questions (Count)" (Triggers Screen 8).
    - **Secondary Button:** "Finish Learning Session".
  - If `roundIncorrect.length == 0`:
    - Celebratory 100% Mastery graphic / confetti.
    - **Primary Button:** "Finish Learning & Return to Subject".

---

## Screen 8: Incorrect Questions Review (Repetition Round)
- **Top Badge:** "Repetition Round X — Focusing on Y missed questions".
- **Info Callout:** Explains the spaced repetition rule: *"Only questions you missed in the previous round are included here. Answering correctly will graduate them into the Mastered pool."*
- **Execution:** Loads the exact subset of incorrect questions into the active queue. Uses identical immediate feedback evaluation (Screens 5 & 6).

---

## Screen 9: Test Configuration Modal (`/subjects/:subjectId/test/new`)
- **Modal Dialog:**
  - Subject Name & total questions available.
  - Question Count Selector: Slider and number input (validated between 5 and max available, default 20).
  - Test Title input (default: "[Subject Code] Practice Exam").
  - Randomize order toggle (enabled by default).
  - "Start Exam" primary button.

---

## Screen 10: Test Interface (`/tests/:testId`)
- **Exam Header:** Test title, Elapsed timer, Question progress ("Question 7 of 20"), "Flag for Review" button.
- **Two-Column Assessment Layout:**
  - **Left / Main Column:** Clean exam question view with options.
    - Zero hints or correctness indicators! Answers remain strictly hidden.
    - Radio buttons for single-choice, checkboxes for multiple-choice.
    - "Previous Question" and "Next Question" buttons.
  - **Right Column / Drawer:** Question Navigation Grid.
    - Numbered pills (1 to N) with visual states:
      - Gray: Unanswered.
      - Indigo: Answered.
      - Amber flag icon: Flagged for review.
      - Blue outline: Current active question.
    - "Submit Exam" primary button.

---

## Screen 11: Test Submission Confirmation Modal
- **Dialog:**
  - Summary stats: Total Questions, Answered Count, Unanswered Count.
  - If unanswered questions exist: Amber warning box stating: *"You have X unanswered questions. Unanswered questions will be scored as incorrect."*
  - Buttons: "Return to Test" (secondary) and "Confirm & Submit" (primary).

---

## Screen 12: Test Result Screen (`/tests/:testId/result`)
- **Result Hero Card:**
  - Final Score Percentage in 48px display font.
  - Pass/Fail Badge (Pass $\ge 70\%$ in Emerald, Fail $< 70\%$ in Rose).
  - Summary statistics: Correct answers, Incorrect answers, Unanswered questions, Time taken.
- **Action Toolbar:**
  - "Review All Answers" (scrolls to or opens Screen 13).
  - "Retry Test" (initiates a new randomized test).
  - "Return to Subject".

---

## Screen 13: Test Answer Review (`/tests/:testId/review`)
- **Filter Tabs:** "All Questions (N)", "Incorrect Only (N)", "Flagged Only (N)".
- **Detailed Question Review List:**
  - Each item renders question prompt, topic label, and question index.
  - Status indicator: Correct (Emerald), Incorrect (Rose), or Unanswered (Amber).
  - User's selected option is explicitly marked.
  - Official correct answer is highlighted in emerald green.
  - Full explanation and slide/textbook source reference.

---

## Screen 14: Progress, Analytics & Settings (`/analytics`)
- **Analytics View:**
  - Overall study metrics (total questions attempted, global accuracy, study streak).
  - Subject Mastery Breakdown: Interactive Recharts bar/radar chart comparing SWD301 vs SBA301.
  - Test Score History: Interactive line chart tracking scores across consecutive attempts.
  - Completed Test Logs table with date, subject, score, and "View Review" link.
- **Danger Zone / Reset Progress:**
  - "Reset All Progress" card.
  - Opens double-confirmation modal explaining that learning stats, test logs, and bookmarks will be reset, while mock question banks remain intact.

