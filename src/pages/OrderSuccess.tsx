import { Link } from 'react-router-dom' 
function OrderSuccess() 
{ return ( 
<main className="max-w-7xl mx-auto px-6 py-16"> 
    <div className="max-w-lg mx-auto text-center"> 
        {/* Success Icon */} 
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
             <span className="text-4xl"> ✓ </span>
              </div> {/* Title */} 
              <h1 className="text-4xl font-bold text-gray-900 mt-8"> Order Placed Successfully! </h1> {/* Message */} <p className="text-gray-500 mt-4 leading-relaxed"> Thank you for shopping with ShopSphere. Your order has been placed successfully. </p> {/* Order ID */} <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-8"> <p className="text-sm text-gray-500"> Order ID </p> <p className="text-lg font-bold text-gray-900 mt-1"> #SS20260920 </p> </div> {/* Continue Shopping */} <Link to="/products" className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition" > Continue Shopping </Link> </div> </main> ) } export default OrderSuccess