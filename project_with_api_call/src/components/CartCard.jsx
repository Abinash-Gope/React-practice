import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartCard = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      {/* Product Image */}
      <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-20 w-20 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 capitalize">
          {item.category}
        </span>

        <h2 className="mt-2 text-lg font-semibold text-gray-800 line-clamp-2">
          {item.title}
        </h2>

        <p className="mt-3 text-xl font-bold text-indigo-600">
          ${item.price}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-end gap-4">
        {/* Quantity */}
        <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50">
          <button
            onClick={() => onDecrease(item.id)}
            className="rounded-l-xl p-2 hover:bg-gray-200 transition"
          >
            <Minus size={18} />
          </button>

          <span className="min-w-[40px] text-center text-lg font-bold text-gray-900 font-semibold">
            {item.quantity || 1}
          </span>

          <button
            onClick={() => onIncrease(item.id)}
            className="rounded-r-xl p-2 hover:bg-gray-200 transition"
          >
            <Plus size={18} />
          </button>
        </div>

        {/* Remove */}
        <button
          onClick={() => onRemove(item.id)}
          className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition"
        >
          <Trash2 size={16} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;