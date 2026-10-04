import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import api from '../services/api'
import { addToCart } from '../store/cartSlice'

interface Product {
  id: number
  title: string
  description: string
  price: number
  rating: number
  thumbnail: string
}

function ProductDetails() {
  const { id } = useParams()

  const dispatch = useDispatch()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await api.get<Product>(
          `/products/${id}`
        )

        setProduct(response.data)
      } catch (error) {
        console.error('Product details error:', error)
        setError('Failed to load product')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (!product) {
      return
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: 1,
      })
    )

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1500)
  }

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-center text-gray-500">
          Loading product...
        </p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-center text-red-600">
          {error}
        </p>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-center text-gray-500">
          Product not found
        </p>
      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <Link
        to="/products"
        className="text-blue-600 hover:underline"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">

        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </div>

        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="text-blue-600 text-3xl font-bold mt-5">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description}
          </p>

          <p className="text-yellow-500 font-semibold mt-5">
            ⭐ {product.rating}
          </p>

          <button
            onClick={handleAddToCart}
            className={`w-full mt-8 text-white py-3 rounded-lg font-semibold transition ${
              added
                ? 'bg-green-600'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {added ? '✓ Added to Cart' : 'Add to Cart'}
          </button>

        </div>

      </div>

    </main>
  )
}

export default ProductDetails