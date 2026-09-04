import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productApi";
import { useState, useEffect } from "react";

export const useProductApi = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
    staleTime: 50000,
  });

  // Initialise filtered list when raw data arrives
  useEffect(() => {
    if (data) setFilteredProducts(data);
  }, [data]);

  const filterProducts = (searchQuery, selectedCategory = "all", sortBy = "default") => {
    if (!data) return;
    // Search filter (case‑insensitive)
    let filtered = data.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Category filter
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered = filtered.slice().sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = filtered.slice().sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
        break;
      // "default" or any other value retains original order
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  return { data, isLoading, error, filterProducts, filteredProducts };
};
