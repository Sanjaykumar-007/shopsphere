import { useSelector } from 'react-redux'

function Cart() {
  const cartItems = useSelector((state: any) => state.cart.items)

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

                <p className="text-gray-500 mt-1">
                  Quantity: {item.quantity}
                </p>
              </div>

            </div>
          ))}

        </div>
      )}

    </main>
  )
}

export default Cart