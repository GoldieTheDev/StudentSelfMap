import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import { useThemeStore } from './stores/themeStore';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import Schedule from './components/Schedule';
import Events from './components/Events';
import CampusMap from './components/CampusMap';
import Support from './components/Support';
import Inquiries from './components/Inquiries';
import PracticeTests from './components/PracticeTests';
import Notifications from './components/Notifications';
import Opportunities from './components/Opportunities';

function App() {
  const { isAuthenticated } = useAuthStore();
  const { theme, language } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [theme, language]);

  return (
    <Router>
      <div className={`${theme === 'dark' ? 'dark' : ''}`}>
        <Notifications />
        <Routes>
          <Route path="/signin" element={!isAuthenticated ? <SignIn /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={isAuthenticated ? <Layout><Dashboard /></Layout> : <Navigate to="/signin" />} />
          <Route path="/student-type/:type" element={isAuthenticated ? <Layout><Dashboard /></Layout> : <Navigate to="/signin" />} />
          <Route path="/academic-counseling/schedule" element={isAuthenticated ? <Layout><Schedule theme={theme} language={language} /></Layout> : <Navigate to="/signin" />} />
          <Route path="/academic-counseling/practice-tests" element={isAuthenticated ? <Layout><PracticeTests /></Layout> : <Navigate to="/signin" />} />
          <Route path="/events" element={isAuthenticated ? <Layout><Events theme={theme} language={language} /></Layout> : <Navigate to="/signin" />} />
          <Route path="/opportunities" element={isAuthenticated ? <Layout><Opportunities theme={theme} language={language} /></Layout> : <Navigate to="/signin" />} />
          <Route path="/map" element={isAuthenticated ? <Layout><CampusMap theme={theme} /></Layout> : <Navigate to="/signin" />} />
          <Route path="/booking/:type" element={isAuthenticated ? <Layout><Support theme={theme} language={language} /></Layout> : <Navigate to="/signin" />} />
          <Route path="/help" element={isAuthenticated ? <Layout><Inquiries theme={theme} language={language} /></Layout> : <Navigate to="/signin" />} />
          <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/signin"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;