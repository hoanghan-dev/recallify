# Design System: Recallify Academic System

## 1. Design Direction & Aesthetic
Inspired by Quizlet and modern educational SaaS platforms, the **Recallify Academic System** blends minimalism with an adaptive academic focus. The goal is to provide maximum cognitive clarity, high readability for long study sessions, and tactile micro-rewards for study progress.

---

## 2. Color Palette & Semantic Tokens

### 2.1 Primary Brand Colors
- **Primary Main (`#4F46E5` / `indigo-600`):** Core calls to action, active navigation tabs, progress indicators, selected states.
- **Primary Hover (`#4338CA` / `indigo-700`):** Interactive hover states.
- **Primary Light / Container (`#EEF2FF` / `indigo-50`):** Active card backgrounds, selected option tiles, soft pill highlights.
- **Primary Text (`#312E81` / `indigo-900`):** High-contrast primary accents.

### 2.2 Semantic & Feedback Colors
- **Success / Mastered (`#10B981` / `emerald-500`):** Correct answers, high accuracy badges ($\ge 80\%$), mastery confirmations, streak flame highlights.
- **Success Container (`#ECFDF5` / `emerald-50`):** Correct answer option background, positive feedback banners.
- **Success Border (`#A7F3D0` / `emerald-200`):** Borders for correct option cards.
- **Success Text (`#065F46` / `emerald-800`):** Text for correct feedback banners.
- **Error / Incorrect (`#EF4444` / `rose-500`):** Incorrect answers, failed tests ($< 70\%$), delete warnings.
- **Error Container (`#FFF1F2` / `rose-50`):** Incorrect answer option background, error feedback banners.
- **Error Border (`#FECDD3` / `rose-200`):** Borders for incorrect option cards.
- **Warning / Review (`#F59E0B` / `amber-500`):** Questions needing repetition review, flagged test questions, unanswered alerts.
- **Warning Container (`#FFFBEB` / `amber-50`):** Unanswered warning modal banners.

### 2.3 Neutral & Surface Canvas Tokens
- **Canvas / Body Background:** `#F8FAFC` (`slate-50`)
- **Card / Surface Container Lowest:** `#FFFFFF` (`white`)
- **Secondary Surface / Low Container:** `#F1F5F9` (`slate-100`)
- **Borders & Dividers:** `#E2E8F0` (`slate-200`) and `#CBD5E1` (`slate-300`)
- **Text Primary (Headings & Prompts):** `#0F172A` (`slate-900`)
- **Text Secondary (Subtitles & Explanations):** `#475569` (`slate-600`)
- **Text Muted (Footnotes & Keybindings):** `#94A3B8` (`slate-400`)

---

## 3. Typography (Inter Font Stack)

Font Family: `Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

| Token | Size | Line Height | Weight | Letter Spacing | Purpose |
|---|---|---|---|---|---|
| `display` | 40px (2.5rem) | 48px | 800 (Extrabold) | -0.025em | Main Hero headers, Test Score Percentages |
| `headline-lg` | 32px (2rem) | 38px | 700 (Bold) | -0.02em | Subject Title, Page Headings |
| `headline-md` | 24px (1.5rem) | 32px | 600 (Semibold) | -0.015em | Section Headings, Modal Titles |
| `headline-sm` | 20px (1.25rem) | 28px | 600 (Semibold) | -0.01em | Question Prompts, Flashcard Prompts |
| `title-md` | 16px (1rem) | 24px | 600 (Semibold) | normal | Card Titles, Option Labels, Tab Names |
| `body-lg` | 18px (1.125rem) | 28px | 400 (Regular) | normal | Flashcard Back Explanations |
| `body-md` | 15px (0.9375rem) | 24px | 400 (Regular) | normal | General body text, Option text |
| `body-sm` | 13px (0.8125rem) | 20px | 400 (Regular) | normal | Captions, metadata, hints |
| `label-sm` | 12px (0.75rem) | 16px | 600 (Semibold) | 0.025em | Badges, chips, tags |
| `caption` | 11px (0.6875rem) | 16px | 500 (Medium) | 0.05em | Timestamps, micro-labels |

---

## 4. Spacing, Grid & Layout

- **Base Unit:** 4px / 8px scale.
- **Container Max-Widths:**
  - Standard App Container: `max-w-7xl` (1280px).
  - Study Session (Flashcards & Learning): `max-w-4xl` (896px) for optimal line length and focused attention.
  - Test Assessment Runner: `max-w-5xl` (1024px) with collapsible question drawer.
- **Padding:**
  - Card padding: `p-6` (24px) desktop, `p-4` (16px) mobile.
  - Page margin: `px-4 sm:px-6 lg:px-8`, `py-8`.

---

## 5. Border Radius & Shadows

- **Border Radius:**
  - Small elements (Inputs, Buttons, Badges): `rounded-lg` (8px).
  - Standard Cards (Subject Cards, Metric Cards): `rounded-xl` (12px or 16px).
  - High Focus Containers (Flashcards, Modals): `rounded-2xl` (20px or 24px).
  - Pills: `rounded-full` (9999px).
- **Shadows & Elevation:**
  - Canvas: Flat `bg-slate-50`.
  - Static Cards: `shadow-sm border border-slate-200/80`.
  - Interactive Hover: `hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`.
  - Modals & Floating Overlays: `shadow-2xl border border-slate-200`.

---

## 6. Interactive Component Specifications

### 6.1 Buttons
- **Primary:** `bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-5 py-2.5 shadow-sm transition active:scale-98`
- **Secondary:** `bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-lg px-4 py-2 transition`
- **Outline:** `border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-medium rounded-lg px-4 py-2 transition`
- **Success:** `bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg px-5 py-2.5 shadow-sm transition`
- **Danger:** `bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg px-4 py-2 transition`

### 6.2 Option Selection States (Learning & Test)
- **Default / Neutral:** White surface, 1.5px border `#E2E8F0`, dark slate text. Hover brings border `#CBD5E1` and subtle lift.
- **Selected (Before Submission):** Soft indigo tint `#EEF2FF`, 2px solid border `#4F46E5`, radio/checkbox active.
- **Evaluated Correct:** Soft emerald tint `#ECFDF5`, 2px solid border `#10B981`, checkmark icon badge.
- **Evaluated Incorrect:** Soft rose tint `#FFF1F2`, 2px solid border `#EF4444`, X icon badge.

### 6.3 3D FlipCard Spec (Flashcards)
- CSS `perspective: 1000px` on parent container.
- Child card container with `transform-style: preserve-3d` and `transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)`.
- Front and Back with `backface-visibility: hidden`. Back rotated `rotateY(180deg)`.

