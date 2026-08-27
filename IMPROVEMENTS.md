# Salah-guide — Improvement Report

**Date:** August 27, 2026  
**Analysis Type:** Errors, Inconsistencies, Incompleteness, Missed Sections

---

## 🔴 Errors Found

### 1. Level Unlock Persistence Bug
- Level unlocking is stored in the `levels` array as `unlocked: true/false` — but this array is **recreated on every page load** from the JavaScript source. Only `completedLessons` is persisted to localStorage. This means if a user completes Level 1 and refreshes the page, Level 2 will be locked again because the `levels` array resets `unlocked: false` for levels 2-5.

### 2. Quiz Answered State Not Reset
- `quizAnswered = {}` is a module-level variable that tracks which quiz questions have been answered. When the user navigates to a different lesson and comes back, the `quizAnswered` object still holds previous answers. This means they can't retake quizzes without page refresh.

### 3. SpeechSynthesis — Empty String Crash
- `reciteArabic('')` is called for postures with `arabic: '—'`. The function checks `if (!text || !('speechSynthesis' in window)) return;` — but `'—'` is truthy, so it will try to speak the dash character. Should check for actual Arabic content.

### 4. Progress Ring Calculation Mismatch
- In `renderLevels()`, the progress ring calculates `pct = totalLvlLessons ? Math.round((lvlProgress / totalLvlLessons) * 100) : 0` but `lvlProgress` comes from `completedLessons.filter(id => id.level === lvl.id).length || 0` — this filters by `.level` property but `completedLessons` stores objects with `{ level, completedAt }` structure. The filter should work, but `|| 0` is redundant since `.length` is already 0.

---

## 🟡 Inconsistencies

### 1. Only 5 Levels With 1 Lesson Each
- Each of the 5 levels contains **only 1 lesson**. The pyramid UI shows "1 lesson" for each, making the pyramid layout feel empty. Either add more lessons per level or change the UI to reflect the single-lesson structure.

### 2. No Dark Mode
- Unlike Sharia-Law, Revert-Guide, and Quranic-word-memorizer, Salah-guide has **no dark/light theme toggle**.

### 3. Postures Use `'—'` as Placeholder
- Several postures have `arabic: '—'` instead of actual Arabic text. For a prayer guide, all postures should have their Arabic text.

### 4. Inconsistent Back Button
- The modal has a close button (`✕`) but no back-to-dashboard button. Users must close the modal to return.

---

## 🟠 Incompleteness

### 1. Missing Prayer Types
- The guide covers the basic Salah but doesn't mention:
  - **Sunnah prayers** (rawatib before/after obligatory prayers)
  - **Witr prayer**
  - **Taraweeh** (Ramadan special)
  - **Jumu'ah (Friday) prayer** differences
  - **Eid prayers**
  - **Janazah (funeral) prayer**

### 2. Missing Conditions for Valid Prayer
- The guide doesn't cover **conditions (shurut)** for valid prayer:
  - Clean clothes
  - Clean body (from najasah)
  - Covering awrah
  - Facing Qibla
  - Prayer time
  - Intention (niyyah)

### 3. Missing Common Mistakes
- No section on common mistakes beginners make:
  - Rushing through prayer
  - Not understanding what they're reciting
  - Incorrect posture (back not straight in Ruku, etc.)
  - Moving during prayer

### 4. Missing Qibla Direction
- No mention of how to find Qibla direction (compass, app, sun position).

### 5. No Dua Collection
- No collection of essential duas for daily life (before/after eating, entering/leaving mosque, etc.)

---

## 🔵 Missed Sections & Improvements

### 1. Missing Content
- **Detailed Tashahhud** — only the beginning is shown, not the full text
- **Dua Qunut** — recited in Witr
- **Dua after Adhan** — recommended supplication
- **Masnoon Duas** — Prophet's ﷺ supplications for various occasions
- **Prayer times details** — exact timings based on sun position
- **Prayer in congregation** — Sutrah, Imam role, following

### 2. Interactive Features
- **Prayer position visual** — animated or illustrated body positions
- **Audio recitation** for each posture (currently uses SpeechSynthesis which is unreliable for Arabic)
- **Timer** — how long each rak'ah should take
- **Side-by-side comparison** — correct vs incorrect posture
- **Progress certificate** — downloadable completion certificate

### 3. Technical Improvements
- Use proper Arabic audio files instead of SpeechSynthesis
- Add `<meta>` OG tags for social sharing
- Add `manifest.json` for PWA
- Add keyboard navigation (arrow keys between lessons)

---

## 📋 Priority Recommendations

| Priority | Issue | Impact |
|----------|-------|--------|
| 🔴 P0 | Fix level unlock persistence bug | Core feature broken |
| 🔴 P0 | Add actual Arabic text for all postures | Incomplete content |
| 🟡 P1 | Add more lessons per level (at least 3-5) | Content depth |
| 🟡 P1 | Add missing prayer types (Witr, Sunnah, etc.) | Content completeness |
| 🟡 P1 | Add prayer conditions section | Essential knowledge |
| 🟠 P2 | Add dark mode toggle | Consistency |
| 🟠 P2 | Replace SpeechSynthesis with real audio | Audio quality |
| 🔵 P3 | Add prayer position illustrations | Visual learning |
| 🔵 P3 | Add Qibla direction finder | Practical utility |
