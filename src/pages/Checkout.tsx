import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { clearCart } from '../store/cartSlice'

function Checkout() {
  const cartItems = useSelector(
    (state: any) => state.cart.items
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const [error, setError] = useState('')

  const subtotal = cartItems.reduce(
    (total: number, item: any) =>
      total + item.price * item.quantity,
    0
  )

  const shipping = subtotal > 0 ? 50 : 0

  const total = subtotal + shipping

  const handlePlaceOrder = () => {
    setError('')

    if (!name || !email || !address || !phone) {
      setError('Please fill all fields')
      return
    }

    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number')
      return
    }

    dispatch(clearCart())

    navigate('/order-success')
  }

  if (cartItems.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-12">

        <div className="text-center py-16">

          <h1 className="text-3xl font-bold text-gray-900">
            Your cart is empty
          </h1>

          <p className="text-gray-500 mt-2">
            Add some products before checkout.
          </p>

        </div>

      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-gray-900 mb-10">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="border border-gray-200 rounded-xl p-6">

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Customer Details
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>

              <textarea
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Enter your address"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm">
                {error}
              </p>
            )}

          </div>

        </div>

        <div className="border border-gray-200 rounded-xl p-6 h-fit">

          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            {cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4"
              >

                <div>

                  <h3 className="font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>

                </div>

                <p className="font-semibold text-gray-900">
                  ₹{item.price * item.quantity}
                </p>

              </div>
            ))}

          </div>

          <div className="space-y-4 mt-6">

            <div className="flex justify-between">
              <span className="text-gray-600">
                Subtotal
              </span>

              <span className="font-semibold">
                ₹{subtotal}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">
                Shipping
              </span>

              <span className="font-semibold">
                ₹{shipping}
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 pt-4">

              <span className="text-xl font-semibold">
                Total
              </span>

              <span className="text-2xl font-bold text-blue-600">
                ₹{total}
              </span>

            </div>

          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Place Order
          </button>

        </div>

      </div>

    </main>
  )
}

export default Checkout