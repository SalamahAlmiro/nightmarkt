import React, {useState, useEffect} from "react";
import ProductList from "../features/products/ProductList.jsx";
import io from "socket.io-client";
import { getAllProducts, deleteProduct } from "../features/products/ProductAPI.js";
import { clearInputs } from "../utils/clearProductInputs.js";  
import '../index.css';

const socket = io("http://localhost:5001");

function DeleteProduct() {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState("");
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getAllProducts();
                setProducts(productsData);
            } catch (err) {
                console.error("Failed to fetch products", err);
            }
        };
        fetchProducts();

        socket.on("product_deleted", (deletedProduct) => {
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id !== deletedProduct.id)
            );
        });

        return () => {
            socket.off("product_deleted");
        };
    }, []);

    const handleDeleteProduct = async (e) => {
        e.preventDefault();
        try {
            const deletedProduct = {
                id: Number(id) 
            };
            const response= await deleteProduct(deletedProduct);
            console.log(response);
            clearInputs( setId );
        } catch (err) {
            console.error("Error deleting product: ", err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start px-6 py-12">
            <section className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg mb-10">
            <h2 className="text-2xl font-semibold mb-6">Delete product</h2>
            <form onSubmit={handleDeleteProduct} className="flex flex-col gap-4">
                <input type="number" 
                    step="1"
                    placeholder="ID" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                />                
                <button type="submit">Delete product</button>
            </form>
            </section>
        </div>
    );
}

export default DeleteProduct;