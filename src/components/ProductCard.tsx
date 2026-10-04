import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import type { Product } from '../types/product'
import { addToCart } from '../store/cartSlice'

interface ProductCardProps {
  product: Product
}
 
function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch()

  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    )

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1500)
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">

      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover cursor-pointer"
        />
      </Link>

      <div className="p-5">

        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        <p className="text-blue-600 font-bold text-xl mt-2">
          ₹{product.price}
        </p>

        <button
          onClick={handleAddToCart}
          className={`w-full mt-4 text-white py-2 rounded-lg transition ${
            added
              ? 'bg-green-600'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {added ? '✓ Added to Cart' : 'Add to Cart'}
        </button>

      </div>
    </div>
  )
}

export default ProductCard