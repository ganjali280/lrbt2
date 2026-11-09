import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user, logout } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <h1>Личный кабинет</h1>
      <p>Привет, {user}!</p>
      <button onClick={logout}>Выйти</button>
    </>
  )
}
