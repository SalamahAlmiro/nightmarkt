import { FaBars } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from 'react';
import "../index.css";


function Header({ onMenuClick }) {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const { isAuthenticated } = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    if (isUserDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserDropdownOpen]);

  return (
    <header className="bg-gradient-to-r from-gray-950 to-blue-900 p-2 flex items-center justify-between z-10">
      <div className="flex items-between gap-2">
          <a href="/" className="text-4xl text-gray-300 font-bold font-[Trebuchet_MS]">
            Night<span className="text-[#3f96e3]">Market</span>
         </a>
        <button className="text-white text-2xl hover:cursor-pointer" onClick={onMenuClick}>
          <FaBars />
        </button>
      </div>
      {!isAuthenticated && (
        <div className="flex-1 flex justify-end">
          <a href="/login" className="text-md text-gray-300 hover:text-black m-1">Login</a>
          <a href="/register" className="text-md text-gray-300 hover:text-black m-1">Register</a>
        </div>
      )}
      <div className="relative">
        {isAuthenticated && (
          <div className="flex justify-end">
            <div ref={dropdownRef} className="mr-2">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-end justify-between w-full text-white hover:text-black hover:cursor-pointer">
                <span className="text-xl"> {user.username} </span>
                <svg
                  className={`w-4 h-4 mb-1 ml-1 transform transition-transform ${isUserDropdownOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {isUserDropdownOpen && (
                <ul className="animate-fadeIn absolute right-0 mt-2 w-40 p-2 bg-black rounded-sm 
										           shadow-lg z-50">
                    <li>
											<a 
											href="#" 
											className="
												block px-4 py-2 text-sm text-gray-200 
												hover:bg-white/30 hover:text-white rounded-md 	 
												transition-colors">
											Account
											</a>
										</li>
                    <li>
											<a 
											href="#" 
											className="
												block px-4 py-2 text-sm text-gray-200 
												hover:bg-white/30 hover:text-white rounded-md 	 
												transition-colors">
											Wishlist
											</a>
										</li>
                    <li>
											<a 
											href="#" 
											className="
												block px-4 py-2 text-sm text-gray-200 
												hover:bg-white/30 hover:text-white rounded-md 	 
												transition-colors">
											My Orders
											</a>
										</li>
                    <li>
											<a 
											href="#" 
											className="
												block px-4 py-2 text-sm text-gray-200 
												hover:bg-white/30 hover:text-white rounded-md 	 
												transition-colors">
											My Listings
											</a>
										</li>
                    <li>
											<a 
											href="/logout" 
											className="
												block px-4 py-2 text-sm text-gray-200 
												hover:bg-white/30 hover:text-white rounded-md 	 
												transition-colors">
											Logout
											</a>
										</li>
                </ul>
              )}  
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;