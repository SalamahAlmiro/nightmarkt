import { useState } from 'react';
import { FaBars } from "react-icons/fa";


export default function Sidebar() {
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div className="h-screen {isExpanded ? 'w-64' : 'w-20'} bg-gradient-to-b from-purple-950 to-blue-900 text-white fixed top-0 left-0 flex flex-col p-4 transition-all">
      <button onClick={() => setIsExpanded(!isExpanded)} className="mb-4 place-self-end text-left text-gray-400 hover:text-white">
        <FaBars />
      </button>
      <span className={`text-[40px] font-bold mb-6 text-gray-400 ${isExpanded ? 'inline' : 'hidden'}`}>
        Nightmarkt
      </span>
      <ul className="space-y-4">
        <li>
            <button
            onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
            className="flex items-center justify-between w-full text-white hover:text-purple-800"
          >
            <span className={`${isExpanded ? 'inline' : 'hidden'}`}>Products</span>
            <svg
              className={`w-4 h-4 ml-2 ${isExpanded ? 'inline' : 'hidden'} transform transition-transform ${isProductDropdownOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
            {isProductDropdownOpen  && isExpanded && (
                <ul className="ml-4 mt-2 space-y-2">
                    <li><a href="/products" className="text-sm text-gray-300 hover:text-purple-800">View</a></li>
                    <li><a href="/products/add" className="text-sm text-gray-300 hover:text-purple-800">Add</a></li>
                    <li><a href="/products/edit" className="text-sm text-gray-300 hover:text-purple-800">Edit</a></li>
                    <li><a href="/products/delete" className="text-sm text-gray-300 hover:text-purple-800">Delete</a></li>
                </ul>
            )}  
        </li>
        <li><a href="#" className={`hover:text-purple-800 ${isExpanded ? '' : 'hidden'}`}>Orders</a></li>
        <li><a href="#" className={`hover:text-purple-800 ${isExpanded ? '' : 'hidden'}`}>Settings</a></li>
      </ul>
    </div>
  );
}
// This code defines a sidebar component with a dropdown for product management.