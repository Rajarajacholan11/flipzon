import { useState } from "react";
import loginimage from "../assets/loginimage.jpg";
import Footer from "./Footer";
import Header from "./Header";

function Login({ cart }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (user && password) {
      alert(`Logged in as ${user}`);
    } else {
      alert("Please fill in both fields");
    }
  }

  return (
    <div>
      {/* header */}
      <Header count={cart.length} />

      {/* content */}
      <div className="flex flex-col md:flex-row justify-center items-center my-16 gap-8">
        {/* image */}
        <div className="w-96">
          <img src={loginimage} alt="login" className="w-full h-auto rounded-md" />
        </div>

        {/* form */}
        <div className="w-80 flex flex-col justify-center items-center border border-gray-300 px-6 py-8 rounded-md shadow-sm">
          <h1 className="text-xl font-normal">Log in to Exclusive</h1>
          <p className="text-sm font-thin pt-2">Enter your details below</p>

          <form onSubmit={handleLogin} className="pt-10 w-full">
            <input
              type="text"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="text-sm text-gray-700 border-b border-gray-700 w-full p-2 focus:outline-none"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm text-gray-700 border-b border-gray-700 w-full p-2 mt-4 focus:outline-none"
            />

            <div className="flex justify-between items-center py-8">
              <button
                type="submit"
                className="text-base bg-red-500 text-white text-center py-2 px-4 rounded-md hover:bg-red-600"
              >
                Log In
              </button>

              <p className="text-base text-red-500 cursor-pointer hover:underline">
                Forgot Password?
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Login;
