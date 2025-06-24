import { useState } from 'react';


export default function Sidebar() {
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);


  return (
    <div className="h-screen bg-gradient-to-b from-purple-950 to-blue-900 text-white w-64 fixed top-0 left-0 flex flex-col p-4 transition-all">
      <p className="text-4xl mb-4 text-gray-300 font-bold font-[Trebuchet_MS]">
        Night<span className="text-[#3f96e3]">Markt</span>
      </p>
      <ul className="space-y-4">
        <li>
            <button
            onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
            className="flex items-center justify-between w-full text-white hover:text-purple-800"
          >
            <span>Products</span>
            <svg
              className={`w-4 h-4 ml-2 transform transition-transform ${isProductDropdownOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
            {isProductDropdownOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                    <li><a href="/products" className="text-sm text-gray-300 hover:text-purple-800">View</a></li>
                    <li><a href="/products/add" className="text-sm text-gray-300 hover:text-purple-800">Add</a></li>
                    <li><a href="/products/edit" className="text-sm text-gray-300 hover:text-purple-800">Edit</a></li>
                    <li><a href="/products/delete" className="text-sm text-gray-300 hover:text-purple-800">Delete</a></li>
                </ul>
            )}  
        </li>
        <li><a href="#" className={`hover:text-purple-800`}>Orders</a></li>
        <li><a href="#" className={`hover:text-purple-800`}>Settings</a></li>
      </ul>
    </div>
  );
}
// This code defines a sidebar component with a dropdown for product management.