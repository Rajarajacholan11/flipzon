import { useEffect, useState } from "react";
import cosmetics from "../assets/cosmetics.jpg";
import fragnance from "../assets/fragnance.jpg";
import veggies from "../assets/veggies.jpg";

function SlideShow() {
  const [current, setCurrent] = useState(0);
  const images = [cosmetics, fragnance, veggies];

  useEffect(() => {
    const intervalid = setInterval(() => {
      moveNext();
    }, 3000);
    return () => clearInterval(intervalid);
  }, []);

  function moveNext() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  function movePrev() {
    setCurrent((prev) => ((prev - 1 + images.length) % images.length));
  }

  return (
    <>
      <div className="mt-4 px-4">
        <div className="flex justify-center w-full">
         
         <img
  className="w-full md:w-4/5 lg:w-full h-48 sm:h-64 md:h-80 lg:h-[32rem] object-cover rounded-md transition-all duration-500"
  src={images[current]}
  alt="slide"
/>

        </div>
      </div>
    </>
  );
}

export default SlideShow;
