import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Star } from "lucide-react";

const ProductDetail = () => {
  const [singleProductData, setSingleProductData] = useState(null);
  console.log(singleProductData);
  let { id } = useParams();

  let getSingleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProductData(res.data);
    } catch (error) {
      console.log("Detail api error", error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, [id]);

  if (!singleProductData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-gray-500 animate-pulse">
          Loading product details...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex items-center justify-center">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="h-[500px] object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm capitalize">
            {singleProductData.category}
          </span>

          <h1 className="text-4xl font-bold">{singleProductData.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star className="fill-yellow-400 text-yellow-400" size={20} />
            <span className="font-semibold">{singleProductData.rating?.rate}</span>
            <span className="text-gray-500">
              ({singleProductData.rating?.count} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="text-4xl font-bold text-green-600">
            ${singleProductData.price}
          </div>

          <p className="text-gray-600 leading-8">{singleProductData.description}</p>

          {/* Extra Info */}
          <div className="border-t pt-6 space-y-2 text-gray-600">
            <p>
              <strong>Category:</strong> {singleProductData.category}
            </p>

            <p>
              <strong>Availability:</strong>{" "}
              <span className="text-green-600">In Stock</span>
            </p>

            <p>
              <strong>Product ID:</strong> #{singleProductData.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

