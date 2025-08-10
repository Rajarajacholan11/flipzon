function Footer() {
  return (
    <>
      <div className="w-full bg-black flex justify-center px-4">
        <ul className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-6 lg:gap-12 text-white p-5 max-w-5xl justify-center w-full">
          <li className="flex flex-col gap-1">
            <p className="font-semibold">Exclusive</p>
            <p className="text-sm font-thin">Subscribe</p>
            <p className="text-sm font-thin">Get 10% off your first order</p>
          </li>

          <li className="flex flex-col gap-1">
            <p className="font-semibold">Support</p>
            <p className="text-sm font-thin">
              111, Bijoy Barani Dhaka
              <br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-sm font-thin">execlusive@gmail.com</p>
            <p className="text-sm font-thin">+88015-5575-8687</p>
          </li>

          <li className="flex flex-col gap-1">
            <p className="font-semibold">Account</p>
            <p className="text-sm font-thin">My Account</p>
            <p className="text-sm font-thin">Login/Register</p>
            <p className="text-sm font-thin">Cart</p>
            <p className="text-sm font-thin">Wishlist</p>
            <p className="text-sm font-thin">Shop</p>
          </li>

          <li className="flex flex-col gap-1">
            <p className="font-semibold">Quick Link</p>
            <p className="text-sm font-thin">Privacy Policy</p>
            <p className="text-sm font-thin">Terms of Use</p>
            <p className="text-sm font-thin">FAQ</p>
            <p className="text-sm font-thin">Contact</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
