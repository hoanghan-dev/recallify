# Use Case Diagram: Recallify

This document details the architectural relationships between the primary actor (**Student**) and the system use cases, incorporating standard UML `<<include>>` and `<<extend>>` relationships.

```mermaid
flowchart LR
    Student(["fa:fa-user Student"])

    subgraph Dashboard_and_Subjects ["Dashboard & Subject Exploration"]
        UC01["UC-01: View Dashboard"]
        UC02["UC-02: View Subjects"]
        UC03["UC-03: Select Subject"]
        UC04["UC-04: View Question Bank"]
        UC25["UC-25: View Learning Statistics"]
        UC26["UC-26: View Test History"]
        UC27["UC-27: Reset Progress"]
    end

    subgraph Flashcards_System ["Flashcards Engine"]
        UC05["UC-05: Start Flashcards"]
        UC06["UC-06: Flip Flashcard"]
        UC07["UC-07: Navigate Flashcards"]
        UC08["UC-08: Shuffle Flashcards"]
        UC09["UC-09: Bookmark Question"]
    end

    subgraph Learning_System ["Adaptive Learning Engine"]
        UC10["UC-10: Start Learning Session"]
        UC11["UC-11: Answer Question"]
        UC12["UC-12: View Immediate Feedback"]
        UC13["UC-13: Continue Learning"]
        UC14["UC-14: View Learning Summary"]
        UC15["UC-15: Review Incorrect Questions"]
        UC16["UC-16: Complete Learning Session"]
    end

    subgraph Test_System ["Simulated Exam Engine"]
        UC17["UC-17: Configure Test"]
        UC18["UC-18: Start Test"]
        UC19["UC-19: Answer Test Question"]
        UC20["UC-20: Navigate Test Questions"]
        UC21["UC-21: Submit Test"]
        UC22["UC-22: View Test Results"]
        UC23["UC-23: Review Test Answers"]
        UC24["UC-24: Retry Test"]
    end

    %% Actor Connections
    Student --> UC01
    Student --> UC02
    Student --> UC03
    Student --> UC25
    Student --> UC26
    Student --> UC27

    Student --> UC05
    Student --> UC10
    Student --> UC17

    %% In-system navigation & inclusions
    UC03 -.->|<<include>>| UC04
    UC05 --> UC06
    UC05 --> UC07
    UC05 -.->|<<extend>>| UC08
    UC05 -.->|<<extend>>| UC09

    %% Learning Flow Relationships
    UC10 --> UC11
    UC11 -.->|<<include>>| UC12
    UC12 --> UC13
    UC13 -.->|at round end| UC14
    UC14 -.->|<<extend>> if errors exist| UC15
    UC15 -.->|re-queues into| UC10
    UC14 -.->|<<extend>>| UC16

    %% Test Flow Relationships
    UC17 -.->|<<include>>| UC18
    UC18 --> UC19
    UC18 --> UC20
    UC18 --> UC21
    UC21 -.->|<<include>>| UC22
    UC22 -.->|<<extend>>| UC23
    UC22 -.->|<<extend>>| UC24
```

## Relationship Explanations
1. **`UC-11 (Answer Question) <<include>> UC-12 (View Immediate Feedback)`:** Answering any question in learning mode immediately triggers feedback evaluation and display.
2. **`UC-14 (View Learning Summary) <<extend>> UC-15 (Review Incorrect Questions)`:** The repetition round is an extension available only when one or more questions were answered incorrectly in that round.
3. **`UC-21 (Submit Test) <<include>> UC-22 (View Test Results)`:** Submitting the test directly computes scores, persists historical records, and launches the results view.
4. **`UC-22 (View Test Results) <<extend>> UC-23 (Review Test Answers)` and `UC-24 (Retry Test)`:** Detailed item review and retry flow extend from the test result screen.

