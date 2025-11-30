import React from 'react';

function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Новина 1: Випуск React 18',
      date: '15.03.2024',
      content: 'Команда React оголосила про випуск нової версії з покращеною продуктивністю та новими можливостями для розробників.'
    },
    {
      id: 2,
      title: 'Новина 2: Нові можливості JavaScript',
      date: '20.03.2024',
      content: 'ECMAScript 2024 додає нові корисні функції для розробників, включаючи покращену роботу з асинхронним кодом.'
    },
    {
      id: 3,
      title: 'Новина 3: Тренди веб-розробки',
      date: '25.03.2024',
      content: 'Огляд актуальних технологій та підходів у сучасній веб-розробці: від serverless до micro-frontends.'
    },
    {
      id: 4,
      title: 'Новина 4: Оптимізація продуктивності',
      date: '01.04.2024',
      content: 'Поради щодо покращення швидкості завантаження веб-додатків та оптимізації користувацького досвіду.'
    },
    {
      id: 5,
      title: 'Новина 5: Безпека веб-додатків',
      date: '05.04.2024',
      content: 'Основні принципи забезпечення безпеки сучасних веб-додатків та захисту користувацьких даних.'
    }
  ];

  return (
    <div className="page">
      <h1>Новини</h1>
      <div className="news-list">
        {newsItems.map(item => (
          <div key={item.id} className="news-item">
            <h3>{item.title}</h3>
            <p className="news-date">{item.date}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;