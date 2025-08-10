import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductCards() {
  const [products, setProducts] = useState([]);
  const [flashSale, setFlashSale] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const [Explore, setExplore] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFlashSale(pickRandomItems(data.products, 5));
        setBestSelling(pickRandomItems(data.products, 5));
        setExplore(pickRandomItems(data.products, 10));
      });
  }, []);

  function pickRandomItems(array, count) {
    const result = [];
    const indexes = [];
    while (result.length < count && array.length > 0) {
      const i = Math.floor(Math.random() * array.length);
      if (!indexes.includes(i)) {
        indexes.push(i);
        result.push(array[i]);
      }
    }
    return result;
  }

  function CreateCardComponent({ arr }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {arr.map((ar) => (
          <div
            key={ar.id}
            className="border border-gray-300 rounded p-2 flex flex-col bg-white hover:shadow-md transition-shadow"
          >
            {/* Product Image */}
            <img
              className="bg-gray-200 h-40 w-full object-cover rounded"
              src={ar.thumbnail}
              alt={ar.title}
            />

            {/* Product Info */}
            <div className="flex flex-col flex-grow mt-2">
              <p className="text-sm font-bold text-black text-center">{ar.title}</p>
              <p className="text-red-600 text-sm text-center">${ar.price}</p>

              {/* Centered Rating & Quantity */}
              <div className="flex flex-col items-center mt-2 space-y-2">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm">{ar.rating}</span>
                  <span className="text-sm text-gray-500">({ar.stock})</span>
                </div>

                {/* Quantity */}
                <div className="flex items-center space-x-3">
                  <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span className="text-gray-700">1</span>
                  <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
              </div>

              {/* Discount Badge */}
              <p className="text-white text-xs bg-red-600 h-6 w-14 px-1 rounded-sm flex items-center justify-center mt-2 mx-auto">
                {ar.discountPercentage}%
              </p>

              {/* View Product Button at Bottom */}
              <div className="mt-auto pt-3">
                <Link
                  className="bg-red-600 px-2 py-1 text-white rounded-md text-xs block text-center hover:bg-red-700 transition"
                  to={`/View-Product/${ar.id}`}
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 sm:p-6 lg:p-10">
      {/* Flash Sales */}
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="h-6 w-2 bg-red-500"></span>
            <span className="text-red-500 font-bold">Todays</span>
          </div>
          <p className="font-bold text-lg">Flash Sales</p>
          <CreateCardComponent arr={flashSale} />
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <span className="h-6 w-2 bg-red-500"></span>
          <span className="text-red-500 font-bold">Categories</span>
        </div>
        <p className="font-bold text-lg mt-2">Browse By Category</p>
        <ul className="flex flex-wrap justify-center gap-4 mt-4">
          <li className="border text-gray-500 rounded-md h-24 w-24 flex flex-col items-center justify-center text-center">
            <i className="fa-solid fa-bag-shopping"></i>
            <p>Beauty</p>
          </li>
          <li className="border text-gray-500 rounded-md h-24 w-24 flex flex-col items-center justify-center text-center">
            <i className="fa-solid fa-bottle-droplet"></i>
            <p>Fragrance</p>
          </li>
          <li className="border text-gray-500 rounded-md h-24 w-24 flex flex-col items-center justify-center text-center">
            <i className="fa-solid fa-couch"></i>
            <p>Furniture</p>
          </li>
          <li className="border text-gray-500 rounded-md h-24 w-24 flex flex-col items-center justify-center text-center">
            <i className="fa-solid fa-carrot"></i>
            <p>Groceries</p>
          </li>
        </ul>
      </div>

      {/* Best Selling */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <span className="h-6 w-2 bg-red-500"></span>
          <span className="text-red-500 font-bold">This Month</span>
        </div>
        <p className="font-bold text-lg mt-2">Best Selling Products</p>
        <CreateCardComponent arr={bestSelling} />
      </div>

      {/* Explore Products */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <span className="h-6 w-2 bg-red-500"></span>
          <span className="text-red-500 font-bold">Our Products</span>
        </div>
        <p className="font-bold text-lg mt-2">Explore Our Products</p>
        <CreateCardComponent arr={Explore} />
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-700 transition">
            <Link to="/Allproducts">View All Products</Link>
          </button>
        </div>
      </div>

      {/* Pros */}
      <div className="my-8">
        <ul className="flex flex-wrap justify-center gap-5 text-center">
          <li className="flex flex-col items-center max-w-xs">
            <i className="fa-solid fa-van-shuttle h-14 w-14 border rounded-full p-2 py-5 text-white bg-black"></i>
            <p className="font-bold mt-2">FREE AND FAST DELIVERY</p>
            <p>Free delivery for all orders over $140</p>
          </li>
          <li className="flex flex-col items-center max-w-xs">
            <i className="fa-solid fa-headphones h-14 w-14 border rounded-full p-2 py-5 text-white bg-black"></i>
            <p className="font-bold mt-2">24/7 CUSTOMER SERVICE</p>
            <p>Friendly 24/7 Customer Support</p>
          </li>
          <li className="flex flex-col items-center max-w-xs">
            <i className="fa-solid fa-bolt h-14 w-14 border rounded-full p-2 py-5 text-white bg-black"></i>
            <p className="font-bold mt-2">MONEY BACK GUARANTEE</p>
            <p>We return money within 30 days</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCards;
