import React, { useState, useEffect }  from "react";
import "../../index.css";
import { FixedSizeGrid as Grid } from "react-window";
import ProductCard from "../../components/productCard";


function ProductList({ products, containerWidth }) {
  const isMobile = window.innerWidth < 768;
  const CARD_WIDTH = isMobile ? 300 : 225;
  const GAP = 27;
  const CARD_HEIGHT =  400;
  const COLUMN_COUNT = isMobile ? 1 : Math.min(Math.max(1, Math.floor(containerWidth / (CARD_WIDTH + GAP))), 6);
  const rowCount = Math.ceil(products.length / COLUMN_COUNT);
  const gridWidth = isMobile 
  ? CARD_WIDTH + GAP 
  : COLUMN_COUNT * (CARD_WIDTH + GAP);

  const [gridHeight, setGridHeight] = useState(0);

  useEffect(() => {
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const newHeight = window.innerHeight - headerHeight;
    setGridHeight(newHeight);
    const onResize = () => {
      const newHeight = window.innerHeight - (document.querySelector("header")?.offsetHeight || 0);
      setGridHeight(newHeight);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  
  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden flex justify-center ">
      {gridHeight > 0 && (
        <Grid
          columnCount={COLUMN_COUNT}
          columnWidth={CARD_WIDTH + GAP}
          height={gridHeight - 25}
          rowCount={rowCount}
          rowHeight={CARD_HEIGHT + GAP}
          width={gridWidth}
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
                  right: style.right + GAP / 2,
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  boxSizing: "border-box",
                }}
              >
                <ProductCard product={product} cardWidth={CARD_WIDTH} />
              </div>
            );
          }}
        </Grid>
      )}
    </div>  
  );
}

export default ProductList;


