import { useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../store/cartSlice'

function Checkout() {
  const cartItems = useSelector((state: any) => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const totalPrice = cartItems.reduce(
    (total: number, item: any) =>
      total + item.price * item.quantity,
    0
  )

 const handlePlaceOrder = () => {
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

        {/* Customer Details */}

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
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>

              <textarea
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
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
              />
            </div>

          </div>

        </div>

        {/* Order Summary */}

        <div className="border border-gray-200 rounded-xl p-6">

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

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">

            <span className="text-xl font-semibold">
              Total
            </span>

            <span className="text-2xl font-bold text-blue-600">
              ₹{totalPrice}
            </span>

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