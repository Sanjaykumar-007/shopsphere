import type { Product } from "../types/product"
import { Link } from "react-router-dom"
import { useDispatch} from "react-redux"
import { addToCart } from "../store/cartSlice"

interface ProductCardProps{
    product:Product
}

function ProductCard({product}:ProductCardProps){
  const dispatch = useDispatch()

  const handleAddToCart = ()=>{
         dispatch(
            addToCart({
        ...product,
        quantity:1,
         })
        )


  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">

  <Link  to={`/products/${product.id}`}>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      </Link>

      <div className="p-5">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        </Link>
      

        <p className="text-blue-600 font-bold text-xl mt-2">
          ₹{product.price}
        </p>

        <button     onClick={handleAddToCart} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard