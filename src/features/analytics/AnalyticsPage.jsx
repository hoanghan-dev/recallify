import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';
import {
  BarChart3,
  Award,
  TrendingUp,
  Bookmark,
  FileCheck2,
  Trash2,
  RotateCcw,
  AlertTriangle,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useAppStore } from '../../store/useAppStore.js';
import { localStorageService } from '../../services/storage/localStorageService.js';
import { getQuestionsBySubjectId } from '../../data/questions/index.js';
import { Button } from '../../components/common/Button.jsx';
import { Badge } from '../../components/common/Badge.jsx';
import { Modal } from '../../components/common/Modal.jsx';
import { ProgressBar } from '../../components/common/ProgressBar.jsx';

export const AnalyticsPage = () => {
  const navigate = useNavigate();
  const { metrics, bookmarks, toggleBookmark, resetProgress } = useAppStore();
  const [showResetModal, setShowResetModal] = useState(false);

  const testHistory = localStorageService.getTestHistory();

  // Prepare chart data for Subject Mastery
  const subjectChartData = metrics.subjectProgress.map((s) => ({
    name: s.code,
    Mastered: s.mastered,
    Unmastered: s.totalQuestions - s.mastered,
    Total: s.totalQuestions
  }));

  // Prepare chart data for Test Score Trend
  const scoreTrendData = testHistory
    .slice()
    .reverse()
    .map((t, idx) => ({
      testName: `Test ${idx + 1}`,
      score: t.score,
      passThreshold: 70
    }));

  // Retrieve bookmarked question details
  const allQuestionsMap = React.useMemo(() => {
    const map = {};
    ['swd301', 'sba301'].forEach((subId) => {
      getQuestionsBySubjectId(subId).forEach((q) => {
        map[q.id] = q;
      });
    });
    return map;
  }, []);

  const bookmarkedQuestions = bookmarks
    .map((id) => allQuestionsMap[id])
    .filter(Boolean);

  const handleConfirmReset = () => {
    resetProgress();
    setShowResetModal(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Learning Analytics & Progress
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Detailed performance tracking, exam score history, and memory retention insights.
          </p>
        </div>

        <Button
          variant="danger"
          size="sm"
          icon={RotateCcw}
          onClick={() => setShowResetModal(true)}
        >
          Reset All Progress
        </Button>
      </div>

      {/* KPI Overview Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Questions</span>
          <div className="text-3xl font-extrabold text-slate-900">{metrics.totalQuestions}</div>
          <span className="text-xs text-indigo-600 font-medium">100% Extracted from Official Sources</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mastered Concepts</span>
          <div className="text-3xl font-extrabold text-emerald-600">{metrics.masteredCount}</div>
          <span className="text-xs text-emerald-700 font-medium">
            {metrics.totalQuestions > 0 ? Math.round((metrics.masteredCount / metrics.totalQuestions) * 100) : 0}% Course Mastery
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overall Accuracy</span>
          <div className="text-3xl font-extrabold text-slate-900">{metrics.globalAccuracy}%</div>
          <span className="text-xs text-slate-500 font-medium">{metrics.totalAnswered} Questions Attempted</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Average Exam Score</span>
          <div className="text-3xl font-extrabold text-indigo-600">{metrics.averageTestScore}%</div>
          <span className="text-xs text-slate-500 font-medium">{metrics.completedTestsCount} Tests Completed</span>
        </div>
      </section>

      {/* Recharts Analytics Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Subject Mastery Stacked Bar Chart */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900">Curriculum Mastery by Subject</h3>
            <span className="text-xs text-slate-400">Mastered vs Remaining</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectChartData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                />
                <Legend />
                <Bar dataKey="Mastered" fill="#10b981" radius={[4, 4, 0, 0]} stackId="a" />
                <Bar dataKey="Unmastered" fill="#e2e8f0" radius={[4, 4, 0, 0]} stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Test Performance Trend */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900">Practice Exam Score Trend</h3>
            <span className="text-xs text-emerald-600 font-semibold">Passing Line: 70%</span>
          </div>
          <div className="h-64 w-full">
            {scoreTrendData.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-2">
                <FileCheck2 className="w-8 h-8 stroke-1" />
                <p className="text-xs">Take simulated exams to view your score progression.</p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={scoreTrendData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="testName" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} name="Your Score (%)" />
                  <Line type="monotone" dataKey="passThreshold" stroke="#10b981" strokeDasharray="4 4" strokeWidth={2} dot={false} name="Pass Line (70%)" />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>

      {/* Completed Test History Table */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Complete Test History</h2>
          <span className="text-xs text-slate-500">{testHistory.length} Recorded Attempts</span>
        </div>

        {testHistory.length === 0 ? (
          <div className="py-8 text-center text-slate-400 text-xs">
            No exams taken yet. Start a simulated test from any subject page!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-semibold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Exam Title</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Score</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {testHistory.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      <div>{t.title}</div>
                      <span className="text-[11px] text-slate-400">{t.subjectName}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      {new Date(t.timestamp).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {t.score}% ({t.correctCount}/{t.totalQuestions})
                    </td>
                    <td className="py-3.5 px-4">
                      <Badge variant={t.passed ? 'success' : 'danger'} size="xs">
                        {t.passed ? 'Passed' : 'Failed'}
                      </Badge>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        to={`/tests/${t.id}/review`}
                        className="text-indigo-600 hover:text-indigo-800 font-semibold"
                      >
                        Review Answers →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Bookmarked Questions Section */}
      <section id="bookmarks" className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>Bookmarked Questions ({bookmarkedQuestions.length})</span>
            </h2>
            <p className="text-xs text-slate-500">
              Questions you have marked for targeted study and revision.
            </p>
          </div>
        </div>

        {bookmarkedQuestions.length === 0 ? (
          <div className="py-8 text-center text-slate-400 text-xs">
            No questions bookmarked yet. Click the bookmark icon during Flashcards or Learn mode to save items here.
          </div>
        ) : (
          <div className="space-y-3 pt-2">
            {bookmarkedQuestions.map((q) => (
              <div
                key={q.id}
                className="p-4 rounded-xl border border-slate-200/70 hover:border-slate-300 bg-white transition-all space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="primary" size="xs">{q.id}</Badge>
                    <span className="text-xs text-slate-500 font-medium">{q.topic}</span>
                  </div>
                  <button
                    onClick={() => toggleBookmark(q.id)}
                    className="text-xs text-rose-500 hover:text-rose-700 font-medium"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-sm font-semibold text-slate-900">{q.question}</p>
                <div className="text-xs text-emerald-800 font-medium bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                  Answer Key: {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Reset Modal */}
      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Reset All Study Data"
      >
        <div className="space-y-4">
          <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-xs flex items-start gap-2.5">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Danger Zone: Complete Reset</span>
              This will permanently delete your test history, answered statistics, and bookmarked questions. The original mock question banks are completely preserved.
            </div>
          </div>
          <p className="text-xs text-slate-600">Are you sure you want to proceed?</p>
          <div className="flex justify-end gap-2.5 pt-3 border-t border-slate-100">
            <Button variant="outline" onClick={() => setShowResetModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirmReset}>
              Yes, Reset Everything
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AnalyticsPage;

