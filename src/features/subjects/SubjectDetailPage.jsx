import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  RotateCw,
  Brain,
  FileCheck2,
  Bookmark,
  Search,
  Filter,
  Eye,
  EyeOff,
  CheckCircle2,
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';
import { subjects } from '../../data/subjects.js';
import { getQuestionsBySubjectId } from '../../data/questions/index.js';
import { useAppStore } from '../../store/useAppStore.js';
import { Button } from '../../components/common/Button.jsx';
import { Badge } from '../../components/common/Badge.jsx';
import { Modal } from '../../components/common/Modal.jsx';
import { ProgressBar } from '../../components/common/ProgressBar.jsx';
import { TestConfigModal } from '../tests/TestConfigModal.jsx';
import { clsx } from 'clsx';

export const SubjectDetailPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { toggleBookmark, isBookmarked, metrics, resetSubjectProgress } = useAppStore();

  const [testModalOpen, setTestModalOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [revealAnswers, setRevealAnswers] = useState(false);

  const subject = subjects.find((s) => s.id === subjectId) || subjects[0];
  const allQuestions = useMemo(() => getQuestionsBySubjectId(subject.id), [subject.id]);

  // Extract unique topics
  const topics = useMemo(() => {
    const set = new Set();
    allQuestions.forEach((q) => {
      if (q.topic) set.add(q.topic);
    });
    return Array.from(set);
  }, [allQuestions]);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchTopic = selectedTopic === 'ALL' || q.topic === selectedTopic;
      const matchSearch =
        searchQuery === '' ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.explanation && q.explanation.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchTopic && matchSearch;
    });
  }, [allQuestions, selectedTopic, searchQuery]);

  const subjectMetric = metrics.subjectProgress.find((s) => s.id === subject.id) || {
    mastered: 0,
    masteryPercentage: 0,
    totalQuestions: allQuestions.length
  };

  const hasFlashcardProgress =
    subjectMetric.flashcardProgress &&
    typeof subjectMetric.flashcardProgress.currentIndex === 'number' &&
    subjectMetric.flashcardProgress.currentIndex > 0;

  const hasActiveLearning =
    subjectMetric.activeLearning &&
    subjectMetric.activeLearning.queue &&
    subjectMetric.activeLearning.queue.length > 0 &&
    !subjectMetric.activeLearning.isAllMastered;

  const handleResetSubject = () => {
    resetSubjectProgress(subject.id);
    setShowResetConfirm(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Breadcrumb & Navigation Back */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/subjects" className="hover:text-indigo-600 flex items-center gap-1 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Subjects</span>
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-semibold">{subject.code}</span>
      </div>

      {/* Subject Header Banner */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="sm">{subject.code}</Badge>
              <Badge variant="default" size="sm">{subject.category}</Badge>
              <Badge variant="success" size="sm">{allQuestions.length} Questions</Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {subject.name}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              {subject.description}
            </p>
          </div>

          {/* Quick Mastery Radial / Metric box */}
          <div className="lg:shrink-0 bg-slate-50 border border-slate-100 rounded-2xl p-5 w-full lg:w-64 space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-700">Learn Mode Mastery</span>
              <span className="font-bold text-indigo-700">{subjectMetric.masteryPercentage}%</span>
            </div>
            <ProgressBar value={subjectMetric.mastered} max={subjectMetric.totalQuestions} variant="success" size="md" />
            <div className="text-[11px] text-slate-500 pt-0.5 flex justify-between">
              <span>{subjectMetric.mastered} Mastered</span>
              <span>{subjectMetric.totalQuestions - subjectMetric.mastered} Remaining</span>
            </div>
            <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">{subjectMetric.answered || 0} đã trả lời</span>
              <button
                type="button"
                onClick={() => setShowResetConfirm(true)}
                className="text-[11px] font-semibold text-slate-400 hover:text-rose-600 transition-colors inline-flex items-center gap-1 cursor-pointer"
                title="Đặt lại tiến trình môn này"
              >
                <RotateCw className="w-3 h-3" />
                <span>Đặt lại</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Study Mode Fast-Launch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          {/* Mode 1: Flashcards */}
          <div
            onClick={() => navigate(`/subjects/${subject.id}/flashcards`)}
            className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group space-y-3 relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <RotateCw className="w-5 h-5" />
              </div>
              {hasFlashcardProgress && (
                <Badge variant="warning" size="xs">
                  Đang ở thẻ {subjectMetric.flashcardProgress.currentIndex + 1}/{subjectMetric.flashcardProgress.totalQuestions}
                </Badge>
              )}
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                Flashcards Mode
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Quick flip-card conceptual review with keyboard navigation.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600">
              {hasFlashcardProgress ? 'Tiếp tục lật thẻ →' : 'Start Cards →'}
            </span>
          </div>

          {/* Mode 2: Adaptive Learning */}
          <div
            onClick={() => navigate(`/subjects/${subject.id}/learn`)}
            className="p-5 rounded-2xl border-2 border-indigo-500/80 bg-indigo-50/40 hover:bg-indigo-50/70 hover:shadow-md transition-all cursor-pointer group space-y-3 relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Brain className="w-5 h-5" />
              </div>
              {hasActiveLearning ? (
                <Badge variant="warning" size="xs">
                  Đang học Vòng {subjectMetric.activeLearning.round} ({subjectMetric.activeLearning.currentIndex + 1}/{subjectMetric.activeLearning.queue.length})
                </Badge>
              ) : (
                <span className="text-[10px] font-bold uppercase bg-indigo-600 text-white px-1.5 py-0.5 rounded">Recommended</span>
              )}
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                Adaptive Learning
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Immediate feedback with automatic repetition of missed questions until mastery.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700">
              {hasActiveLearning ? 'Tiếp tục phiên học →' : 'Launch Session →'}
            </span>
          </div>

          {/* Mode 3: Test Simulation */}
          <div
            onClick={() => setTestModalOpen(true)}
            className="p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                Simulated Exam
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Timed assessment with randomized questions and hidden answers until submission.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700">
              Configure Test →
            </span>
          </div>
        </div>
      </section>

      {/* ================= QUESTION BANK SECTION ================= */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Question Bank</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Showing {filteredQuestions.length} of {allQuestions.length} questions
            </p>
          </div>

          {/* Toggle Answer Key Button */}
          <Button
            variant={revealAnswers ? 'primary' : 'outline'}
            size="sm"
            icon={revealAnswers ? EyeOff : Eye}
            onClick={() => setRevealAnswers(!revealAnswers)}
          >
            {revealAnswers ? 'Hide Answer Keys' : 'Reveal Answer Keys'}
          </Button>
        </div>

        {/* Filter Controls Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
          {/* Search Input */}
          <div className="sm:col-span-7 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, topic, or question ID..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
          </div>

          {/* Topic Dropdown */}
          <div className="sm:col-span-5 relative">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-800"
            >
              <option value="ALL">All Chapters / Topics ({topics.length})</option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Question Items List */}
        <div className="space-y-4 pt-2">
          {filteredQuestions.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <HelpCircle className="w-8 h-8 mx-auto stroke-1" />
              <p className="text-sm">No questions matched your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTopic('ALL');
                }}
                className="text-xs text-indigo-600 font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredQuestions.map((q, idx) => {
              const bookmarked = isBookmarked(q.id);
              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl border border-slate-200/70 hover:border-slate-300 bg-white transition-all space-y-3"
                >
                  {/* Item Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-slate-400">#{idx + 1}</span>
                      <Badge variant="default" size="xs">{q.id}</Badge>
                      <Badge variant="primary" size="xs">
                        {Array.isArray(q.correctAnswer) || q.type === 'multiple' ? 'Multiple Choice' : 'Single Choice'}
                      </Badge>
                      {q.topic && (
                        <span className="text-xs text-slate-500 font-medium">
                          {q.topic}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleBookmark(q.id)}
                      className={clsx(
                        'p-1.5 rounded-lg transition-colors',
                        bookmarked ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-slate-600'
                      )}
                      title={bookmarked ? 'Remove bookmark' : 'Bookmark question'}
                    >
                      <Bookmark className={clsx('w-4 h-4', bookmarked && 'fill-amber-500')} />
                    </button>
                  </div>

                  {/* Question Content */}
                  <div className="text-[15px] font-semibold text-slate-900 leading-relaxed">
                    {q.question}
                  </div>

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt) => {
                      const isCorrect = Array.isArray(q.correctAnswer)
                        ? q.correctAnswer.includes(opt.id)
                        : opt.id === q.correctAnswer;

                      return (
                        <div
                          key={opt.id}
                          className={clsx(
                            'p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 transition-colors',
                            revealAnswers && isCorrect
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                              : 'bg-slate-50/70 border-slate-200/80 text-slate-700'
                          )}
                        >
                          <span
                            className={clsx(
                              'w-5 h-5 rounded flex items-center justify-center font-bold shrink-0',
                              revealAnswers && isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-200 text-slate-700'
                            )}
                          >
                            {opt.id}
                          </span>
                          <span className="pt-0.5">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation if Revealed */}
                  {revealAnswers && q.explanation && (
                    <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-100 text-xs text-indigo-950 leading-relaxed">
                      <span className="font-bold text-indigo-900 block mb-0.5">Explanation:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Test Config Modal */}
      {testModalOpen && (
        <TestConfigModal
          subject={subject}
          isOpen={testModalOpen}
          onClose={() => setTestModalOpen(false)}
        />
      )}

      {/* Reset Subject Progress Confirmation Modal */}
      <Modal
        isOpen={showResetConfirm}
        onClose={() => setShowResetConfirm(false)}
        title="Đặt lại tiến trình môn học"
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            Bạn có chắc chắn muốn đặt lại toàn bộ tiến trình học tập, vị trí xem Flashcard và lịch sử làm bài thi của môn <strong className="text-slate-900">{subject.name}</strong> không?
          </p>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
            Hành động này sẽ xóa các câu đã thuộc (mastered) và phiên học đang làm dở của riêng môn này trong bộ nhớ trình duyệt (localStorage).
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowResetConfirm(false)}
            >
              Hủy bỏ
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={handleResetSubject}
            >
              Xác nhận đặt lại
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SubjectDetailPage;

