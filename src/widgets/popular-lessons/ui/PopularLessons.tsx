import React from 'react';
import { Bookmark } from 'lucide-react';
import { PopularLessonData } from '@/shared/api';
import './popular-lessons.css';

interface PopularLessonsProps {
  lessons: PopularLessonData[];
  onSelectLesson?: (id: string) => void;
}

export const PopularLessons: React.FC<PopularLessonsProps> = ({
  lessons,
  onSelectLesson,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="langgo-section-header">
        <h3 className="langgo-section-title">Popular Lessons</h3>
        <span className="langgo-section-link">View all</span>
      </div>

      <div className="langgo-popular-grid" style={{ marginTop: 8 }}>
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="langgo-popular-card"
            onClick={() => onSelectLesson?.(lesson.id)}
          >
            <img
              src={lesson.thumbnailUrl}
              alt={lesson.title}
              className="langgo-popular-card__thumb"
            />
            <span
              className={`langgo-popular-card__badge langgo-popular-card__badge--${lesson.badge.toLowerCase()}`}
            >
              {lesson.badge}
            </span>
            <div className="langgo-popular-card__title" title={lesson.title}>
              {lesson.title}
            </div>
            <div className="langgo-popular-card__footer">
              <span>{lesson.duration}</span>
              <Bookmark size={14} className="langgo-popular-card__bookmark" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
