import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewProduct from "./pages/ProductsPage";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
import Sidebar from './components/Sidebar';



function App() {

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-20 z-1 bg-gradiant from-purple-900 to-blue-900 text-white h-screen">   
        <Sidebar />
      </aside>
      <div className="flex-1 overflow-auto">
        <main className="min-h-full">
          <Router>
            <Routes>
              <Route>
                <Route path="/products" element={<ViewProduct />} />
                <Route path="/products/add" element={<AddProduct />} />
                <Route path="/products/edit" element={<EditProduct />} />
                <Route path="/products/delete" element={<DeleteProduct />} />
              </Route>
            </Routes>
          </Router>
        </main>
      </div>
    </div>
  )
}

export default App
