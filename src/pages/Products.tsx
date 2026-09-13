import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import api from '../services/api'



interface ApiProduct {
  id: number
  title: string
  price: number
  thumbnail: string
}

interface ApiResponse {
  products: ApiProduct[]
}

function Products() {
  const [products, setProducts] = useState<ApiProduct[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)

      const response = await api.get<ApiResponse>('/products')

      console.log('Products API response:', response.data)

      setProducts(response.data.products)
    } catch (error) {
      console.error('Products API error:', error)
      setError('Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          All Products
        </h1>

        <p className="text-gray-500 mt-2">
          Explore our latest products
        </p>
      </div>

      {/* Search */}
      <div className="mb-10">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search products..."
          className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
        />
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-16">
          <p className="text-gray-500">
            Loading products...
          </p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-red-600">
            {error}
          </h2>
        </div>
      )}

      {/* Products */}
      {!loading && !error && (
        filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.thumbnail,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-700">
              No products found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching for another product.
            </p>
          </div>
        )
      )}

    </main>
  )
}

export default Products