
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from '../store/cartSlice'

function Cart() {
  const cartItems = useSelector((state: any) => state.cart.items)

  const dispatch = useDispatch()

  const totalPrice = cartItems.reduce(
    (total: number, item: any) =>
      total + item.price * item.quantity,
    0
  )

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-gray-900 mb-10">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-700">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mt-2">
            Add some products to your cart.
          </p>
        </div>
      ) : (
        <>
          {/* Cart Items */}

          <div className="space-y-4">

            {cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border border-gray-200 rounded-xl p-5"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">

                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h2>

                  <p className="text-blue-600 font-bold mt-1">
                    ₹{item.price}
                  </p>

                  {/* Quantity */}

                  <div className="flex items-center gap-3 mt-3">

                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="w-8 h-8 border border-gray-300 rounded-lg"
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="w-8 h-8 border border-gray-300 rounded-lg"
                    >
                      +
                    </button>

                  </div>

                  {/* Remove */}

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-600 mt-3 hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* Cart Summary */}

          <div className="mt-10 border border-gray-200 rounded-xl p-6">

            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-gray-900">
                Total
              </span>

              <span className="text-2xl font-bold text-blue-600">
                ₹{totalPrice}
              </span>
            </div>

            {/* Clear Cart */}

            <button
              onClick={() => dispatch(clearCart())}
              className="w-full mt-6 border border-red-500 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
            >
              Clear Cart
            </button>

            {/* Checkout */}

            <Link
              to="/checkout"
              className="block w-full text-center mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </Link>

          </div>

        </>
      )}

    </main>
  )
}

export default Cart
