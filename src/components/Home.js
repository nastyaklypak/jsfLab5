import React from 'react';

function Home() {
  return (
    <div className="page">
      <h1>Головна сторінка</h1>
      <p>Ласкаво просимо на наш сайт!</p>
      <div className="content-box">
        <h2>Про нас</h2>
        <p>
          Це демонстраційний проєкт на React із системою авторизації.
          Для доступу до сторінки профілю потрібно авторизуватися.
        </p>
        <p>
          Використовуйте наступні дані для входу:
        </p>
        <ul>
          <li><strong>Логін:</strong> Admin</li>
          <li><strong>Пароль:</strong> 12345</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;