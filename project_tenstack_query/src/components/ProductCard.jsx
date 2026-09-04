import React from "react";

const ProductCard = ({ product, products }) => {
  const item = product || products;
  if (!item) return null;

  const originalPrice = (
    item.price /
    (1 - (item.discountPercentage || 0) / 100)
  ).toFixed(2);

  return (
    <div className="group bg-neutral-900/90 border border-neutral-800/80 hover:border-yellow-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/5 flex flex-col justify-between">
      {/* Product Image & Badges */}
      <div className="relative bg-neutral-950 p-4 flex items-center justify-center overflow-hidden h-52">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300 ease-out"
          loading="lazy"
        />

        {/* Discount Badge */}
        {item.discountPercentage > 0 && (
          <span className="absolute top-3 left-3 bg-red-500/90 backdrop-blur text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow">
            -{Math.round(item.discountPercentage)}%
          </span>
        )}

        {/* Rating Badge */}
        <span className="absolute top-3 right-3 bg-neutral-900/90 border border-neutral-800 backdrop-blur text-yellow-400 text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {item.rating?.toFixed(1)}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-neutral-400 uppercase tracking-wider mb-1">
            <span>{item.brand || "Brand"}</span>
            <span className="capitalize text-yellow-500/80">
              {item.category?.replace("-", " ")}
            </span>
          </div>

          <h2
            className="font-bold text-sm sm:text-base text-white line-clamp-1 group-hover:text-yellow-400 transition-colors"
            title={item.title}
          >
            {item.title}
          </h2>

          <p className="text-xs text-neutral-400 line-clamp-2 mt-1.5">
            {item.description}
          </p>
        </div>

        {/* Price & Action */}
        <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-white">
                ${item.price}
              </span>
              {item.discountPercentage > 0 && (
                <span className="text-xs text-neutral-500 line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            <span
              className={`text-[10px] font-medium block ${
                item.stock > 10 ? "text-emerald-400" : "text-amber-400"
              }`}
            >
              {item.stock > 0 ? `${item.stock} in stock` : "Out of stock"}
            </span>
          </div>

          <button className="flex items-center gap-1.5 px-3 py-2 bg-yellow-500 hover:bg-yellow-400 active:scale-95 text-black text-xs font-bold rounded-xl shadow-md shadow-yellow-500/10 transition-all cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;