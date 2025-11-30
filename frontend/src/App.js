import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
import Profile from './components/Profile';
import Login from './components/Login';
import './App.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
    setCurrentPath(path);
  };

  const handleLogin = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const renderPage = () => {
    const isAuth = localStorage.getItem('isAuth') === 'true';

    if (currentPath === '/profile' && !isAuth) {
      navigate('/login');
      return <Login onLogin={handleLogin} />;
    }

    switch (currentPath) {
      case '/':
        return <Home />;
      case '/news':
        return <News />;
      case '/profile':
        return <Profile />;
      case '/login':
        return <Login onLogin={handleLogin} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header onLogout={handleLogout} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; Лабораторна робота №4</p>
      </footer>
    </div>
  );
}

export default App;