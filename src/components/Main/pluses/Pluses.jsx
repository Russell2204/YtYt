import React from 'react'
const pluses = [
  {
  url: 'pluses1.svg', title: 'Огромное количество практики', descr: 'Более 500 самостоятельных заданий и 20 полноценных больших проектов',
  },
  {
  url: 'pluses2.svg', title: 'Современные методики обучения', descr: `Спиральное обучение: 
  погружаемся в материал постепенно, виток за витком`,
  },
  {
  url: 'pluses3.svg', title: 'Простое и понятное изложение', descr: 'Вместо заумных терминов – примеры из реального мира',
  },
  {
  url: 'pluses4.svg', title: 'Гибкий график занятий', descr: `Учитесь в любое время в удобном 
  для вас темпе`,
  },
  {
  url: 'pluses5.svg', title: 'Прямая связь с опытными программистами', descr: `Задавайте вопросы 
  и отправляйте свой код на проверку`,
  },
  {
  url: 'pluses6.svg', title: 'Оплата небольшими частями', descr: `Платите только за тот материал, который сейчас изучаете, 
  а не за весь курс сразу`,
  },
  {
  url: 'pluses7.svg', title: 'Быстрый и легкий возврат', descr: `Если передумаете учиться –
  вернем деньги за 3 рабочих дня`,
  },
]
const Pluses = () => {
  return (
    <section className="container pluses">
      <h2 className="main-title">Обучение в YtYt – это удобно и результативно</h2>
      <div className="pluses__content">
        {pluses.map((item) => (
           <div className="pluses__content-card">
          <img src={`images/pluses/${item.url}`} alt="" />
          <h3>{item.title}</h3>
          <p>{item.descr}</p>
        </div>
        ))}
       
      </div>
    </section>
  )
}

export default Pluses