import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  BookOpen,
  Brain,
  FileCheck2,
  TrendingUp,
  Award,
  Layers,
  Clock,
  ArrowRight,
  RotateCw,
  Bookmark,
  CheckCircle2,
  HelpCircle,
  Play
} from 'lucide-react';
import { useAppStore } from '../../store/useAppStore.js';
import { subjects } from '../../data/subjects.js';
import { ProgressBar } from '../../components/common/ProgressBar.jsx';
import { Badge } from '../../components/common/Badge.jsx';
import { Button } from '../../components/common/Button.jsx';
import { TestConfigModal } from '../tests/TestConfigModal.jsx';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { metrics, bookmarks } = useAppStore();
  const [testModalSubject, setTestModalSubject] = useState(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* ================= HERO WELCOME BANNER ================= */}
      <section className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg border border-indigo-700/40">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-indigo-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Exam Preparation Suite</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Welcome to Recallify! 👋
          </h1>
          <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
            Prepare for your university exams with active recall, spaced repetition learning, and formal assessment simulations.
          </p>

          {/* Quick study CTA */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Button
              variant="success"
              size="md"
              icon={Play}
              onClick={() => navigate('/subjects/swd301/learn')}
            >
              Start Learning: SWD301
            </Button>
            <Button
              variant="outline"
              size="md"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              onClick={() => navigate('/subjects/sba301/learn')}
            >
              Start Learning: SBA301
            </Button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ================= METRIC CARDS ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Total Questions */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Questions</span>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{metrics.totalQuestions}</div>
            <span className="text-xs text-indigo-600 font-medium">2 Verified Subject Banks</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Layers className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 2: Mastered Questions */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mastered Concepts</span>
            <div className="text-3xl font-extrabold text-emerald-600 tracking-tight">{metrics.masteredCount}</div>
            <span className="text-xs text-emerald-700 font-medium">
              {metrics.totalQuestions > 0 ? Math.round((metrics.masteredCount / metrics.totalQuestions) * 100) : 0}% of question bank
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 3: Learning Accuracy */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Accuracy Rate</span>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {metrics.globalAccuracy}%
            </div>
            <span className="text-xs text-slate-500 font-medium">{metrics.totalAnswered} Questions Attempted</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 4: Completed Tests */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Completed Tests</span>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{metrics.completedTestsCount}</div>
            <span className="text-xs text-slate-500 font-medium">Avg Score: {metrics.averageTestScore}%</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <FileCheck2 className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* ================= MAIN TWO-COLUMN CONTENT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Active Subject Decks (8 cols) */}
        <section className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Active Exam Decks</h2>
              <p className="text-xs text-slate-500">Comprehensive course material derived directly from your official syllabi</p>
            </div>
            <Link to="/subjects" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-5">
            {metrics.subjectProgress.map((subject) => (
              <div
                key={subject.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-all duration-200 space-y-5"
              >
                {/* Subject Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg shrink-0">
                      {subject.code.slice(0, 3)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="primary" size="xs">
                          {subject.code}
                        </Badge>
                        <Badge variant="default" size="xs">
                          {subject.category}
                        </Badge>
                      </div>
                      <Link
                        to={`/subjects/${subject.id}`}
                        className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors mt-0.5 block"
                      >
                        {subject.name}
                      </Link>
                    </div>
                  </div>

                  <Link
                    to={`/subjects/${subject.id}`}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 self-start sm:self-auto"
                  >
                    <span>Browse Question Bank ({subject.totalQuestions})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {subject.description}
                </p>

                {/* Progress Bar & Stats */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Mastery Progress
                    </span>
                    <span className="font-bold text-indigo-700">{subject.masteryPercentage}%</span>
                  </div>
                  <ProgressBar value={subject.mastered} max={subject.totalQuestions} variant="success" size="md" />
                  <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                    <span>{subject.mastered} terms mastered</span>
                    <span>{subject.totalQuestions - subject.mastered} terms in learning queue</span>
                  </div>
                </div>

                {/* Study Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={RotateCw}
                      onClick={() => navigate(`/subjects/${subject.id}/flashcards`)}
                    >
                      Flashcards
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      icon={Brain}
                      onClick={() => navigate(`/subjects/${subject.id}/learn`)}
                    >
                      Learn Mode
                    </Button>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    icon={FileCheck2}
                    onClick={() => setTestModalSubject(subject)}
                  >
                    Simulate Test
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Column: Activity Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Quick Study Coaching Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-2xl border border-indigo-100/80 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-indigo-900 font-semibold text-sm">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Active Recall Tip</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              When using <strong>Learn Mode</strong>, questions answered incorrectly automatically repeat in subsequent rounds until fully mastered.
            </p>
          </div>

          {/* Recent Tests Table / Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-semibold text-sm text-slate-800">Recent Test Results</h3>
              <Link to="/analytics" className="text-xs font-medium text-indigo-600 hover:underline">
                View History
              </Link>
            </div>

            {metrics.recentTests.length === 0 ? (
              <div className="py-8 text-center text-slate-400 space-y-2">
                <FileCheck2 className="w-8 h-8 mx-auto stroke-1" />
                <p className="text-xs">No simulated tests taken yet.</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTestModalSubject(subjects[0])}
                >
                  Take First Test
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {metrics.recentTests.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => navigate(`/tests/${t.id}/result`)}
                    className="p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <div className="font-semibold text-xs text-slate-900">{t.title}</div>
                      <div className="text-[11px] text-slate-500">
                        {t.correctCount}/{t.totalQuestions} Correct • {new Date(t.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                    <Badge variant={t.passed ? 'success' : 'danger'} size="sm" className="font-bold">
                      {t.score}%
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bookmarked Questions Quick Widget */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm text-slate-800 flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Bookmarked Questions</span>
              </h3>
              <Badge variant="warning" size="xs">{bookmarks.length}</Badge>
            </div>
            <p className="text-xs text-slate-500">
              {bookmarks.length === 0
                ? 'Bookmark tricky questions in Flashcards or Learn mode to revisit them quickly.'
                : `${bookmarks.length} questions saved for targeted review.`}
            </p>
          </div>
        </aside>
      </div>

      {/* Test Config Modal */}
      {testModalSubject && (
        <TestConfigModal
          subject={testModalSubject}
          isOpen={!!testModalSubject}
          onClose={() => setTestModalSubject(null)}
        />
      )}
    </div>
  );
};

export default DashboardPage;

