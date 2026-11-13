# UI Component Structure & Hierarchy

## 1. Component Hierarchy Overview

```text
App (Providers: Router, Toast / Sonner, Theme)
│
├── Layout
│   ├── Navbar
│   │   ├── BrandLogo (Recallify with spark icon)
│   │   ├── NavigationLinks (Dashboard, Subjects, Tests, Analytics)
│   │   └── QuickStatsBadge (Total Questions Mastered / Total)
│   ├── PageContainer
│   │   └── [Active Route View]
│   └── Footer
│       ├── SubjectLinks
│       ├── ShortcutsGuide
│       └── VersionInfo
│
├── Views & Features
│   │
│   ├── DashboardView
│   │   ├── WelcomeBanner (Daily streak & motivation)
│   │   ├── StatCardGrid (Total Questions, Mastered, Accuracy, Completed Tests)
│   │   ├── SubjectCardsList
│   │   │   └── SubjectCard (Progress radial, Mode action buttons)
│   │   ├── RecentTestsWidget
│   │   └── BookmarkedQuestionsDrawer
│   │
│   ├── SubjectHubView (/subjects/:subjectId)
│   │   ├── SubjectHeader (Title, Code, Topic badges, Quick stats)
│   │   ├── ModeSelectorCards (Flashcards, Learning, Create Test)
│   │   ├── TopicAccordion / ChapterBreakdown
│   │   └── QuestionBankTab (Filterable, searchable question browser)
│   │
│   ├── FlashcardsView (/subjects/:subjectId/flashcards)
│   │   ├── FlashcardHeader (Subject breadcrumb, Progress counter, Bookmark toggle)
│   │   ├── FlipCardContainer
│   │   │   ├── FlipCardFront (Topic pill, Question text, Click to reveal hint)
│   │   │   └── FlipCardBack (Correct Answer badges, Detailed explanation)
│   │   ├── FlashcardControls (Prev, Next, Flip, Shuffle, Keyboard hints)
│   │   └── FlashcardEndSummary (Celebration, Restart, Go to Learning)
│   │
│   ├── LearningView (/subjects/:subjectId/learn)
│   │   ├── LearningHeader (Round badge, Progress bar, Real-time correct/incorrect counters)
│   │   ├── QuestionActiveCard
│   │   │   ├── QuestionPrompt (Chapter label, Question text, Type indicator)
│   │   │   └── OptionsList
│   │   │       └── OptionItem (Radio/Checkbox, Key letter, Text, State-based styling)
│   │   ├── FeedbackBanner (Success / Error banner with sound-effect icon & explanation)
│   │   ├── ActionFooter ("Submit Answer" / "Continue" buttons)
│   │   └── LearningRoundSummaryModal
│   │       ├── RoundStatsDisplay (Accuracy, Mastered count, Needs Review count)
│   │       ├── ActionButton: "Review Incorrect Questions (Count)"
│   │       └── ActionButton: "Finish Learning"
│   │
│   ├── TestView (/tests/:testId or /subjects/:subjectId/test)
│   │   ├── TestHeader (Test title, Question progress, Flag toggle, Timer)
│   │   ├── TestLayout (Two-column: Question view + Navigation drawer)
│   │   │   ├── QuestionActivePanel
│   │   │   │   ├── QuestionPrompt (Clean assessment view, NO answers revealed)
│   │   │   │   └── OptionSelectors (Radio/Checkbox)
│   │   │   └── QuestionNavigatorGrid
│   │   │       ├── QuestionPills (Answered, Unanswered, Flagged)
│   │   │       └── SubmitExamButton
│   │   ├── TestSubmitConfirmModal (Unanswered warning & explicit confirmation)
│   │   ├── TestResultView
│   │   │   ├── ScoreScorecard (Circular gauge, Pass/Fail badge, Metric counters)
│   │   │   └── ResultActionToolbar (Review Answers, Retest, Return to Subject)
│   │   └── TestReviewView
│   │       ├── FilterTabs (All Questions, Incorrect Only, Flagged Only)
│   │       └── ReviewQuestionItem (Selected vs Correct, Explanation, Status badge)
│   │
│   └── AnalyticsView (/analytics)
│       ├── OverviewKpis
│       ├── SubjectMasteryBreakdownChart
│       ├── AccuracyTrendTimeline
│       └── ResetProgressSection (Modal dialog with safety confirmation)
```

---

## 2. Reusable Common Components
- `Button`: Primary, Secondary, Outline, Danger, Ghost variants with loading spinners and icon support.
- `Badge`: Status tags (e.g., `Single Choice`, `Multiple Choice`, `Architecture`, `ReactJS`, `Correct`, `Incorrect`).
- `ProgressBar`: Animated linear percentage bar with accessible ARIA values.
- `ScoreRadial`: Circular SVG progress indicator with animated stroke-dashoffset.
- `FlipCard`: CSS 3D transformed card container with `rotateY(180deg)` hardware acceleration.
- `Modal`: Accessible backdrop dialog with focus trapping and ESC-to-close.
- `EmptyState`: Graphic icon, helpful message, and CTA button.

