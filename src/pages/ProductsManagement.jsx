import React, {useState, useEffect} from "react";
import ProductList from "../features/products/ProductList";
import io from "socket.io-client";
import { getAllProducts, createProduct, deleteProduct, editProduct } from "../features/products/ProductAPI";
import { clearInputs } from "../utils/clearProductInputs.js";  
import '../index.css';

const socket = io("http://localhost:5001");

function ProductsManagement() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
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

        socket.on("product_created", (newProduct) => {
            setProducts((prevProducts) => [...prevProducts, newProduct]);
        });

        socket.on("product_updated", (updatedProduct) => {
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === updatedProduct.id ? updatedProduct : product
                )
            );
        });

        socket.on("product_deleted", (deletedProduct) => {
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id !== deletedProduct.id)
            );
        });

        return () => {
            socket.off("product_created");
            socket.off("product_updated");
            socket.off("product_deleted");
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
            clearInputs(setName, setDescription, setPrice, setId);
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
        <div className="min-h-screen flex flex-col items-center justify-start px-6 py-12">
            <h1 className="text-4xl font-bold text-night-purple mb-10">Manage Products</h1> 
            <section className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg mb-10">
            <ProductList products={products} />
            </section>
            <section className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg mb-10">
            <h2 className="text-2xl font-semibold mb-6">Add a product</h2>
            <form onSubmit={handleCreateProduct} className="flex flex-col gap-4">
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
                <button type="submit">Add product</button>
            </form>
            </section>
        </div>
    );
}

export default ProductsManagement;