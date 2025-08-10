import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ count }) {
  const [Searchterm, SetSearchterm] = useState();

  return (
    <div className="w-full bg-white shadow-md ">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3">

        {/* Logo */}
        <div className="w-full sm:w-auto text-center lg:text-left">
          <h1 className="text-blue-800 font-extrabold text-xl font-mono">Flipzon</h1>
          <h3 className="text-gray-500 text-sm">
            Explore <span className="text-yellow-400">Plus</span>
          </h3>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex gap-6 text-gray-600">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="#" className="hover:text-blue-500">Contact</Link>
          <Link to="/SignUp" className="hover:text-blue-500">Signup</Link>
        </div>

        {/* Search */}
        <div className="w-full sm:w-2/3 lg:w-1/3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search for Products..."
            className="w-full bg-sky-50 p-2 font-normal rounded-sm text-sm"
            onChange={(e) => SetSearchterm(e.target.value)}
          />
          <i className="fa-brands fa-sistrix text-gray-500 text-lg" />
        </div>

        {/* Login & Cart */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end items-center gap-6 text-gray-600">
          <div className="flex items-center">
            <i className="fa-regular fa-user mr-1" />
            <Link to="/Login" className="hover:text-blue-500">Login</Link>
          </div>
          <div className="relative flex items-center">
            <i className="fa-solid fa-cart-shopping mr-1" />
            <Link to="/Cart" className="hover:text-blue-500">Cart</Link>
            {count ? (
              <span className="bg-red-500 h-5 w-5 rounded-full flex items-center justify-center text-xs text-white absolute -top-2 left-4">
                {count}
              </span>
            ) : null}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
