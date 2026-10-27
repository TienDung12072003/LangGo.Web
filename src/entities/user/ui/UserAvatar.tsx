import React from 'react';
import { User } from '../model/types';
import './UserAvatar.css';

interface UserAvatarProps {
  user: Pick<User, 'name' | 'avatarUrl' | 'level'>;
  size?: 'sm' | 'md' | 'lg';
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ user, size = 'md' }) => {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className={`langgo-avatar langgo-avatar--${size}`}>
      {user.avatarUrl ? (
        <img src={user.avatarUrl} alt={user.name} className="langgo-avatar__img" />
      ) : (
        <div className="langgo-avatar__fallback">{initials}</div>
      )}
      <span className="langgo-avatar__status-ring" />
    </div>
  );
};
