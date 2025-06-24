import React, { useState, useEffect }  from "react";
import "../../index.css";
import { FixedSizeGrid as Grid } from "react-window";
import ProductCard from "../../components/productCard";



function ProductList({ products, containerWidth }) {
  /*const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");*/
  const GAP = 27;
  const idealCardWidth = 225;
  const COLUMN_COUNT = Math.min(Math.max(1, Math.floor(containerWidth / (idealCardWidth + GAP))), 6);
  const rowCount = Math.ceil(products.length / COLUMN_COUNT);
  const CARD_WIDTH = 225;
  const CARD_HEIGHT =  400;
  const flooredWidth = Math.floor(containerWidth / COLUMN_COUNT) * COLUMN_COUNT;

  const [gridHeight, setGridHeight] = useState(0);

  useEffect(() => {
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const newHeight = window.innerHeight - headerHeight;
    console.log(window.innerHeight - headerHeight);
    setGridHeight(newHeight);
    const onResize = () => {
      const newHeight = window.innerHeight - (document.querySelector("header")?.offsetHeight || 0);
      setGridHeight(newHeight);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
  console.log("Updated gridHeight: ", gridHeight);
  }, [gridHeight]);
  
  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      {gridHeight > 0 && (
        <Grid
          columnCount={COLUMN_COUNT}
          columnWidth={CARD_WIDTH + GAP}
          height={gridHeight - 25}
          rowCount={rowCount}
          rowHeight={CARD_HEIGHT + GAP}
          width={flooredWidth}
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
      )}
    </div>  
  );
}

export default ProductList;


