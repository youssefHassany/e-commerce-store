import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home/Home";
import Product from "./pages/product/Product";
import { useState, useEffect, createContext } from "react";
import NotFound from "./pages/not found/NotFound";

export const FetchedDataContext = createContext(null);

function App() {
  const API_URL = "http://localhost:3500/products";

  const [productsData, setProductsData] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProductsData(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(API_URL);
  }, []);

  return (
    <main className="max-w-screen min-h-screen overflow-x-hidden">
      <Header />

      <FetchedDataContext.Provider value={productsData}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FetchedDataContext.Provider>
    </main>
  );
}

export default App;
