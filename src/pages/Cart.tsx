import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from '../store/cartSlice'

function Cart() {
  const cartItems = useSelector(
    (state: any) => state.cart.items
  )

  const dispatch = useDispatch()

  const subtotal = cartItems.reduce(
    (total: number, item: any) =>
      total + item.price * item.quantity,
    0
  )

  const shipping = subtotal > 0 ? 50 : 0

  const total = subtotal + shipping

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-gray-900 mb-10">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">

          <div className="text-6xl mb-6">
            🛒
          </div>

          <h2 className="text-2xl font-semibold text-gray-700">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mt-2">
            Add some products to your cart.
          </p>

          <Link
            to="/products"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>

        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-4">

            {cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center gap-5 border border-gray-200 rounded-xl p-5"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                <div className="flex-1">

                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h2>

                  <p className="text-blue-600 font-bold mt-1">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      className="w-8 h-8 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="font-semibold min-w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                      className="w-8 h-8 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                    className="text-red-600 text-sm mt-3 hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>

                <div className="text-right">

                  <p className="font-bold text-gray-900">
                    ₹{item.price * item.quantity}
                  </p>

                </div>

              </div>
            ))}

            <button
              onClick={() => dispatch(clearCart())}
              className="text-red-600 font-semibold hover:text-red-700"
            >
              Clear Cart
            </button>

          </div>

          <div className="border border-gray-200 rounded-xl p-6 h-fit">

            <h2 className="text-2xl font-semibold text-gray-900">
              Order Summary
            </h2>

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

              <div className="border-t border-gray-200 pt-4 flex justify-between">

                <span className="text-xl font-semibold">
                  Total
                </span>

                <span className="text-2xl font-bold text-blue-600">
                  ₹{total}
                </span>

              </div>

            </div>

            <Link
              to="/checkout"
              className="block w-full text-center mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </Link>

          </div>

        </div>
      )}

    </main>
  )
}

export default Cart