import { useState } from "react";
import loginimage from "../assets/loginimage.jpg";
import google from "../assets/google.webp";
import Footer from "./Footer";
import Header from "./Header";

function Signup({ cart }) {
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    if (username && emailOrPhone && password) {
      alert(`Account created for ${username}`);
    } else {
      alert("Please fill in all fields");
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
          <img
            src={loginimage}
            alt="Signup visual"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* form */}
        <div className="w-80 flex flex-col justify-center items-center border border-gray-300 px-6 py-8 rounded-md shadow-sm">
          <h1 className="text-xl font-normal">Create an account</h1>
          <p className="text-sm font-thin pt-2">Enter your details below</p>

          <form onSubmit={handleSignup} className="pt-10 w-full">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-sm text-gray-700 border-b border-gray-700 w-full p-2 focus:outline-none"
            />
            <br />
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="text-sm text-gray-700 border-b border-gray-700 w-full p-2 focus:outline-none mt-4"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm text-gray-700 border-b border-gray-700 w-full p-2 focus:outline-none mt-4"
            />

            <div className="flex flex-col gap-4 py-8">
              <button
                type="submit"
                className="text-sm bg-red-500 text-white text-center py-2 px-4 rounded-md hover:bg-red-600"
              >
                Create Account
              </button>

              <button
                type="button"
                className="text-sm flex justify-center items-center gap-2 border border-gray-600 rounded-sm p-2 hover:bg-gray-100"
              >
                <img src={google} alt="Google" className="w-6 h-6" />
                Sign Up With Google
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Signup;
