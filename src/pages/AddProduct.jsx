import React, {useState, useEffect} from "react";
import io from "socket.io-client";
import { createProduct } from "../features/products/API/ProductAPI.js";
import { clearInputs } from "../utils/clearProductInputs.js";  
import '../index.css';

const socket = io("http://localhost:5001");

function AddProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
useEffect(() => {
        socket.on("product_created", (newProduct) => {
            setProducts((prevProducts) => [...prevProducts, newProduct]);
        });
        return () => {
            socket.off("product_created");
        };
    }, []);

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        try {
            const newProduct = {
                name,
                description,
                price: parseFloat(price)
            };
            const response = await createProduct(newProduct);
            console.log(response);
            clearInputs(setName, setDescription, setPrice);
        } catch (err) {
        console.error("Error creating product:", err);
        }
    };

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

    const handleDeleteProduct = async (e) => {
        e.preventDefault();
        try {
            const deletedProduct = {
                id: Number(id) 
            };
            const response= await deleteProduct(deletedProduct);
            console.log(response);
            clearInputs(setName, setDescription, setPrice, setId);
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

export default AddProduct;