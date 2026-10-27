import React, { useState } from 'react';
import { Search, Bell, Sun, ChevronDown, LogOut } from 'lucide-react';
import { useAuth } from '@/features/auth';
import './header.css';

interface AppHeaderProps {
  userName?: string;
  userLevel?: string;
  avatarUrl?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  userName = 'Nguyễn Tiến Dũng',
  userLevel = 'Intermediate (B1)',
  avatarUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
}) => {
  const { logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="langgo-header">
      {/* Search Input */}
      <div className="langgo-header__search-wrap">
        <Search size={17} className="langgo-header__search-icon" />
        <input
          type="text"
          placeholder="Search lessons, words, or topics..."
          className="langgo-header__search-input"
        />
      </div>

      {/* Right controls */}
      <div className="langgo-header__actions">
        {/* Notification Bell */}
        <button className="langgo-header__circle-btn" aria-label="Notifications">
          <Bell size={17} />
          <span className="langgo-header__badge-dot" />
        </button>

        {/* Theme Toggle Sun */}
        <button className="langgo-header__circle-btn" aria-label="Theme toggle">
          <Sun size={17} />
        </button>

        {/* User Profile */}
        <div style={{ position: 'relative' }}>
          <div
            className="langgo-header__profile"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src={avatarUrl} alt={userName} className="langgo-header__avatar" />
            <div className="langgo-header__profile-text">
              <span className="langgo-header__profile-name">{userName}</span>
              <span className="langgo-header__profile-level">{userLevel}</span>
            </div>
            <ChevronDown size={14} className="langgo-header__chevron" />
          </div>

          {/* Simple Dropdown Menu */}
          {showMenu && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #E2E8F0',
                padding: '6px',
                minWidth: '160px',
                zIndex: 100,
              }}
            >
              <button
                onClick={() => {
                  setShowMenu(false);
                  logout();
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  color: '#EF4444',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#FEF2F2')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <LogOut size={15} />
                <span>Đăng xuất</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
