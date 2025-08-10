import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  console.log(cart.length);

  let subTotal = 0;
  function cartList(cart) {
    return cart.map((element) => {
      subTotal = subTotal + element.price * element.quantity;

      return (
        <div key={element.id} className="w-full">
          <ul className="flex flex-col md:flex-row justify-evenly border border-gray-300 rounded-md p-4 items-center text-sm font-normal bg-white">
            {/* Product */}
            <li className="flex items-center gap-2 w-full md:w-32 justify-center md:justify-start">
              <img
                className="h-16 w-16 object-cover"
                src={`${element.imgSrc}`}
                alt="product image"
              />
              <span className="text-center md:text-left">{element.productName}</span>
            </li>

            {/* Price */}
            <li className="w-full md:w-32 text-center">{`$ ${element.price}`}</li>

            {/* Quantity */}
            <li className="w-full md:w-32 text-center">{element.quantity}</li>

            {/* Subtotal */}
            <li className="w-full md:w-32 text-center">{`$ ${
              element.price * element.quantity
            }`}</li>
          </ul>
        </div>
      );
    });
  }

  function cuponHandler(event) {
    if (event.target.value) {
      alert("Cupon applied successfully");
    } else {
      alert("Enter cupon Code!");
    }
  }

  return (
    <div className="m-4">
      <Header count={cart.length} />

      {/* Breadcrumb */}
      <ul className="flex gap-1 p-2 text-sm">
        <li className="text-gray-300 hover:text-black">
          <Link to={"/"}>Home</Link>
        </li>
        <li>/</li>
        <li>Cart</li>
      </ul>

      {/* Table header */}
      <div className="hidden md:block">
        <ul className="flex justify-evenly border border-gray-300 rounded-md h-12 items-center text-sm font-semibold bg-gray-100">
          <li className="w-32 text-center">Product</li>
          <li className="w-32 text-center">Price</li>
          <li className="w-32 text-center">Quantity</li>
          <li className="w-32 text-center">Subtotal</li>
        </ul>
      </div>

      {/* Cart items */}
      <div className="space-y-4">
        {cart.length > 0 ? (
          cartList(cart)
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-center mt-6">
              No Items In The Cart
            </h1>
          </div>
        )}
      </div>

      {/* Coupon & Total */}
      <div className="mt-5 mb-5 flex flex-col md:flex-row gap-6 md:justify-evenly p-4">
        {/* Coupon code */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            className="w-48 h-8 border border-gray-300 text-center rounded-sm text-sm"
            placeholder="Coupon Code"
          />
          <button
            className="w-28 h-8 bg-red-500 text-white text-sm rounded-sm"
            onClick={(e) => {
              cuponHandler(e);
            }}
          >
            Apply Coupon
          </button>
        </div>

        {/* Cart total */}
        <div className="border border-gray-300 w-full md:w-80 p-4">
          <p className="font-bold mb-4">Cart Total</p>
          <ul className="flex flex-col gap-3">
            <li className="flex justify-between text-sm border-b border-gray-300 pb-2">
              <p>Subtotal</p>
              <p>{`$ ${subTotal}`}</p>
            </li>
            <li className="flex justify-between text-sm border-b border-gray-300 pb-2">
              <p>Shipping</p>
              <p>Free</p>
            </li>
            <li className="flex justify-between text-sm">
              <p>Total:</p>
              <p>{`$ ${subTotal}`}</p>
            </li>
          </ul>

          <div className="flex justify-center mt-4">
            {cart.length ? (
              <button className="bg-red-500 text-white text-center py-2 px-4 rounded-sm">
                <Link to={`/CheckOutPage`}>Proceed to Checkout</Link>
              </button>
            ) : (
              <p>No Items Inside the Cart</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
