import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsManagement from "./pages/ProductsManagement";
import AddProduct from "./pages/ProductsPage";
import Sidebar from './components/Sidebar';



function App() {

  return (
    <div className="flex-1">
    <Sidebar />
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<ProductsManagement />} />
          <Route path="/products" element={<AddProduct />} />n
        </Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
