import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === 'Admin' && password === '12345') {
      localStorage.setItem('isAuth', 'true');
      window.dispatchEvent(new Event('authChange'));
      setError('');
      if (onLogin) onLogin();
    } else {
      setError("Ім'я користувача або пароль введені не вірно");
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="page">
      <div className="login-container">
        <h1>Вхід в систему</h1>
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="username">Ім'я користувача:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введіть ім'я користувача"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введіть пароль"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e);
                }
              }}
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          
          <button onClick={handleSubmit} className="submit-btn">
            Увійти
          </button>
          
          <div className="login-hint">
            <p><small>Підказка: Admin / 12345</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;