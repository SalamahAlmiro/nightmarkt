import { FaBars } from "react-icons/fa";

function Header({ onMenuClick }) {
  return (
    <header className="bg-gradient-to-r from-purple-950 to-blue-900 p-2 flex items-center overflow-hidden justify-between z-10">
      <div className="flex items-between gap-2">
          <p className="text-4xl text-gray-300 font-bold font-[Trebuchet_MS]">
            Night<span className="text-[#3f96e3]">Markt</span>
         </p>
        <button className="text-white text-2xl hover:cursor-pointer" onClick={onMenuClick}>
          <FaBars />
        </button>
      </div>
      <div className="flex-1 flex justify-end">
        <a href="/login" className="text-md text-gray-300 hover:text-purple-800 m-1">Login</a>
        <a href="/register" className="text-md text-gray-300 hover:text-purple-800 m-1">Register</a>
      </div>
    </header>
  );
}

export default Header;