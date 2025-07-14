import React from "react";
import Rating from "../../../components/rating"; 


function ProductCard({ product, cardWidth }) {
  return (
    <div style={{ width : cardWidth}} className="h-full hover:scale-[1.05] hover:shadow-xl transition-all p-2 bg-gradient-to-b from-blue-950 to-purple-950 rounded-lg grid place-items-stretch grid-rows-[45%_10%_30%_15%] gap-1 overflow-hidden">
      <div className="row-span-1">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full aspect-[4/3] object-cover rounded"
        />
      </div>
      <div className="text-white overflow-auto truncate row-start-2 row-span-1 content-center">
        {product.name}
      </div>
      <div className="text-gray-200 row-start-3 row-span-1 p-1 pl-3 overflow-auto overflow-y-scroll break-words">
        {product.description}
      </div>
      <div className="text-white rounded row-start-4 row-span-1 p-1 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <Rating className="justify-self-start" rating={product.rating} />
            <span className="text-sm truncate justify-self-start text-gray-300 ml-1 font-small">
              {product.rating}
            </span>
          </div>
          <div className="flex items-end">
            <span className="text-sm ml-1 mr-1 justify-self-between text-gray-200 mr-1 mb-1 font-medium">
              ${product.price}
            </span>
            <button className="hover:bg-blue-500 press:bg-blue-500 bg-blue-700 px-3 py-1 rounded text-sm justify-self-end font-semibold">
              View
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;