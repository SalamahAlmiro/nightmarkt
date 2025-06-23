import React, {useState, useEffect} from "react";
import ProductList from "../features/products/ProductList.jsx";
import io from "socket.io-client";
import { getAllProducts,  editProduct } from "../features/products/ProductAPI.js";
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
        <div className="min-h-screen flex flex-col items-center justify-start px-6 py-12">
            <section className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg mb-10">
            <h2 className="text-2xl font-semibold mb-6">Edit product</h2>
            <form onSubmit={handleEditProduct} className="flex flex-col gap-4">
                <input type="number" 
                    step="1"
                    placeholder="ID" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                />
                <input type="text" 
                       placeholder="Name"
                       value={name}
                       onChange={(e) => setName(e.target.value)} 
                />
                <input type="text" 
                       placeholder="description"
                       value={description}
                       onChange={(e) => setDescription(e.target.value)} 
                />
                <input type="number" 
                       step=".01"
                       placeholder="Price" 
                       value={price} 
                       onChange={(e) => setPrice(e.target.value)} 
                />                
                <button type="submit">Edit product</button>
            </form>
            </section>
        </div>
    );      
}

export default EditProduct;