import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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

function ViewProduct({ cart, setCart }) {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [flashSale, setFlashSale] = useState([]);
  const [count, setCount] = useState(1);

  function CreateCardComponent({ arr }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
        {arr.map((ar) => (
          <div
            key={ar.id}
            className="border border-gray-300 rounded p-2 flex flex-col"
          >
            {/* Product Image */}
            <img
              className="bg-gray-200 h-36 w-full object-cover rounded"
              src={ar.thumbnail}
              alt={ar.title}
            />

            {/* Discount */}
            <p className="text-white text-xs bg-red-600 h-6 w-14 px-1 rounded-sm flex items-center justify-center mt-1">
              {ar.discountPercentage}%
            </p>

            {/* Title & Price */}
            <p className="text-sm font-bold text-black mt-2">{ar.title}</p>
            <p className="text-red-600 text-sm">${ar.price}</p>

            {/* Rating & Stock Centered */}
            <div className="flex items-center justify-center gap-1 mt-1">
              <p className="text-sm">{ar.rating} ⭐</p>
              <p className="text-sm">{`(${ar.stock})`}</p>
            </div>

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
        ))}
      </div>
    );
  }

  const { id: productId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFlashSale(pickRandomItems(data.products, 5));
      });
  }, []);

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  function handleAddtoCart(productId) {
    let productDetail = products.filter((element) => element.id == productId);

    let isPresent = cart.some((ele) => ele.id == productId);

    if (isPresent) {
      let cartproductsupdatedarray = cart.map((ele) =>
        ele.id == productId
          ? { ...ele, quantity: ele.quantity + count }
          : ele
      );
      setCart(cartproductsupdatedarray);
    } else {
      setCart((prev) => [
        ...prev,
        {
          id: productId,
          imgSrc: `${productDetail[0].images}`,
          productName: `${productDetail[0].title}`,
          price: `${productDetail[0].price}`,
          quantity: count,
        },
      ]);
    }
    alert("cart added");
  }

  return (
    <div className="p-5">
      {/* Header */}
      <Header count={cart.length} />

      {/* Product Detail */}
      <div className="my-5">
        <div className="flex gap-5 p-5">
          {/* Product Image */}
          <img
            className="col-span-3 h-1/4 w-1/4 bg-gray-100"
            src={product.images}
            alt={product.title}
          />

          {/* Product Info */}
          <div>
            <p className="text-base font-bold">{product.title}</p>
            <p className="text-sm">{product.brand}</p>
            <p className="text-sm">
              {product.rating} ⭐ |{" "}
              <span className="pl-2 text-blue-400">
                {product.availabilityStatus}
              </span>
            </p>
            <p className="text-sm">${product.price}</p>
            <p className="text-sm">{product.description}</p>

            {/* Quantity & Buttons */}
            <div className="flex my-5 gap-2">
              <div className="flex justify-center w-18 h-10 my-auto border border-gray-300 rounded-sm">
                <p
                  className="text-xl w-8 text-center hover:bg-red-300 border-r border-gray-300"
                  onClick={() =>
                    setCount((prev) => (prev == 1 ? 1 : prev - 1))
                  }
                >
                  -
                </p>
                <p className="text-xl w-12 text-center border-r border-gray-300">
                  {count}
                </p>
                <p
                  className="text-xl w-8 text-center hover:bg-red-300"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  +
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <button
                  className="text-white bg-red-500 p-1 rounded-md"
                  onClick={() => handleAddtoCart(productId)}
                >
                  Add to Cart
                </button>
                <button className="border border-red-500 text-red-400 p-1 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="my-4">
              <ul className="grid grid-cols-1 gap-2">
                <li className="flex gap-5 border border-gray-200 rounded-sm w-1/2">
                  <i className="fa-solid fa-van-shuttle p-5"></i>
                  <div>
                    <p>Free Delivery</p>
                    <p className="text-sm">
                      Enter Your Postal Code for delivery availability
                    </p>
                  </div>
                </li>
                <li className="flex gap-5 border border-gray-200 rounded-sm w-1/2">
                  <i className="fa-solid fa-headphones p-5"></i>
                  <div>
                    <p>Return Delivery</p>
                    <p className="text-sm">
                      Free 30 Days Delivery returns
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <div className="flex flex-col">
          <div className="flex gap-3">
            <span className="h-6 w-2 bg-red-500"></span>
            <span className="text-red-500 font-bold">Todays</span>
          </div>
          <p className="text-left p-4 font-bold text-lg">Related products</p>
          <CreateCardComponent arr={flashSale} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ViewProduct;
