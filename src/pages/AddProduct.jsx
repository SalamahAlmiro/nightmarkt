import React, {useState, useEffect} from "react";
import io from "socket.io-client";
import { createProduct } from "../features/products/API/ProductAPI.js";
import '../index.css';
import ProductCatInput from "../features/products/components/ProductCatInput.jsx";

const socket = io("http://localhost:5001");

function AddProduct() {
    const storedUser = localStorage.getItem("user");
    const user = JSON.parse(storedUser);
    const userId = user?.id;

    const [isImageValid, setIsImageValid] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        socket.on("product_created", (product) => {
            console.log(product);
        });

        return () => {
            socket.off("product_created");
        };
    }, []);

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        
        if (
            !name.trim() ||
            !description.trim() ||
            !price ||
            parseFloat(price) <= 0 ||
            !category ||
            !imageUrl.trim()
        ) {
            setMessage("Invalid fields, please fill everything first");
            setTimeout(() => { setMessage(""); }, 10000);
            return;
        }

        setIsSubmitting(true);

        try {
            const newProduct = {
                name,
                price: parseFloat(price),
                description,
                category,
                image_url : imageUrl,
                user_id: parseInt(userId),
            };
            await createProduct(newProduct);
        } catch (err) {
            console.error("Error creating product:", err);
            setMessage(err.response?.data?.message);
            return;
        } finally {
            setIsSubmitting(false);
            setTimeout(() => { setMessage(""); }, 20000);
        }

    };

    return (
        <div className="h-[calc(100vh-3.5rem)] w-full overflow-hidden p-4 flex flex-rows items-center justify-center">
            <section className="h-auto md:w-[90%] w-auto bg-black/60 rounded-md flex flex-col items-start p-6">
                <form className="flex flex-col justify-between flex-grow w-full" onSubmit={handleCreateProduct}>
                    <div className="md:flex-grow grid [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))] gap-4">
                        <div className="flex flex-col items-start">
                            <label htmlFor="name" className="text-gray-300 text-lg">Product Name</label>
                            <input 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                className="w-full h-[2.5rem] pl-2 bg-white/50 rounded 
                                hover:bg-white/80 hover:shadow-lg hover:shadow-purple-500/40 
                                focus:outline-none focus:ring-2 focus:ring-purple-800 transition focus:shadow-lg focus:shadow-purple-500 focus:bg-white"
                            />
                        </div> 
                        <div className="flex flex-col items-start">
                            <label htmlFor="price" className="text-gray-300 text-lg">Price</label>
                            <input 
                                type="number"
                                step="0.01"
                                min="0"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                id="price"
                                className="w-full h-[2.5rem] pl-2 bg-white/50 rounded 
                                hover:bg-white/80 hover:shadow-lg hover:shadow-purple-500/40 
                                focus:outline-none focus:ring-2 focus:ring-purple-800 transition focus:shadow-lg focus:shadow-purple-500 
                                focus:bg-white"
                            />
                        </div>
                        <ProductCatInput 
                            value={category}
                            onChange={setCategory}
                        />
                        <div className="flex flex-col md:col-span-2 items-start">
                            <label htmlFor="description" className="text-gray-300 text-lg">Description</label>
                            <input 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                id="description"
                                className="w-full h-[2.5rem] pl-2 bg-white/50 rounded 
                                hover:bg-white/80 hover:shadow-lg hover:shadow-purple-500/40 
                                focus:outline-none focus:ring-2 focus:ring-purple-800 transition focus:shadow-lg focus:shadow-purple-500
                                focus:bg-white"
                            />
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="url" className="text-gray-300 text-lg">Image URL</label>
                            <input 
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                id="url"
                                className="w-full h-[2.5rem] pl-2 bg-white/50 rounded 
                                hover:bg-white/80 hover:shadow-lg hover:shadow-purple-500/40 
                                focus:outline-none focus:ring-2 focus:ring-purple-800 transition focus:shadow-lg focus:shadow-purple-500 
                                focus:bg-white"
                            />
                        </div>
                                             
                    </div>
                    {imageUrl && (
                        <div className="flex justify-center mt-6">
                            <img 
                                onLoad={() => setIsImageValid(true)}
                                onError={() => setIsImageValid(false)}
                                src={imageUrl} 
                                alt={imageUrl ? `Preview of product image` : "No image available"}
                                className="max-h-48 rounded-md border border-1 border-gray-300 shadow-lg"/>
                        </div>
                    )}
                    <div className="flex justify-center mt-6">
                        <button 
                            aria-label="List your product"
                            aria-disabled={isSubmitting || !isImageValid}
                            disabled={isSubmitting || !isImageValid}
                            className={`h-[2.25rem] w-[10rem] rounded text-lg font-semibold tracking-wide text-white outline-2 outline-blue-800 
                            bg-black/50 py-1 px-4 m-6 
                            hover:bg-black/80  hover:cursor-pointer hover:shadow-lg hover:shadow-purple-500/40 
                            focus:outline-none focus:ring-2 focus:ring-purple-900 transition focus:shadow-lg focus:shadow-purple-500 focus:bg-black 
                            active:scale-98 transition-transform duration-200`}
                            type="submit"
                        >
                            {isSubmitting ? "Listing..." : isImageValid ? "List Product" : "Bad URL"}
                        </button>
                    </div>
                    <div className="flex justify-center">
                    {message && (
                            <p 
                            className="text-sm mt-2 text-center text-red-300">
                                {message}
                            </p>
                        )}
                </div>
                </form>
            </section>
        </div>
    );
}

export default AddProduct;