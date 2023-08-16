import Header from "./Header";
import Home from "./pages/Home/Home";
import Product from "./pages/product/Product";
import NotFound from "./pages/not found/NotFound";
import SearchResults from "./pages/search results/SearchResults";
import Footer from "./pages/footer/Footer";
import Loading from "./components/loading/Loading";
import Cart from "./pages/cart/Cart";

import { Route, Routes } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

export const FetchedDataContext = createContext(null);

function App() {
  const API_URL = "https://fakestoreapi.com/products";

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

  // for search functionality
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  const handleSearch = (e) => {
    const searchVal = e.target.value;
    setSearch(searchVal);

    const matchedResults = productsData.filter((result) =>
      result.title.toLowerCase().includes(searchVal.toLowerCase())
    );
    setSearchList(matchedResults);
  };

  // for cart functionality
  const [cartProducts, setCartProducts] = useState([]);

  const sendProductToCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cartProducts.some(
      (cartProduct) => cartProduct.id === product.id
    );

    // If the product is not already in the cart, add it
    if (!isProductInCart) {
      setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
    }
  };

  return (
    <main className="max-w-screen min-h-screen overflow-x-hidden">
      <Header />

      {productsData.length > 0 ? (
        <FetchedDataContext.Provider
          value={{
            productsData,
            setProductsData,
            search,
            setSearch,
            searchList,
            handleSearch,
            fetchData,
            API_URL,
            cartProducts,
            setCartProducts,
            sendProductToCart,
          }}
        >
          {/* Your Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/results" element={<SearchResults />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FetchedDataContext.Provider>
      ) : (
        // <p className="text-3xl text-center mt-28">Loading...</p>
        <Loading />
      )}

      <Footer />
    </main>
  );
}

export default App;
