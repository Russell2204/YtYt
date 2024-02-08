import React from 'react'
const Studying = () => {
  const skills = [
    { title: 'Язык программирования Python', bg: '#5096FF' },
    { title: 'Сети', bg: '#FFB359' },
    { title: 'Базы данных', bg: '#FF6F50' },
    { title: 'Фреймворки Flask и Django', bg: '#4BD071' },
    { title: 'Отладка и тестирование', bg: '#50C0FF' },
    { title: 'Docker', bg: '#4B77B9' },
    { title: 'Git', bg: '#AF93FF' },
  ]
  return (
    <section className="studying">
      <h2 className="main-title">Какие технологии вы изучите:</h2>
      <div className="container studying-content">
        <div className="studying-content-image">
          <img src="images/main/studying/table.svg" alt="" />
          <img src="images/main/studying/flower.svg" alt="" />
          <img src="images/main/studying/chelik.svg" alt="" />
          <img src="images/main/studying/nout.svg" alt="" />
        </div>
        <ul className="studying-content-skills">
          {skills.map((skill) => (
            <li key={skill.title} style={{ backgroundColor: skill.bg }}>
              {skill.title}
            </li>
          ))}
          <p>Это необходимый минимум для современного backend-разработчика</p>
        </ul>
      </div>
    </section>
  )
}

export default Studying
