import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home/Home";
import Product from "./pages/product/Product";

function App() {
  return (
    <main className="max-w-screen min-h-screen overflow-x-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Product />} />
      </Routes>
    </main>
  );
}

export default App;
