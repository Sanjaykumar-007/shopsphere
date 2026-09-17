import { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import api from '../services/api'

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
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)

        const response = await api.get<Product>(`/products/${id}`)

        console.log('Product details response:', response.data)

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

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-center text-gray-500">
          Loading product...
        </p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-center text-red-600">
          {error}
        </p>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12">
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
  className="inline-block mb-8 text-blue-600 font-semibold hover:text-blue-700"
>
  ← Back to Products
</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full rounded-xl"
          />
        </div>

        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="text-2xl font-bold text-blue-600 mt-4">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description}
          </p>

          <p className="text-gray-700 mt-4">
            ⭐ {product.rating}
          </p>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Add to Cart
          </button>

        </div>
      </div>

    </main>
  )
}

export default ProductDetails