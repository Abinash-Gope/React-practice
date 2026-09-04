import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import ProductFilter from "../components/ProductFilter";
import { useProductApi } from "../hooks/productHooks";

const ShopPage = () => {
  const { data, isLoading, error, filterProducts, filteredProducts } = useProductApi();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  // Trigger filtering when search, category or sort change
  useEffect(() => {
    filterProducts(searchQuery, selectedCategory, sortBy);
  }, [searchQuery, selectedCategory, sortBy, data]);

  if (error) return <h1>{error.message}</h1>;

  const productsToShow = filteredProducts?.length ? filteredProducts : data;

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
            Showing {productsToShow?.length} products
          </div>
        </div>

        {/* Search & Filter Component */}
        <ProductFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
            : productsToShow?.map((val) => (
              <ProductCard key={val.id} product={val} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
