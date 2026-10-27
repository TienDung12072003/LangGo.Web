import React from 'react';
import { X, Check, RotateCcw, Volume2, Sparkles } from 'lucide-react';
import { Button, ProgressBar, Badge } from '@/shared/ui';
import { WordItem } from '@/entities/vocabulary';
import { usePracticeSession } from '../model/usePracticeSession';
import './PracticeSessionModal.css';

interface PracticeSessionModalProps {
  words: WordItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const PracticeSessionModal: React.FC<PracticeSessionModalProps> = ({
  words,
  isOpen,
  onClose,
}) => {
  const {
    currentIndex,
    totalWords,
    currentWord,
    isRevealed,
    correctCount,
    isFinished,
    handleReveal,
    handleAnswer,
    resetSession,
  } = usePracticeSession(words);

  if (!isOpen) return null;

  const playAudio = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis?.speak(utterance);
  };

  return (
    <div className="practice-modal-overlay">
      <div className="practice-modal-card">
        {/* Header */}
        <div className="practice-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Sparkles size={20} color="var(--color-cyan)" />
            <span style={{ fontWeight: 700, fontSize: 'var(--font-size-lg)' }}>
              Luyện Tập Flashcard
            </span>
          </div>
          <button
            onClick={onClose}
            style={{ color: 'var(--color-text-subtle)', padding: 4 }}
            aria-label="Đóng modal"
          >
            <X size={20} />
          </button>
        </div>

        {isFinished ? (
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-primary-blue)' }}>
              🎉 Hoàn Thành Buổi Luyện Tập!
            </h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Bạn đã nhớ chính xác <strong>{correctCount}</strong> / {totalWords} từ vựng hôm nay.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 12 }}>
              <Button variant="secondary" icon={<RotateCcw size={16} />} onClick={resetSession}>
                Luyện Lại
              </Button>
              <Button variant="primary" onClick={onClose}>
                Tiếp Tục Học
              </Button>
            </div>
          </div>
        ) : currentWord ? (
          <>
            {/* Progress */}
            <ProgressBar
              value={currentIndex + 1}
              max={totalWords}
              variant="cyan"
              label={`Từ ${currentIndex + 1} / ${totalWords}`}
              showPercentage
            />

            {/* Flashcard Box */}
            <div className="practice-card-box" onClick={handleReveal}>
              <Badge variant="lavender">{currentWord.partOfSpeech}</Badge>
              <div className="practice-term">{currentWord.word}</div>
              <div className="practice-ipa">/{currentWord.phonetic}/</div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio(currentWord.word);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'var(--color-primary-blue)',
                  fontWeight: 600,
                  fontSize: 'var(--font-size-xs)',
                  background: 'rgba(59, 130, 246, 0.1)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                <Volume2 size={16} /> Nghe phát âm
              </button>

              {isRevealed ? (
                <div className="practice-meaning-box">
                  <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: 'var(--font-size-base)' }}>
                    {currentWord.meaningVi}
                  </div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: 4 }}>
                    "{currentWord.exampleEn}"
                  </div>
                </div>
              ) : (
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-subtle)', marginTop: 8 }}>
                  (Nhấp vào thẻ để xem nghĩa tiếng Việt)
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="practice-actions">
              <Button
                variant="secondary"
                icon={<RotateCcw size={16} />}
                onClick={() => handleAnswer(false)}
              >
                Chưa nhớ
              </Button>
              <Button
                variant="primary"
                icon={<Check size={16} />}
                onClick={() => handleAnswer(true)}
              >
                Đã nhớ rõ
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
