import api from "../../../services/axiosConfig";

const getAllProducts = async () => {
    try {
        const response = await api.get("/products")
        return response.data;
    } catch(err) {
        throw err;
    }
};

const createProduct = async (newProduct) => {
    try{
        const response = await api.post("/products", newProduct);
        return response.data;
    } catch(err) {
        throw err;
    }
};

const deleteProduct = async (deletedProduct) => {
    try {
        const response = await api.delete("/products", {
            data: deletedProduct
        });
        return response.data;
    } catch(err) {
        throw err;
    }
};

const editProduct = async (updatedProduct) => {
    try{
        const response = await api.put("/products", updatedProduct);
        return response.data;
    } catch(err) {
        throw err;
    }
};

export { getAllProducts, createProduct, deleteProduct, editProduct };