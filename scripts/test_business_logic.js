// Comprehensive automated test suite for Recallify business logic
import assert from 'node:assert';
import { learningEngine } from '../src/services/learning/learningEngine.js';
import { testEngine } from '../src/services/testing/testEngine.js';
import { subject01Questions } from '../src/data/questions/subject-01.js';
import { subject02Questions } from '../src/data/questions/subject-02.js';

let passedTests = 0;
let totalTests = 0;

function it(desc, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✓ ${desc}`);
  } catch (err) {
    console.error(`  ✗ FAIL: ${desc}`);
    console.error(err);
    process.exitCode = 1;
  }
}

console.log('\n--- 1. Testing Question Banks Integrity ---');

it('SWD301 contains exactly 198 valid questions with unique IDs', () => {
  assert.strictEqual(subject01Questions.length, 198);
  const ids = new Set(subject01Questions.map((q) => q.id));
  assert.strictEqual(ids.size, 198);
  subject01Questions.forEach((q) => {
    assert.ok(q.question, 'Question text required');
    assert.ok(q.options.length >= 2, 'At least 2 options');
    assert.ok(q.correctAnswer, 'Correct answer required');
  });
});

it('SBA301 contains exactly 329 valid questions with unique IDs', () => {
  assert.strictEqual(subject02Questions.length, 329);
  const ids = new Set(subject02Questions.map((q) => q.id));
  assert.strictEqual(ids.size, 329);
  subject02Questions.forEach((q) => {
    assert.ok(q.question, 'Question text required');
    assert.ok(q.options.length >= 2, 'At least 2 options');
    assert.ok(q.correctAnswer, 'Correct answer required');
    assert.ok(q.explanation, 'Explanation required');
  });
});

console.log('\n--- 2. Testing Learning Engine & Evaluation ---');

it('Correctly evaluates single-choice correct answer', () => {
  const q = { id: 'q1', correctAnswer: 'B', options: [{ id: 'A' }, { id: 'B' }] };
  const res = learningEngine.evaluateAnswer(q, 'B');
  assert.strictEqual(res.isCorrect, true);
  assert.deepStrictEqual(res.correctAnswers, ['B']);
  assert.deepStrictEqual(res.selectedAnswers, ['B']);
});

it('Correctly evaluates single-choice incorrect answer', () => {
  const q = { id: 'q1', correctAnswer: 'B', options: [{ id: 'A' }, { id: 'B' }] };
  const res = learningEngine.evaluateAnswer(q, 'A');
  assert.strictEqual(res.isCorrect, false);
});

it('Correctly evaluates multiple-choice exact match', () => {
  const q = { id: 'q2', type: 'multiple', correctAnswer: ['B', 'C', 'D'], options: [] };
  const res = learningEngine.evaluateAnswer(q, ['D', 'B', 'C']); // order independent
  assert.strictEqual(res.isCorrect, true);
});

it('Penalizes multiple-choice missing one correct option', () => {
  const q = { id: 'q2', type: 'multiple', correctAnswer: ['B', 'C', 'D'], options: [] };
  const res = learningEngine.evaluateAnswer(q, ['B', 'C']);
  assert.strictEqual(res.isCorrect, false);
});

it('Penalizes multiple-choice with extra incorrect option', () => {
  const q = { id: 'q2', type: 'multiple', correctAnswer: ['B', 'C'], options: [] };
  const res = learningEngine.evaluateAnswer(q, ['B', 'C', 'A']);
  assert.strictEqual(res.isCorrect, false);
});

console.log('\n--- 3. Testing Critical Incorrect Repetition Queue (FR-03) ---');

it('Generates next round containing ONLY incorrect questions and drops mastered questions', () => {
  const sampleQueue = [
    { id: 'q1', question: 'Question 1' },
    { id: 'q2', question: 'Question 2' },
    { id: 'q3', question: 'Question 3' },
    { id: 'q4', question: 'Question 4' }
  ];
  // User answered q1 and q3 correctly, but missed q2 and q4
  const incorrectIds = ['q2', 'q4'];

  const nextRound = learningEngine.generateNextRepetitionRound(1, sampleQueue, incorrectIds);

  assert.strictEqual(nextRound.roundNumber, 2);
  assert.strictEqual(nextRound.queue.length, 2);
  assert.deepStrictEqual(nextRound.queue.map((q) => q.id), ['q2', 'q4']);

  // Now in round 2, user answers q2 correctly, but misses q4 again
  const round2IncorrectIds = ['q4'];
  const round3 = learningEngine.generateNextRepetitionRound(2, nextRound.queue, round2IncorrectIds);

  assert.strictEqual(round3.roundNumber, 3);
  assert.strictEqual(round3.queue.length, 1);
  assert.deepStrictEqual(round3.queue.map((q) => q.id), ['q4']);

  // Now in round 3, user answers q4 correctly (0 errors)
  const round4 = learningEngine.generateNextRepetitionRound(3, round3.queue, []);
  assert.strictEqual(round4.queue.length, 0, 'Queue is empty when all mastered');
});

console.log('\n--- 4. Testing Test Engine & Grading ---');

it('Guarantees 0 duplicate questions during random selection', () => {
  const selected = testEngine.generateTestQuestions(subject01Questions, 50);
  assert.strictEqual(selected.length, 50);
  const ids = new Set(selected.map((q) => q.id));
  assert.strictEqual(ids.size, 50, 'All selected questions must be distinct');
});

it('Clamps requested question count to bank bounds', () => {
  const under = testEngine.generateTestQuestions(subject01Questions, 0);
  assert.strictEqual(under.length, 1);

  const over = testEngine.generateTestQuestions(subject01Questions, 9999);
  assert.strictEqual(over.length, 198);
});

it('Accurately counts unanswered questions', () => {
  const sampleQuestions = [{ id: 'q1' }, { id: 'q2' }, { id: 'q3' }];
  const answers = { q1: 'A', q3: [] }; // q2 not set, q3 empty array
  const unanswered = testEngine.countUnanswered(sampleQuestions, answers);
  assert.strictEqual(unanswered, 2); // q2 and q3
});

it('Calculates score and enforces 70% passing threshold', () => {
  const sample = [
    { id: 'q1', correctAnswer: 'A' },
    { id: 'q2', correctAnswer: 'B' },
    { id: 'q3', correctAnswer: 'C' },
    { id: 'q4', correctAnswer: 'D' },
    { id: 'q5', correctAnswer: 'A' },
    { id: 'q6', correctAnswer: 'B' },
    { id: 'q7', correctAnswer: 'C' },
    { id: 'q8', correctAnswer: 'D' },
    { id: 'q9', correctAnswer: 'A' },
    { id: 'q10', correctAnswer: 'B' }
  ];

  // 8 correct, 2 incorrect -> 80% (PASS)
  const answersPass = {
    q1: 'A', q2: 'B', q3: 'C', q4: 'D', q5: 'A',
    q6: 'B', q7: 'C', q8: 'D', q9: 'B', q10: 'A'
  };
  const gradePass = testEngine.gradeTest(sample, answersPass, 120);
  assert.strictEqual(gradePass.score, 80);
  assert.strictEqual(gradePass.correctCount, 8);
  assert.strictEqual(gradePass.incorrectCount, 2);
  assert.strictEqual(gradePass.passed, true);

  // 6 correct, 4 incorrect -> 60% (FAIL)
  const answersFail = {
    q1: 'A', q2: 'B', q3: 'C', q4: 'D', q5: 'A',
    q6: 'B', q7: 'A', q8: 'A', q9: 'B', q10: 'A'
  };
  const gradeFail = testEngine.gradeTest(sample, answersFail, 90);
  assert.strictEqual(gradeFail.score, 60);
  assert.strictEqual(gradeFail.passed, false);
});

console.log('\n--- 5. Testing LocalStorage Persistence & Progress Recovery ---');

// Polyfill localStorage in Node.js environment
if (typeof globalThis.localStorage === 'undefined') {
  const store = new Map();
  globalThis.localStorage = {
    getItem: (key) => (store.has(key) ? store.get(key) : null),
    setItem: (key, val) => store.set(key, String(val)),
    removeItem: (key) => store.delete(key),
    clear: () => store.clear()
  };
}

const { localStorageService } = await import('../src/services/storage/localStorageService.js');

it('Saves, retrieves, and clears Flashcard reading progress per subject', () => {
  localStorageService.setFlashcardsProgress('swd301', {
    currentIndex: 24,
    totalQuestions: 198,
    isShuffled: true
  });

  const saved = localStorageService.getFlashcardsProgress('swd301');
  assert.ok(saved, 'Saved flashcard progress should exist');
  assert.strictEqual(saved.currentIndex, 24);
  assert.strictEqual(saved.totalQuestions, 198);
  assert.strictEqual(saved.isShuffled, true);
  assert.ok(saved.lastUpdated > 0);

  localStorageService.clearFlashcardsProgress('swd301');
  const cleared = localStorageService.getFlashcardsProgress('swd301');
  assert.strictEqual(cleared, null);
});

it('Saves and restores Active Learning session state across questions and rounds', () => {
  const mockSession = {
    subjectId: 'sba301',
    round: 2,
    currentIndex: 5,
    queue: [{ id: 'sba-01' }, { id: 'sba-02' }],
    roundCorrect: ['sba-03'],
    roundIncorrect: ['sba-01'],
    mastered: ['sba-04']
  };

  localStorageService.setActiveLearning('sba301', mockSession);

  const restored = localStorageService.getActiveLearning('sba301');
  assert.ok(restored, 'Active learning session should be retrieved');
  assert.strictEqual(restored.round, 2);
  assert.strictEqual(restored.currentIndex, 5);
  assert.deepStrictEqual(restored.roundCorrect, ['sba-03']);

  localStorageService.clearActiveLearning('sba301');
  assert.strictEqual(localStorageService.getActiveLearning('sba301'), null);
});

it('Preserves active test state for reload resilience and clears upon submission', () => {
  const mockTest = {
    testId: 'test-12345',
    subjectId: 'swd301',
    title: 'SWD301 Midterm',
    questions: [{ id: 'q1' }, { id: 'q2' }],
    userAnswers: { q1: 'A' },
    status: 'in_progress',
    startTime: Date.now()
  };

  localStorageService.setActiveTest(mockTest);
  const active = localStorageService.getActiveTest();
  assert.ok(active);
  assert.strictEqual(active.testId, 'test-12345');
  assert.strictEqual(active.userAnswers.q1, 'A');

  localStorageService.clearActiveTest();
  assert.strictEqual(localStorageService.getActiveTest(), null);
});

it('Safely resets progress for one subject without corrupting other subjects', () => {
  // Record answers for both subjects
  localStorageService.recordAnswer('swd301', 'swd-01', true);
  localStorageService.recordAnswer('swd301', 'swd-02', false);
  localStorageService.recordAnswer('sba301', 'sba-01', true);
  localStorageService.markQuestionsMastered('swd301', ['swd-01']);
  localStorageService.markQuestionsMastered('sba301', ['sba-01']);
  localStorageService.setFlashcardsProgress('swd301', { currentIndex: 10 });
  localStorageService.setFlashcardsProgress('sba301', { currentIndex: 20 });

  // Reset swd301 only
  localStorageService.resetSubjectProgress('swd301');

  const stats = localStorageService.getStats();
  // swd301 should be reset to zero
  assert.strictEqual(stats.subjectStats['swd301'].answered, 0);
  assert.strictEqual(stats.subjectStats['swd301'].correct, 0);
  assert.deepStrictEqual(stats.subjectStats['swd301'].mastered, []);
  assert.strictEqual(localStorageService.getFlashcardsProgress('swd301'), null);

  // sba301 must still exist and be intact!
  assert.ok(stats.subjectStats['sba301'], 'sba301 stats must remain intact');
  assert.strictEqual(stats.subjectStats['sba301'].answered, 1);
  assert.strictEqual(stats.subjectStats['sba301'].correct, 1);
  assert.deepStrictEqual(stats.subjectStats['sba301'].mastered, ['sba-01']);
  const sbaCards = localStorageService.getFlashcardsProgress('sba301');
  assert.strictEqual(sbaCards.currentIndex, 20);
});

console.log(`\n========================================`);
console.log(`Automated Tests Passed: ${passedTests} / ${totalTests}`);
console.log(`========================================\n`);

if (passedTests !== totalTests) {
  process.exit(1);
}

