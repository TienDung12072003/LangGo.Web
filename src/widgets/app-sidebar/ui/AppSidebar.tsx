import React from 'react';
import {
  Home,
  BookOpen,
  Target,
  Layers,
  ClipboardCheck,
  BarChart2,
  Users,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import './sidebar.css';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

export const AppSidebar: React.FC = () => {
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: <Home size={18} />, active: true },
    { id: 'learning', label: 'Learning', icon: <BookOpen size={18} /> },
    { id: 'practice', label: 'Practice', icon: <Target size={18} /> },
    { id: 'vocabulary', label: 'Vocabulary', icon: <Layers size={18} /> },
    { id: 'tests', label: 'Tests', icon: <ClipboardCheck size={18} /> },
    { id: 'progress', label: 'Progress', icon: <BarChart2 size={18} /> },
    { id: 'community', label: 'Community', icon: <Users size={18} /> },
  ];

  return (
    <aside className="langgo-sidebar">
      <div>
        {/* Brand */}
        <div className="langgo-sidebar__brand">
          <div className="langgo-sidebar__logo-badge">
            <Sparkles size={20} />
          </div>
          <div className="langgo-sidebar__brand-text">
            <span className="langgo-sidebar__logo-title">LangGo</span>
            <span className="langgo-sidebar__logo-slogan">Better English, Brighter Future</span>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="langgo-sidebar__nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`langgo-sidebar__item ${
                item.active ? 'langgo-sidebar__item--active' : ''
              }`}
            >
              <span className="langgo-sidebar__item-icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Motivation Card: Keep going! */}
      <div className="langgo-sidebar__bot-card">
        <div className="langgo-sidebar__bot-top">
          <div className="langgo-sidebar__bot-avatar">🤖</div>
          <button className="langgo-sidebar__bot-arrow-btn" aria-label="Khám phá">
            <ArrowRight size={13} />
          </button>
        </div>
        <div>
          <div className="langgo-sidebar__bot-title">Keep going!</div>
          <div className="langgo-sidebar__bot-desc">Small steps make big progress.</div>
        </div>
      </div>
    </aside>
  );
};
