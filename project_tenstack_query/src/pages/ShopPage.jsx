import React from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { getProductsDataApi } from "../api/productApi";
import { useQuery } from "@tanstack/react-query";

const ShopPage = () => {
  const { data: products = [], isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-yellow-500">
              SkyDart Marketplace
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
              Explore Our Products
            </h1>
            <p className="text-neutral-400 text-sm mt-1">
              Browse top-tier items sourced directly from our global catalog.
            </p>
          </div>

          <div className="text-sm text-neutral-400">
            Showing{" "}
            <span className="font-semibold text-white">{products.length}</span>{" "}
            products
          </div>
        </div>

        {/* UI Controls */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-8">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search products, brands..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500 transition-colors"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex items-center gap-2">
            <select className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-yellow-500 cursor-pointer">
              <option value="all">All Categories</option>
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
            </select>

            <select className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-yellow-500 cursor-pointer">
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isPending
            ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
            : products.map((val) => (
              <ProductCard key={val.id} product={val} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
