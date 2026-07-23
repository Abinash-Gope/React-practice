import React from 'react'
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-2">
      {/* Image */}
      <div className="relative bg-gray-100 h-64 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain group-hover:scale-110 transition-transform duration-300"
        />

        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-medium">
              {product.rating.rate}
            </span>

            <span className="text-gray-400 text-sm">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </span>
        </div>

        <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;