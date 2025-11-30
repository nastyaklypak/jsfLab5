import React, { useState, useEffect } from 'react';

function Header({ onLogout }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(localStorage.getItem('isAuth') === 'true');
    };
    checkAuth();
    
    const handleStorageChange = () => {
      checkAuth();
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authChange', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleStorageChange);
    };
  }, []);

  const handleLogoutClick = () => {
    localStorage.removeItem('isAuth');
    setIsAuth(false);
    if (onLogout) onLogout();
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-links">
          <a href="#/" className="nav-link">Головна</a>
          <a href="#/news" className="nav-link">Новини</a>
          <a href="#/profile" className="nav-link">Профіль</a>
        </div>
        <div className="auth-section">
          {isAuth ? (
            <button onClick={handleLogoutClick} className="logout-btn">
              Вийти
            </button>
          ) : (
            <a href="#/login" className="login-link">Увійти</a>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;