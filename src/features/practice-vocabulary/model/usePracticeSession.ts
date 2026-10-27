import { useState } from 'react';
import { WordItem } from '@/entities/vocabulary';

export function usePracticeSession(words: WordItem[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentWord = words[currentIndex] || null;

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }

    if (currentIndex + 1 < words.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsRevealed(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setIsRevealed(false);
    setCorrectCount(0);
    setIsFinished(false);
  };

  return {
    currentIndex,
    totalWords: words.length,
    currentWord,
    isRevealed,
    correctCount,
    isFinished,
    handleReveal,
    handleAnswer,
    resetSession,
  };
}
