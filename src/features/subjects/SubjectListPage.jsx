import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Search, ArrowRight, Brain, RotateCw, FileCheck2, CheckCircle2 } from 'lucide-react';
import { subjects } from '../../data/subjects.js';
import { useAppStore } from '../../store/useAppStore.js';
import { Badge } from '../../components/common/Badge.jsx';
import { Button } from '../../components/common/Button.jsx';
import { ProgressBar } from '../../components/common/ProgressBar.jsx';
import { TestConfigModal } from '../tests/TestConfigModal.jsx';

export const SubjectListPage = () => {
  const navigate = useNavigate();
  const { metrics } = useAppStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [testModalSubject, setTestModalSubject] = useState(null);

  const filteredSubjects = metrics.subjectProgress.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Curriculum Subjects
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Choose a subject to launch Flashcards, start Adaptive Learning, or take a Simulated Exam.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search subjects..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-xs"
          />
        </div>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSubjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                    {subject.code.slice(0, 3)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="primary" size="xs">{subject.code}</Badge>
                      <Badge variant="default" size="xs">{subject.category}</Badge>
                      {subject.activeLearning && !subject.activeLearning.isAllMastered && (
                        <Badge variant="warning" size="xs">
                          Đang học Vòng {subject.activeLearning.round}
                        </Badge>
                      )}
                      {subject.flashcardProgress?.currentIndex > 0 && (
                        <Badge variant="indigo" size="xs">
                          Thẻ {subject.flashcardProgress.currentIndex + 1}/{subject.flashcardProgress.totalQuestions}
                        </Badge>
                      )}
                    </div>
                    <Link
                      to={`/subjects/${subject.id}`}
                      className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors mt-0.5 block"
                    >
                      {subject.name}
                    </Link>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {subject.description}
              </p>

              {/* Progress */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Overall Mastery
                  </span>
                  <span className="font-bold text-indigo-700">{subject.masteryPercentage}%</span>
                </div>
                <ProgressBar value={subject.mastered} max={subject.totalQuestions} variant="success" size="md" />
                <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                  <span>{subject.mastered} / {subject.totalQuestions} Questions Mastered</span>
                  <span>{subject.answered} Attempted</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  icon={RotateCw}
                  onClick={() => navigate(`/subjects/${subject.id}/flashcards`)}
                >
                  {subject.flashcardProgress?.currentIndex > 0
                    ? `Thẻ ${subject.flashcardProgress.currentIndex + 1}`
                    : 'Flashcards'}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  icon={Brain}
                  onClick={() => navigate(`/subjects/${subject.id}/learn`)}
                >
                  {subject.activeLearning && !subject.activeLearning.isAllMastered
                    ? `Học tiếp V${subject.activeLearning.round}`
                    : 'Learn'}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  icon={FileCheck2}
                  onClick={() => setTestModalSubject(subject)}
                >
                  Test
                </Button>
              </div>

              <Link
                to={`/subjects/${subject.id}`}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <span>Browse Full Question Bank ({subject.totalQuestions} Qs)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

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

export default SubjectListPage;

