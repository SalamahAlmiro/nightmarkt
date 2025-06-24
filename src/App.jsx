import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewProduct from "./pages/ProductsPage";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useState } from 'react'; 


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
  <Router>
    <div className="min-h-screen w-screen overflow-auto">
        <Header onMenuClick={toggleSidebar} />
      {isSidebarOpen && (
        <aside 
          className={`fixed inset-0 z-20 bg-black/35`}
          onClick={toggleSidebar}
        >   
          <div 
            className="w-64 inset-0 bg-transparent"
            onClick={(e) => e.stopPropagation()}> 
            <Sidebar/>
          </div>
        </aside>
      )}

      <main className="m-1 min-h-0">
        <Routes>
          <Route>
            <Route path="/products" element={<ViewProduct />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/edit" element={<EditProduct />} />
            <Route path="/products/delete" element={<DeleteProduct />} />
          </Route>
        </Routes>
      </main>
    </div>
  </Router>  
  )
}

export default App