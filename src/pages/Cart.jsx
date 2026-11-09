import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, total, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <>
        <h1>Корзина пуста</h1>
        <Link to="/">Перейти в каталог</Link>
      </>
    )
  }

  return (
    <>
      <h1>Корзина</h1>

      {items.map((item, index) => (
        <div className="cart-row" key={index}>
          <span>{item.title}</span>
          <span>{item.price.toLocaleString('ru-RU')} ₽</span>
          <button onClick={() => removeItem(index)}>Удалить</button>
        </div>
      ))}

      <h2>Итого: {total.toLocaleString('ru-RU')} ₽</h2>
      <Link to="/">Продолжить покупки</Link>
    </>
  )
}
