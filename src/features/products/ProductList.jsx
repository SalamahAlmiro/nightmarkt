import React from "react";
import "../../index.css";
import { FixedSizeGrid as Grid } from "react-window";
import { useState } from "react";
import ProductCard from "../../components/productCard";
import { useMeasure } from '@react-hookz/web';



function ProductList({ products, containerWidth }) {
  /*const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");*/
  const GAP = 20;
  const idealCardWidth = 225;
  const COLUMN_COUNT = Math.min(Math.max(1, Math.floor(containerWidth / (idealCardWidth + GAP))), 5);
  const rowCount = Math.ceil(products.length / COLUMN_COUNT);
  //const CARD_WIDTH = getCardWidth(COLUMN_COUNT, containerWidth, GAP);
  const CARD_WIDTH = 225;
  const CARD_HEIGHT =  400;
  const flooredWidth = Math.floor(containerWidth / COLUMN_COUNT) * COLUMN_COUNT;

  const columnWidth = CARD_WIDTH + GAP;
  const rowHeight = CARD_HEIGHT + GAP;


  
  return (
    <div  className={`w-full flex justify-center pt-2`}>
      <Grid
        columnCount={COLUMN_COUNT}
        columnWidth={CARD_WIDTH + GAP}
        height={window.innerHeight - 80}
        rowCount={rowCount}
        rowHeight={CARD_HEIGHT + GAP}
        width= {flooredWidth}
      >
        {({ columnIndex, rowIndex, style }) => {
          const productIndex = rowIndex * COLUMN_COUNT + columnIndex;
          if (productIndex >= products.length) return null;

          const product = products[productIndex];
          return (
            <div
              key={product.id}
              style={{
                ...style,
                left: style.left + GAP / 2,
                top: style.top + GAP / 2,
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                boxSizing: "border-box",
              }}
            >
              <ProductCard product={product} />
            </div>
          );
        }}
      </Grid>
    </div>  
  );
}

export default ProductList;


/* <div className="grid place-items-stretch grid-cols-[45%_24%_29%_2%] w-[360px] h-60 grid-rows-[15%_35%_25%_20%] gap-1 p-2 bg-gray-800 rounded-lg overflow-hidden">
        <div className="rounded w-full h-35 row-span-2 p-2">
          <img
            src="https://image.made-in-china.com/202f0j00HzikFDcRYLog/OEM-14-Inch-2K-IPS-HD-Screen-Factory-Directly-Supply-Netbook-3-2-Near-Square-Display-Laptop.webp"
            alt="Product"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="text-white rounded content-center  col-start-2 col-span-2">Product name 20</div>
        <div className="text-gray-200 col-start-2 col-span-2 rounded  row-start-2 row-span-2 p-1 overflow-wrap wrap-anywhere overflow-hidden">
          description 142
        </div>
        <div className="text-white rounded col-start-2 col-span-2 p-1 pt-4 row-start-4 grid justify-items-end">
        <div className="flex items-center gap-2">
            <span className="text-sm text-green-400 font-medium">$19.99</span>
            <button className="hover:bg-blue-500 bg-green-500 px-3 py-1 rounded text-sm font-semibold">
              Buy now
            </button>
          </div>
        </div>
      </div> */