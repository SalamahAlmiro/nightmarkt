import React, {useState, useEffect} from "react";
import ProductList from "../features/products/components/ProductList.jsx";
import io from "socket.io-client";
import { getAllProducts, deleteProduct } from "../features/products/API/ProductAPI.js";
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
        <div className="min-h-screen flex flex-col items-center justify-start px-2 py-5">
            <section className=" bg-white/10 backdrop-blur-md p-6 rounded w-full h-157">
            
            </section>
        </div>
    );
}

export default DeleteProduct;