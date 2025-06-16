import React, {useState, useEffect} from "react";
import ProductList from "../features/products/ProductList";
import { getAllProducts } from "../features/products/ProductAPI";





function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const products = await getAllProducts();
            setProducts(products);
          } catch (err) {
            console.error("Failed to fetch products", err);
          }
        };
      
        fetchProducts();
      }, []);
      
    return (
        <div className="p-6">
      
    </div>
    );
}



export default ProductsPage;


