import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []); // dependecy array. when empty only runs once

  // .then is used by promises as it is async
  // fetch returns a promise as the request takes time
  // similarly .json() is also async i.e it takes time

  return (
    <>
      <link
        rel="icon"
        type="image/svg+xml"
        href="/home-favicon.png
      "
      />

      <title>Ecommerce Project</title>

      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
