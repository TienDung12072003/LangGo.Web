import React from 'react';
import { AuthProvider, useAuth } from '@/features/auth';
import { LoginPage, DashboardPage } from '@/pages';
import './styles/index.css';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="langgo-app-container">
      {isAuthenticated ? <DashboardPage /> : <LoginPage />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
