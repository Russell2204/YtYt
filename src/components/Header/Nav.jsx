import logo from '@/assets/images/Nav/logo.svg'

const Nav = () => {
  const links = [
    'Чему вы научитесь',
    'Процесс обучения',
    'Стоимость',
    'Контакты',
  ]
  return (
    <nav className="container header-nav">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <ul className="header-nav-list">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
      <form className='header-nav-form'>
        <button>Регистрация</button>
        <button>Войти</button>
      </form>
    </nav>
  )
}

export default Nav
