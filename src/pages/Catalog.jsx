import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Catalog() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Каталог iPhone</h1>
      <button onClick={() => navigate('/cart')}>Перейти в корзину</button>

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
