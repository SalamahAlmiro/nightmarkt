import { useState } from "react";
import { loginUser} from "../services/authService";
import { useAuth } from "../context/AuthContext";



const LoginPage = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });
      const { user, token } = res;
      login(token, user);
      setMessage("Logged in Successfully.")
    } catch(err) {
      const errorMessage = err.response?.data?.message || "Unexpected error occurred";
      setMessage(errorMessage);
    }
  };

  return (
    <div className="overflow-hidden p-2 w-full h-full grid justify-items-center">
      <section 
        className="bg-white/10 backdrop-blur-sm shadow-2xl 
        lg:w-[25vw] sm:w-[100vw] h-auto 
        m-10 rounded-xl overflow-hidden 
        flex flex-col items-center"
      >
        <div 
          className="bg-gradient-to-b from-purple-950 to-blue-950 
          w-full pt-5 h-[60%] 
          flex justify-center"
        >
          <h1 className="text-gray-200 mb-5 text-3xl"> Log In </h1>
        </div>
        <div className="m-2 p-3 flex flex-col items-start">
          <p className="text-gray-300 text-lg">Email</p>
          <input 
            className="h-10 w-75 sm:w-82 pl-2 bg-white/50 rounded 
            hover:bg-white/80 hover:shadow-lg hover:shadow-purple-500/40 
            focus:outline-none focus:ring-2 focus:ring-purple-800 transition focus:shadow-lg focus:shadow-purple-500 focus:bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="m-2 p-3 flex flex-col items-start">
          <p className="text-gray-300 text-lg">Password</p>
          <input 
            className="h-10 w-75 sm:w-82 pl-2 bg-white/50 rounded 
            hover:bg-white/80 hover:shadow-lg hover:shadow-purple-500/40 
            focus:outline-none focus:ring-2 focus:ring-purple-800 transition focus:shadow-lg focus:shadow-purple-500 focus:bg-white" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button 
          className="rounded text-lg font-semibold tracking-wide text-white outline-2 outline-blue-800 bg-black/50 py-1 px-4 m-5 
          hover:bg-black/80  hover:cursor-pointer hover:shadow-lg hover:shadow-purple-500/40 
          focus:outline-none focus:ring-2 focus:ring-purple-900 transition focus:shadow-lg focus:shadow-purple-500 focus:bg-black 
          active:scale-98 transition-transform duration-200"
          onClick={handleLogin}
        >
          Sign in
        </button>
        {message && (
          <p 
          className={`m-5 text-sm mt-2 text-center 
            ${message.includes("Successfully.") ? "text-green-400" : "text-red-400"}`}
          >
            {message}
          </p>
        )}
      </section>
    </div>
  );
}
export default LoginPage;