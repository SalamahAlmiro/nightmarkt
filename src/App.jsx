import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ViewProduct, AddProduct, EditProduct, DeleteProduct, ErrorPage, RegisterPage, LoginPage, Logout } from './pages';
import { Header, Sidebar, Protected } from "./components";
import { useState } from "react"

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
      <main className="min-h-0">
        <Routes>
          <Route>
            <Route path="/home" element={"#"} /> //empty for now...
            <Route path="/products" element={
              <ViewProduct />
              } />
            <Route path="/products/add" element={
              <Protected>
                <AddProduct />
              </Protected>
              } />
            <Route path="/products/edit" element={
              <Protected>
                <EditProduct />
              </Protected>
            } />
            <Route path="/products/delete" element={
              <Protected>
                <DeleteProduct />
              </Protected>
            } />
            <Route path="*" element={
              <ErrorPage />
            } />
            <Route path="/register" element={
              <RegisterPage />
            } />
            <Route path="/login" element={
              <LoginPage />
            } />
            <Route path="/logout" element={
              <Protected>
                <Logout />
              </Protected>
            } />
          </Route>
        </Routes>
      </main>
    </div>
  </Router>  
  )
}

export default App

/* 

TO DO: 
1- add product feature, adding attributes and stuff for the product
2- filter products in the product page and a search function
3- view details page for products
4- my products page
5- my orders page 
6- user profile page
7- wishlist system maybe
8- cart.... 
9- token managment

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


*/