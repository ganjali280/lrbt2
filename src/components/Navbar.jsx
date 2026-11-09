import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { items } = useCart()
  const { theme, toggleTheme } = useTheme()
  const { user } = useAuth()

  return (
    <header className="header">
      <Link to="/" className="logo">ShopLab</Link>

      <nav className="nav">
        <NavLink to="/">Каталог</NavLink>
        <NavLink to="/cart">Корзина ({items.length})</NavLink>
        <NavLink to={user ? '/dashboard' : '/login'}>
          {user || 'Вход'}
        </NavLink>
      </nav>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
      </button>
    </header>
  )
}
