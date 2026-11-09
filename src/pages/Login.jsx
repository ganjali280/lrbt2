import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [name, setName] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    login(name)
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Вход</h1>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Ваше имя"
        required
      />
      <button type="submit">Войти</button>
    </form>
  )
}
