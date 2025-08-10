import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

function CheckoutPage({ cart, setCart }) {
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function couponHandler() {
    if (coupon.trim()) {
      alert("Coupon applied successfully");
    } else {
      alert("Enter coupon code!");
    }
  }

  function orderHandler(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const streetAddress = document.getElementById("streetAddress").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (firstName && streetAddress && phone && email) {
      setCart([]);
      alert("Order placed successfully");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      alert("Fill all fields");
    }
  }

  function CartList() {
    return cart.map((element) => (
      <div key={element.productName} className="py-2 border-b border-gray-200">
        <ul className="flex justify-between items-center text-gray-700 text-sm">
          <li className="flex gap-2 items-center w-40">
            <img
              className="h-16 w-16 object-cover rounded"
              src={element.imgSrc}
              alt="product"
            />
            <p>{element.productName}</p>
          </li>
          <li className="w-20 text-center">{`$${(
            element.price * element.quantity
          ).toFixed(2)}`}</li>
        </ul>
      </div>
    ));
  }

  return (
    <div className="px-4 md:px-8">
      {/* Header */}
      <Header count={cart.length} />

      {/* Breadcrumb */}
      <div className="py-6 text-sm text-gray-500">
        <ul className="flex gap-2">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link to={"/Cart"}>Cart</Link>
          </li>
          <li>/</li>
          <li>Checkout</li>
        </ul>
      </div>

      {/* Main Checkout Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Billing Form */}
        <div className="flex-1 max-w-md">
          <h2 className="text-lg font-semibold mb-4">Billing Details</h2>
          <form className="flex flex-col gap-3">
            <label className="text-gray-600" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              className="h-9 border border-gray-300 bg-gray-100 rounded-sm px-2"
              type="text"
              required
            />

            <label className="text-gray-600" htmlFor="streetAddress">
              Street Address
            </label>
            <input
              id="streetAddress"
              className="h-9 border border-gray-300 bg-gray-100 rounded-sm px-2"
              type="text"
              required
            />

            <label className="text-gray-600" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              className="h-9 border border-gray-300 bg-gray-100 rounded-sm px-2"
              type="text"
              required
            />

            <label className="text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="h-9 border border-gray-300 bg-gray-100 rounded-sm px-2"
              type="email"
              required
            />
          </form>
        </div>

        {/* Cart Summary */}
        <div className="flex-1 max-w-md">
          {CartList()}

          {/* Totals */}
          <ul className="mt-4 text-sm text-gray-700">
            <li className="flex justify-between border-b py-1">
              <p>Subtotal</p>
              <p>${subTotal.toFixed(2)}</p>
            </li>
            <li className="flex justify-between border-b py-1">
              <p>Shipping</p>
              <p>Free</p>
            </li>
            <li className="flex justify-between border-b py-1 font-semibold">
              <p>Total</p>
              <p>${subTotal.toFixed(2)}</p>
            </li>
          </ul>

          {/* Payment Methods */}
          <div className="mt-4">
            <p className="font-medium mb-2">Payment Method</p>
            <label className="flex gap-3 items-center mb-2">
              <input type="radio" name="payment" />
              <div className="flex gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  alt="Visa"
                  className="h-6 w-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-6 w-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                  alt="Amex"
                  className="h-6 w-6"
                />
              </div>
            </label>

            <label className="flex gap-3 items-center">
              <input type="radio" name="payment" />
              <span>Cash on Delivery</span>
            </label>
          </div>

          {/* Coupon */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              className="flex-1 h-9 border border-gray-300 text-center rounded-sm text-sm"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button
              type="button"
              className="px-4 h-9 bg-red-500 text-white text-sm rounded-sm"
              onClick={couponHandler}
            >
              Apply
            </button>
          </div>

          {/* Place Order */}
          <div className="mt-4">
            <button
              className="w-full h-9 bg-red-500 text-white text-base rounded-sm"
              onClick={orderHandler}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default CheckoutPage;
