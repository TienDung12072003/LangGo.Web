import React from 'react';
import { Check, Volume2 } from 'lucide-react';
import { VocabItemData } from '@/shared/api';
import './vocabulary-preview.css';

interface VocabularyPreviewProps {
  words: VocabItemData[];
  onWordClick?: (word: string) => void;
}

export const VocabularyPreview: React.FC<VocabularyPreviewProps> = ({
  words,
  onWordClick,
}) => {
  const speak = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis?.speak(utterance);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="langgo-section-header">
        <h3 className="langgo-section-title">Your Vocabulary</h3>
        <span className="langgo-section-link">View all</span>
      </div>

      <div className="langgo-vocab-box" style={{ marginTop: 8 }}>
        {words.map((item) => (
          <div
            key={item.id}
            className="langgo-vocab-item"
            onClick={() => onWordClick?.(item.word)}
          >
            <div className="langgo-vocab-left">
              <span className="langgo-vocab-check">
                <Check size={11} strokeWidth={3} />
              </span>
              <span className="langgo-vocab-word">{item.word}</span>
            </div>

            <div
              className="langgo-vocab-mid"
              onClick={(e) => speak(item.word, e)}
              title="Click to listen"
            >
              <Volume2 size={13} />
              <span>{item.phonetic}</span>
            </div>

            <span
              className={`langgo-cefr-badge langgo-cefr-badge--${item.cefr.toLowerCase()}`}
            >
              {item.cefr}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
