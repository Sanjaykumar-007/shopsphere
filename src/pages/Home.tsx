import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
  },
  {
    id: 4,
    name: 'Backpack',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
  },
]

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">

            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-4">
              Welcome to ShopSphere
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Everything you need,
              <br />
              all in one place.
            </h1>

            <p className="text-lg text-blue-100 mb-8">
              Discover quality products at great prices.
              Shop your favorite products from ShopSphere.
            </p>

            <Link
              to="/products"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="p-6 bg-white rounded-xl shadow-sm border border-blue-700 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">
              Electronics
            </h3>
            <p className="text-gray-500 mt-2">
              Latest gadgets
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-blue-700 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">
              Fashion
            </h3>
            <p className="text-gray-500 mt-2">
              Trending styles
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-blue-700 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">
              Home
            </h3>
            <p className="text-gray-500 mt-2">
              Make your home better
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border border-blue-700 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">
              Sports
            </h3>
            <p className="text-gray-500 mt-2">
              Gear for every activity
            </p>
          </div>

        </div>

      </section>

      {/* Featured Products */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>

            <Link
              to="/products"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>
      </section>

    </main>
  )
}

export default Home