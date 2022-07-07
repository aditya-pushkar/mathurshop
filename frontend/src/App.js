import { Routes, Route } from "react-router-dom";

import Headers from "./pages/Headers";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Flowers from "./pages/Flowers";
import Bouquet from "./pages/Bouquet";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UpdateSocials from "./subComponent/dashboardHeader/UpdateSocials";
import CreateProduct from "./subComponent/dashboardHeader/CreateProduct";

function App() {
  return (
    <div className="App">
    <Headers />
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/flowers" element={<Flowers />} />
      <Route path="/bouquets" element={<Bouquet/>} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/update-socials" element={<UpdateSocials/>} />
      <Route path="/dashboard/create-product/:productId" element={<CreateProduct/>} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
