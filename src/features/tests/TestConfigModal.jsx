import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Sparkles, AlertCircle, HelpCircle } from 'lucide-react';
import { Modal } from '../../components/common/Modal.jsx';
import { Button } from '../../components/common/Button.jsx';
import { useTestStore } from '../../store/useTestStore.js';
import { getQuestionsBySubjectId } from '../../data/questions/index.js';

export const TestConfigModal = ({ subject, isOpen, onClose }) => {
  const navigate = useNavigate();
  const startTest = useTestStore((state) => state.startTest);

  const allQuestions = subject ? getQuestionsBySubjectId(subject.id) : [];
  const maxAvailable = allQuestions.length;

  const [questionCount, setQuestionCount] = useState(Math.min(20, maxAvailable || 20));
  const [title, setTitle] = useState(subject ? `${subject.code} Practice Exam` : 'Practice Exam');
  const [error, setError] = useState('');

  const handleStart = (e) => {
    e.preventDefault();
    if (questionCount < 5) {
      setError('Minimum 5 questions required for simulated exam.');
      return;
    }
    if (questionCount > maxAvailable) {
      setError(`Cannot exceed total questions available in bank (${maxAvailable}).`);
      return;
    }

    startTest({ questionCount, title }, allQuestions, subject);
    onClose();
    // Navigate to active test
    const activeTestId = useTestStore.getState().testId;
    navigate(`/tests/${activeTestId}`);
  };

  if (!subject) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Configure Test: ${subject.code}`}>
      <form onSubmit={handleStart} className="space-y-5">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700 block">Exam Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g. Midterm Preparation Exam"
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <label className="font-semibold text-slate-700">Number of Questions</label>
            <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              {questionCount} Questions
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={maxAvailable}
            value={questionCount}
            onChange={(e) => {
              setQuestionCount(Number(e.target.value));
              setError('');
            }}
            className="w-full accent-indigo-600 cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>Min: 5 questions</span>
            <span>Max: {maxAvailable} questions</span>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-rose-50 text-rose-700 text-xs rounded-lg border border-rose-200">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-600 space-y-1">
          <div className="font-semibold text-slate-800 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            <span>Simulated Exam Conditions</span>
          </div>
          <p>
            Questions are randomly sampled with zero duplicates. Correct answers and explanations remain strictly hidden until you submit your test.
          </p>
        </div>

        <div className="flex justify-end gap-2.5 pt-3 border-t border-slate-100">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" icon={Play}>
            Start Exam
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default TestConfigModal;

