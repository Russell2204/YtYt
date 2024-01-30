import Content from "./Content"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <Content />
    </header>
  )
}

export default Header