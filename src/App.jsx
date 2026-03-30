import "./App.css";

import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import Login from "./landing_page/signup/Login.jsx";
import About from "./landing_page/about/About.jsx";
import ProductsPage from "./landing_page/products/ProductsPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Pricing from "./landing_page/pricing/Pricing.jsx";
import Footer from "./Footer.jsx";
import NotFound from "./NotFound.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
