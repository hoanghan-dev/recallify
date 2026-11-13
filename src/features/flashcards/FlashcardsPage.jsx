import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Shuffle,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Brain,
  HelpCircle
} from 'lucide-react';
import { subjects } from '../../data/subjects.js';
import { getQuestionsBySubjectId } from '../../data/questions/index.js';
import { useAppStore } from '../../store/useAppStore.js';
import { FlipCard } from '../../components/questions/FlipCard.jsx';
import { Button } from '../../components/common/Button.jsx';
import { ProgressBar } from '../../components/common/ProgressBar.jsx';
import { Badge } from '../../components/common/Badge.jsx';

export const FlashcardsPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { toggleBookmark, isBookmarked } = useAppStore();

  const subject = subjects.find((s) => s.id === subjectId) || subjects[0];
  const initialQuestions = useMemo(() => getQuestionsBySubjectId(subject.id), [subject.id]);

  const [deck, setDeck] = useState(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isDeckFinished, setIsDeckFinished] = useState(false);

  // Sync deck when subject changes
  useEffect(() => {
    setDeck(initialQuestions);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsShuffled(false);
    setIsDeckFinished(false);
  }, [initialQuestions]);

  const currentQuestion = deck[currentIndex];
  const currentBookmarked = currentQuestion ? isBookmarked(currentQuestion.id) : false;

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < deck.length - 1) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsDeckFinished(true);
    }
  }, [currentIndex, deck.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleShuffle = useCallback(() => {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsShuffled(true);
    setIsDeckFinished(false);
  }, [deck]);

  const handleRestart = useCallback(() => {
    setDeck(initialQuestions);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsShuffled(false);
    setIsDeckFinished(false);
  }, [initialQuestions]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is inside an input
      if (['input', 'textarea'].includes(e.target.tagName.toLowerCase())) return;

      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'b' || e.key === 'B') {
        if (currentQuestion) {
          e.preventDefault();
          toggleBookmark(currentQuestion.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrevious, currentQuestion, toggleBookmark]);

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
      {/* Top Navigation & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          to={`/subjects/${subject.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit to {subject.code} Overview</span>
        </Link>

        {/* Action Controls Header */}
        <div className="flex items-center gap-2">
          <Button
            variant={isShuffled ? 'primary' : 'outline'}
            size="sm"
            icon={Shuffle}
            onClick={handleShuffle}
            title="Randomize card order"
          >
            {isShuffled ? 'Shuffled' : 'Shuffle'}
          </Button>

          <Button
            variant="outline"
            size="sm"
            icon={RotateCw}
            onClick={handleRestart}
            title="Restart deck"
          >
            Restart
          </Button>
        </div>
      </div>

      {/* Progress Bar & Counter */}
      <div className="space-y-1.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold text-slate-700">
            Card {currentIndex + 1} of {deck.length}
          </span>
          <span className="font-bold text-indigo-600">
            {Math.round(((currentIndex + 1) / deck.length) * 100)}%
          </span>
        </div>
        <ProgressBar
          value={currentIndex + 1}
          max={deck.length}
          variant="primary"
          size="sm"
        />
      </div>

      {/* Main Flashcard Container */}
      {!isDeckFinished ? (
        <div className="py-2">
          <FlipCard
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            totalQuestions={deck.length}
            isFlipped={isFlipped}
            isBookmarked={currentBookmarked}
            onFlip={handleFlip}
            onToggleBookmark={() => currentQuestion && toggleBookmark(currentQuestion.id)}
          />
        </div>
      ) : (
        /* Deck Completed View */
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 text-center shadow-md space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Deck Completed! 🎉
            </h2>
            <p className="text-sm text-slate-600">
              You reviewed all {deck.length} flashcards in <strong>{subject.code}</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button variant="outline" size="md" icon={RotateCw} onClick={handleRestart}>
              Review Deck Again
            </Button>
            <Button
              variant="primary"
              size="md"
              icon={Brain}
              onClick={() => navigate(`/subjects/${subject.id}/learn`)}
            >
              Test with Learn Mode
            </Button>
          </div>
        </div>
      )}

      {/* Navigation Controls Bar */}
      {!isDeckFinished && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <Button
            variant="outline"
            size="md"
            icon={ArrowLeft}
            disabled={currentIndex === 0}
            onClick={handlePrevious}
            className="w-full sm:w-auto"
          >
            Previous
          </Button>

          <Button
            variant="secondary"
            size="md"
            icon={RotateCw}
            onClick={handleFlip}
            className="w-full sm:w-48 font-semibold"
          >
            {isFlipped ? 'Show Question' : 'Reveal Answer'}
          </Button>

          <Button
            variant="primary"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            onClick={handleNext}
            className="w-full sm:w-auto"
          >
            {currentIndex === deck.length - 1 ? 'Finish Deck' : 'Next Card'}
          </Button>
        </div>
      )}

      {/* Keyboard Shortcuts Helper Footer */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-4">
        <span className="flex items-center gap-1.5">
          <kbd className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600 shadow-2xs">Space</kbd>
          Flip Card
        </span>
        <span className="flex items-center gap-1.5">
          <kbd className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600 shadow-2xs">←</kbd>
          <kbd className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600 shadow-2xs">→</kbd>
          Navigate
        </span>
        <span className="flex items-center gap-1.5">
          <kbd className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600 shadow-2xs">B</kbd>
          Bookmark
        </span>
      </div>
    </div>
  );
};

export default FlashcardsPage;

