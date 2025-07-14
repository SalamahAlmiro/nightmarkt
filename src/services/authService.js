import api from "./axiosConfig";

const registerUser = async ({ username, email, password }) => {
  try { 
    const res = await api.post("/auth/register", { username, email, password });
    console.log(res.status);
    return res.data;
    } catch(err) {
      throw err;
    }
};

const loginUser = async ({ email, password }) => {
  try { 
    const res = await api.post("/auth/login", { email, password });
    console.log(res.status);
    return res.data;
    } catch(err) {
      throw err;
    }
};

export { registerUser, loginUser };