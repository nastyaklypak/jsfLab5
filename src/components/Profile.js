import React from 'react';

function Profile() {
  const user = {
    username: 'Admin',
    email: 'admin@example.com',
    registrationDate: '01.01.2024',
    role: 'Адміністратор'
  };

  return (
    <div className="page">
      <h1>Профіль користувача</h1>
      <div className="profile-card">
        <div className="profile-info">
          <p><strong>Ім'я користувача:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Роль:</strong> {user.role}</p>
          <p><strong>Дата реєстрації:</strong> {user.registrationDate}</p>
        </div>
        <div className="profile-message">
          <p> Ця сторінка доступна лише авторизованим користувачам!</p>
          <p>Ви успішно увійшли в систему!</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;