# State Flow & Transition Specifications

This document models the state transitions and lifecycle flows for Recallify's three primary study modes: Flashcards, Adaptive Learning, and Simulated Test.

---

## 1. Flashcards State Flow

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Loaded: Select Subject & Start
    
    state Loaded {
        [*] --> FrontFacing: Card Index = 0
        FrontFacing --> BackFacing: Flip Action (Click / Space / Up / Down)
        BackFacing --> FrontFacing: Flip Action
        FrontFacing --> FrontFacing: Next / Prev (Index changes, keeps Front)
        BackFacing --> FrontFacing: Next / Prev (Index changes, resets to Front)
        FrontFacing --> FrontFacing: Toggle Bookmark (B key / Click)
        BackFacing --> BackFacing: Toggle Bookmark
        FrontFacing --> FrontFacing: Shuffle Deck (Resets to Card 0)
    }

    Loaded --> Completed: User Reaches End / Exits
    Completed --> Idle: Return to Subject Hub
```

---

## 2. Adaptive Learning Engine State Flow

```mermaid
stateDiagram-v2
    [*] --> Uninitialized
    Uninitialized --> RoundReady: Initialize Session (Load Questions into Round 1)

    state RoundSession {
        [*] --> PresentingQuestion: Set Current Question from Queue
        PresentingQuestion --> Answering: User Clicks Option / Checks Boxes
        Answering --> Evaluating: Click Submit / Select Option
        Evaluating --> ImmediateFeedback: Evaluate Correct / Incorrect
        
        state ImmediateFeedback {
            [*] --> FeedbackLocked: Lock options & Highlight Green/Red
            FeedbackLocked --> RecordStats: Add Q ID to roundCorrect OR roundIncorrect
        }

        ImmediateFeedback --> NextQuestionOrSummary: Click "Continue" (or Enter)
        
        state NextQuestionOrSummary <<choice>>
        NextQuestionOrSummary --> PresentingQuestion: If more questions in round
        NextQuestionOrSummary --> RoundSummary: If all questions in round answered
    }

    state RoundSummary {
        [*] --> CheckRoundErrors
        state CheckRoundErrors <<choice>>
        CheckRoundErrors --> AllMastered: roundIncorrect is empty (100% correct)
        CheckRoundErrors --> HasErrors: roundIncorrect has > 0 questions
        
        state HasErrors {
            [*] --> AwaitingUserChoice
            AwaitingUserChoice --> PrepareNextRound: Click "Review Incorrect Questions"
            AwaitingUserChoice --> SessionFinished: Click "Finish Learning"
        }
        
        state AllMastered {
            [*] --> MasteryCelebration: Display 100% Mastery Banner
            MasteryCelebration --> SessionFinished: Click "Complete Session"
        }
    }

    PrepareNextRound --> RoundSession: Queue = roundIncorrect, Round = Round + 1
    SessionFinished --> [*]: Persist Stats & Return to Subject
```

---

## 3. Test Simulation State Flow

```mermaid
stateDiagram-v2
    [*] --> ConfigScreen: Click "Create Test"
    ConfigScreen --> ValidatingConfig: Specify question count & options
    ValidatingConfig --> TestInProgress: Valid (5 <= count <= BankSize)
    ValidatingConfig --> ConfigScreen: Invalid (Show error message)

    state TestInProgress {
        [*] --> QuestionView: Display Question [0]
        QuestionView --> Answering: Select or Update Option(s)
        Answering --> QuestionView: Auto-cache to localStorage
        QuestionView --> QuestionView: Navigate via Next/Prev or Question Grid
        QuestionView --> QuestionView: Toggle "Flag for Review"
        QuestionView --> SubmitModal: Click "Submit Test"
        
        state SubmitModal {
            [*] --> CheckingUnanswered: Count unanswered questions
            CheckingUnanswered --> AwaitingConfirmation: Show warning if unanswered > 0
            AwaitingConfirmation --> QuestionView: Click "Return to Test"
            AwaitingConfirmation --> Scoring: Click "Confirm Submit"
        }
    }

    Scoring --> ResultsScreen: Calculate Score, Time, Pass/Fail, Save History
    
    state ResultsScreen {
        [*] --> ResultSummary: Circular Score Chart & Stats
        ResultSummary --> DetailedReview: Click "Review Answers"
        ResultSummary --> TestInProgress: Click "Retry Test" (New random questions)
        ResultSummary --> [*]: Click "Return to Subject"
    }
```

