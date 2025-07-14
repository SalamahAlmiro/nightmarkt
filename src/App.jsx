import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ViewProduct, AddProduct, EditProduct, DeleteProduct, LoginPage, RegisterPage } from './pages';
import { Sidebar, Header } from "./components";
import { useState } from 'react'; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);
  const [animateSidebar, setAnimateSidebar] = useState(false);

  const toggleSidebar = () => {
    if (!isSidebarOpen) {
      setShouldRenderSidebar(true);
      requestAnimationFrame(() => setAnimateSidebar(true));
      setIsSidebarOpen(true);
    } else {
      setAnimateSidebar(false);
      setIsSidebarOpen(false);
      setTimeout(() => setShouldRenderSidebar(false), 300);
    }
  };


  return (
  <Router>
    <div className="min-h-screen w-screen overflow-auto">
        <Header onMenuClick={toggleSidebar} />

        {shouldRenderSidebar && (
          <aside 
            className={`fixed inset-0 z-20 bg-black/35 transition-opacity duration-300 ease-in-out
              ${animateSidebar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={toggleSidebar}
          >   
            <div 
              className={`w-64 inset-0 h-full bg-zinc-900 transform transition-transform duration-300 ease-in-out 
                ${animateSidebar ? 'translate-x-0' : '-translate-x-full'}`}
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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage   />} />
          </Route>
        </Routes>
      </main>
    </div>
  </Router>  
  )
}

export default App