import Footer from "./Footer";
import Header from "./Header";
import businesswomanposing from "../assets/businesswomanposing.jpg";
import girlshopping from "../assets/girlshopping.jpg";
import successfulbusinessman from "../assets/successfulbusinessman.jpg";
import { CiShop, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { Link } from "react-router-dom";

function About({ cart }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      {/* Header */}
      <Header count={cart.length} />

      {/* Breadcrumb */}
      <div className="my-4">
        <ul className="flex gap-2 text-gray-700 text-sm sm:text-base">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>/</li>
          <li>Cart</li>
        </ul>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center my-8">
        {/* Text */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="font-normal text-2xl sm:text-3xl mb-2">Our Story</h1>
          <p className="font-thin text-sm sm:text-base leading-relaxed">
            At Flipzon, we started with a simple idea — to make online shopping
            easier, faster, and more reliable for everyone. What began as a
            small passion project has grown into a trusted marketplace where
            quality meets affordability. From electronics to everyday
            essentials, we bring you a wide range of products right at your
            fingertips. Our mission? To flip the way you shop — smart, secure,
            and satisfying.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={girlshopping}
            alt="shopping"
            className="w-full max-w-sm rounded-sm object-cover"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center bg-red-600 text-white p-4 rounded-md">
          <div className="bg-red-500 rounded-full p-2 mb-2">
            <CiShop size={48} />
          </div>
          <p className="font-bold text-lg">10.5k</p>
          <p className="text-sm text-center">Sellers active on our site</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center border border-gray-300 p-4 rounded-md">
          <div className="bg-black text-white rounded-full p-2 mb-2">
            <HiOutlineCurrencyRupee size={48} />
          </div>
          <p className="font-bold text-lg">33k</p>
          <p className="text-sm text-center">Monthly product sales</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center bg-red-600 text-white p-4 rounded-md">
          <div className="bg-red-500 rounded-full p-2 mb-2">
            <IoBagHandleOutline size={48} />
          </div>
          <p className="font-bold text-lg">45.5k</p>
          <p className="text-sm text-center">
            Customers active on our site
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center justify-center border border-gray-300 p-4 rounded-md">
          <div className="bg-black text-white rounded-full p-2 mb-2">
            <TbMoneybag size={48} />
          </div>
          <p className="font-bold text-lg">25k</p>
          <p className="text-sm text-center">
            Annual gross sales on our site
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-12 justify-items-center">
        {/* Member 1 */}
        <div className="border border-gray-200 p-4 rounded-md text-center w-full max-w-xs">
          <img
            src={successfulbusinessman}
            alt="CEO"
            className="h-56 w-48 object-cover mx-auto"
          />
          <p className="mt-2 font-semibold">Josh Steve</p>
          <p className="text-xs text-gray-500">Founder</p>
          <div className="flex justify-center gap-3 mt-2">
            <CiInstagram />
            <CiTwitter />
            <CiLinkedin />
          </div>
        </div>

        {/* Member 2 */}
        <div className="border border-gray-200 p-4 rounded-md text-center w-full max-w-xs">
          <img
            src={businesswomanposing}
            alt="Manager"
            className="h-56 w-48 object-cover mx-auto"
          />
          <p className="mt-2 font-semibold">Sara</p>
          <p className="text-xs text-gray-500">Manager</p>
          <div className="flex justify-center gap-3 mt-2">
            <CiInstagram />
            <CiTwitter />
            <CiLinkedin />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
