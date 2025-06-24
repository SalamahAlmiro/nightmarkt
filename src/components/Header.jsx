import { FaBars } from "react-icons/fa";

function Header({ onMenuClick }) {
  return (
    <header className="bg-gradient-to-r from-purple-950 to-blue-900 p-2 flex items-center justify-between z-10">
        <div className="flex items-between gap-2">
            <p className="text-4xl text-gray-300 font-bold font-[Trebuchet_MS]">
                Night<span className="text-[#3f96e3]">Markt</span>
            </p>
            <button className="text-white text-2xl" onClick={onMenuClick}>
                <FaBars />
            </button>
        </div>
      <input id="search" placeholder="Search..." className="rounded-md bg-white pl-2"></input>
    </header>
  );
}

export default Header;