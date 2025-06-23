import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewProduct from "./pages/ProductsPage";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
import Sidebar from './components/Sidebar';



function App() {

  return (
  <Router>
    <div className="grid grid-rows-[6%_94%] h-full w-full">
      <header className="row-span-1 grid grid-cols-[20%_80%] z-0 bg-gradient-to-r from-purple-950 to-blue-900">
        
      </header>

      <aside className="w-0 mr-2 z-1 bg-gradiant from-purple-900 to-blue-900 text-white overflow-auto">   
        
      </aside>

      <main className="flex-1 pl-2 row-start-2 col-span-1">
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
