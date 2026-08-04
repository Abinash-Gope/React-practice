import { Star } from "lucide-react";
import React, { useContext, useEffect } from "react";

const ProductsCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition-transform"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <span className="inline-block text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        <h2 className="mt-3 text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{product.rating.rate}</span>
          <span className="text-gray-500 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;