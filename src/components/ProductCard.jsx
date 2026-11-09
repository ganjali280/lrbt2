import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price.toLocaleString('ru-RU')} ₽</p>
      <button onClick={() => addItem(product)}>В корзину</button>
    </div>
  )
}
