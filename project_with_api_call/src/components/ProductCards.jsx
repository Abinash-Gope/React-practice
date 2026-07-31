import React, { useContext } from "react";
import { Star, ShoppingCart, Minus, Plus } from "lucide-react";
import { MyStore } from "../context/MyContext";

export default function ProductCard({ product, isInCart }) {
  let { setCartItem, incrementQuantity, decrementQuantity } =
    useContext(MyStore);

  const addToCart = () => {
    setCartItem((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qunatity: item.qunatity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, qunatity: 1 }];
    });

    alert("Product added into cart");
  };

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-3">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="ml-1 text-sm font-medium">
            {product.rating.rate}
          </span>
          <span className="ml-2 text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
          {isInCart?.qunatity > 0 ? (
            <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50">
              <button
                onClick={() => decrementQuantity(product.id)}
                className="rounded-l-xl p-2 hover:bg-gray-200 transition"
              >
                <Minus size={18} />
              </button>

              <span className="min-w-[40px] text-center text-lg font-bold text-gray-900 font-semibold">
                {isInCart.qunatity}
              </span>

              <button
                onClick={() => incrementQuantity(product.id)}
                className="rounded-r-xl p-2 hover:bg-gray-200 transition"
              >
                <Plus size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={addToCart}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
