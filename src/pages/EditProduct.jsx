import React, {useState, useEffect} from "react";
import ProductList from "../features/products/components/ProductList.jsx";
import io from "socket.io-client";
import { getAllProducts,  editProduct } from "../features/products/API/ProductAPI.js";
import { clearInputs } from "../utils/clearProductInputs.js";  
import '../index.css';

const socket = io("http://localhost:5001");

function EditProduct() {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
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

        socket.on("product_updated", (updatedProduct) => {
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === updatedProduct.id ? updatedProduct : product
                )
            );
        });

        return () => {
            socket.off("product_updated");
        };
    }, []);

    const handleEditProduct = async (e) => {
        e.preventDefault();
        try {
            const updatedProduct = {
                id: Number(id),
                name,
                description,
                price: parseFloat(price)
            };
            const response = await editProduct(updatedProduct);
            console.log(response);
            clearInputs(setName, setDescription, setPrice, setId);
        } catch(err) {
            console.error("Error editing product", err);
        }
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-start px-2 py-5">
            <section className=" bg-white/10 backdrop-blur-md p-6 rounded w-full h-157">
            
            </section>
        </div>
    );      
}

export default EditProduct;