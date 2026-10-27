import React from 'react';
import { BookOpen, CheckCircle2, Lock, Clock, Award } from 'lucide-react';
import { GlassCard, Badge, ProgressBar, Button } from '@/shared/ui';
import { Lesson } from '../model/types';
import './LessonProgressCard.css';

interface LessonProgressCardProps {
  lesson: Lesson;
  onStartLesson?: (lessonId: string) => void;
}

export const LessonProgressCard: React.FC<LessonProgressCardProps> = ({
  lesson,
  onStartLesson,
}) => {
  const isLocked = lesson.status === 'locked';
  const isCompleted = lesson.status === 'completed';

  return (
    <GlassCard interactive={!isLocked} padding="md" className="lesson-card">
      <div className="lesson-card__header">
        <div className="lesson-card__icon-wrap">
          {isCompleted ? (
            <CheckCircle2 size={22} color="var(--color-success)" />
          ) : isLocked ? (
            <Lock size={20} color="var(--color-text-subtle)" />
          ) : (
            <BookOpen size={22} />
          )}
        </div>

        <Badge
          variant={
            isCompleted ? 'success' : isLocked ? 'blue' : 'cyan'
          }
        >
          {isCompleted ? 'Đã hoàn thành' : isLocked ? 'Đã khóa' : 'Đang học'}
        </Badge>
      </div>

      <div className="lesson-card__body">
        <h4 className="lesson-card__title">{lesson.title}</h4>
        <p className="lesson-card__desc">{lesson.description}</p>
        
        <ProgressBar
          value={lesson.progressPercent}
          variant={isCompleted ? 'cyan' : 'blue'}
          size="sm"
          showPercentage
        />
      </div>

      <div className="lesson-card__footer">
        <div className="lesson-card__meta">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Clock size={14} /> {lesson.durationMinutes} phút
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <Award size={14} /> +{lesson.xpReward} XP
          </span>
        </div>

        {!isLocked && (
          <Button
            size="sm"
            variant={isCompleted ? 'secondary' : 'primary'}
            onClick={() => onStartLesson?.(lesson.id)}
          >
            {isCompleted ? 'Ôn tập' : 'Tiếp tục'}
          </Button>
        )}
      </div>
    </GlassCard>
  );
};
