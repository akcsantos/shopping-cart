import { useState, useEffect } from "react";
import Card from "../components/Card";
import Embed from "react-embed";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products";

  function getProducts() {}

  useEffect(() => {
    fetch(url, { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  {
    /* <Embed url="https://cdn.lordicon.com/ceaxohpl.json" width={400} /> */
  }
  return (
    <div className="h-full w-screen flex-row justify-items-center tablet:flex tablet:flex-wrap tablet:place-content-center tablet:space-x-3">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  );
}
