import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('accessToken'))
  )

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    setIsLoggedIn(false)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          ShopSphere
        </Link>

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-gray-700 hover:text-blue-600"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="text-gray-700 hover:text-blue-600"
          >
            Cart
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
          )}

        </div>

      </div>
    </nav>
  )
}

export default Navbar