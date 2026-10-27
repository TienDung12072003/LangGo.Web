import React from 'react';
import { Volume2 } from 'lucide-react';
import { GlassCard, Badge } from '@/shared/ui';
import { WordItem } from '../model/types';
import './WordCard.css';

interface WordCardProps {
  word: WordItem;
  onPlayAudio?: (word: string) => void;
}

export const WordCard: React.FC<WordCardProps> = ({ word, onPlayAudio }) => {
  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPlayAudio) {
      onPlayAudio(word.word);
    } else {
      // Browser SpeechSynthesis fallback
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = 'en-US';
      window.speechSynthesis?.speak(utterance);
    }
  };

  return (
    <GlassCard padding="md" className="word-card" interactive>
      <div className="word-card__top">
        <div>
          <span className="word-card__term">{word.word}</span>{' '}
          <span className="word-card__ipa">/{word.phonetic}/</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Badge variant="lavender">{word.partOfSpeech}</Badge>
          <button
            onClick={handleAudio}
            title="Nghe phát âm"
            style={{
              padding: 6,
              borderRadius: '50%',
              background: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--color-primary-blue)',
              display: 'inline-flex',
            }}
          >
            <Volume2 size={16} />
          </button>
        </div>
      </div>

      <div className="word-card__meaning">{word.meaningVi}</div>

      <div className="word-card__example">
        <div>"{word.exampleEn}"</div>
        <div style={{ opacity: 0.8, marginTop: 2 }}>{word.exampleVi}</div>
      </div>
    </GlassCard>
  );
};
