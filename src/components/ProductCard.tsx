interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductCarsProps{
    product:Product
}

function ProductCard({product}:ProductCarsProps){

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="text-blue-600 font-bold text-xl mt-2">
          ₹{product.price}
        </p>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard