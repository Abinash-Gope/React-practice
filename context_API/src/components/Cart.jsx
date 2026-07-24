import React from "react";

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Shopping Cart ({cartItems.length})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section */}
        <div className="lg:col-span-2 space-y-5">
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-10 text-center">
              <h2 className="text-2xl font-semibold text-gray-500">
                Your cart is empty 🛒
              </h2>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center"
              >
                {/* Left Side */}
                <div className="flex gap-5">
                  {/* Image */}
                  <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-center">
                    <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full w-fit">
                      {item.category}
                    </span>

                    <h2 className="text-xl font-bold text-gray-800 mt-3">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-2 max-w-lg line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 mt-4 text-gray-600">
                      ⭐
                      <span>{item.rating?.rate || 4.5}</span>
                      <span>({item.rating?.count || 100})</span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="text-right">
                  <h2 className="text-3xl font-bold text-green-500">
                    ${item.price}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Qty: {item.quantity || 1}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Order Summary
          </h2>

          <div className="flex justify-between text-lg mb-4">
            <span className="text-gray-600">Items</span>
            <span className="font-semibold">{cartItems.length}</span>
          </div>

          <div className="flex justify-between text-xl font-bold mb-8">
            <span>Total</span>
            <span className="text-green-500">${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;