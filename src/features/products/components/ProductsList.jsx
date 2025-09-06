import React from "react";
import { FixedSizeGrid as Grid } from "react-window";
import ProductCard from "./ProductCard";

function ProductsList({ products }) {
  const CARD_WIDTH = 225;
  const CARD_HEIGHT = 400;
  const GAP = 20;
  const COLUMN_COUNT = 6; // fixed number for now
  const rowCount = Math.ceil(products.length / COLUMN_COUNT);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid
        columnCount={COLUMN_COUNT}
        columnWidth={CARD_WIDTH + GAP}
        height={600}
        rowCount={rowCount}
        rowHeight={CARD_HEIGHT + GAP}
        width={(CARD_WIDTH + GAP) * COLUMN_COUNT}
      >
        {({ columnIndex, rowIndex, style }) => {
          const productIndex = rowIndex * COLUMN_COUNT + columnIndex;
          if (productIndex >= products.length) return null;

          const product = products[productIndex];
          return (
            <div
              style={{
                ...style,
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                paddingTop : 5
            }}
            >
              <ProductCard product={product} cardWidth={CARD_WIDTH} />
            </div>
          );
        }}
      </Grid>
    </div>
  );
}

export default ProductsList;