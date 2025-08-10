import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

function Allproducts({ cart }) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data.products);
      });
  }, []);

  function CreateCardComponent({ arr }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
        {arr.map((ar) => (
          <div
            key={ar.id}
            className="flex flex-col items-center border border-gray-300 rounded p-2 h-72 w-56"
          >
            {/* Image + Discount */}
            <div className="relative w-full">
              <img
                className="bg-gray-200 h-36 w-full object-cover rounded"
                src={ar.thumbnail}
                alt={ar.title}
              />
              <p className="text-white text-xs bg-red-600 h-6 w-14 px-1 rounded-sm absolute top-2 left-2 flex items-center justify-center">
                {ar.discountPercentage}%
              </p>
            </div>

            {/* Title */}
            <p className="text-sm font-bold text-center mt-2 line-clamp-1">
              {ar.title}
            </p>

            {/* Price */}
            <p className="text-red-600 text-sm font-semibold">${ar.price}</p>

            {/* Rating & Stock */}
            <div className="flex justify-center gap-2 text-sm text-gray-700">
              <span>{ar.rating} ⭐</span>
              <span>({ar.stock})</span>
            </div>

            {/* View Product Button */}
            <div className="mt-auto">
              <Link
                className="bg-red-600 px-3 py-1 text-white rounded-md text-xs"
                to={`/View-Product/${ar.id}`}
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* header */}
      <Header count={cart.length} />

      {/* content */}
      <CreateCardComponent arr={products} />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Allproducts;
