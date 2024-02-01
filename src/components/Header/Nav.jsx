import logo from '@/assets/images/Nav/logo.svg'
import {useEffect, useRef} from 'react'
const Nav = () => {
  const links = [
    'Чему вы научитесь',
    'Процесс обучения',
    'Стоимость',
    'Контакты',
  ]
  let burgerRef = useRef()
  let listRef = useRef()

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if(e.target.className === 'burger'){
          listRef.current.className = 'header-nav-list active'
      }else{
        listRef.current.className = 'header-nav-list'
      }
    } )
  
    return () => {
      
    }
  }, [])
  
  return (
    <nav className="container header-nav">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <ul ref={listRef} className="header-nav-list">
        <button className='close'><img src="images/close.svg" alt="" /></button>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
      <button className='burger' ref={burgerRef}><img className='burger' src="images/burger.svg" alt="" /></button>
      <form className='header-nav-form'>
        <button>Регистрация</button>
        <button>Войти</button>
      </form>
    </nav>
  )
}

export default Nav
