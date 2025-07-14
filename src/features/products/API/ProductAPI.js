import api from "../../../services/axiosConfig";

const getAllProducts = async () => {
    const response = await api.get("/products")
    return response.data;
};

const createProduct = async (newProduct) => {
    const response = await api.post("/products", newProduct);
    return response.data;
};

const deleteProduct = async (deletedProduct) => {
    const response = await api.delete("/products", {
        data: deletedProduct
    });
    return response.data;
};

const editProduct = async (updatedProduct) => {
    const response = await api.put("/products", updatedProduct);
    return response.data;
};

export { getAllProducts, createProduct, deleteProduct, editProduct };