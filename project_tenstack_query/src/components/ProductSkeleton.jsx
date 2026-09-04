import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="bg-neutral-900/90 border border-neutral-800/80 rounded-2xl overflow-hidden flex flex-col justify-between animate-pulse">
      {/* Image Skeleton with Badges placeholder */}
      <div className="relative bg-neutral-950 p-4 h-52 flex items-center justify-center">
        <div className="w-full h-full bg-neutral-800/70 rounded-xl"></div>
        {/* Top Badges */}
        <div className="absolute top-3 left-3 w-10 h-5 bg-neutral-800 rounded-md"></div>
        <div className="absolute top-3 right-3 w-12 h-5 bg-neutral-800 rounded-md"></div>
      </div>

      {/* Info Skeleton */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex justify-between items-center mb-3">
            <div className="h-3 w-16 bg-neutral-800 rounded"></div>
            <div className="h-3 w-20 bg-neutral-800 rounded"></div>
          </div>

          {/* Title */}
          <div className="h-5 w-4/5 bg-neutral-800 rounded mb-3"></div>

          {/* Description */}
          <div className="space-y-1.5">
            <div className="h-3 w-full bg-neutral-800/80 rounded"></div>
            <div className="h-3 w-3/4 bg-neutral-800/80 rounded"></div>
          </div>
        </div>

        {/* Price & Button Footer */}
        <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
          <div className="space-y-1.5">
            <div className="h-5 w-16 bg-neutral-800 rounded"></div>
            <div className="h-2.5 w-12 bg-neutral-800/80 rounded"></div>
          </div>
          <div className="h-8 w-16 bg-neutral-800 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
