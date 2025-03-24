"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCursor } from "../context/CursorContext";

//images for hero section
const images = [
  "https://ik.imagekit.io/0xcqzy/good-food/Slice%20of%20fruit%20pie.jpg?updatedAt=1738333052015",
  "https://ik.imagekit.io/0xcqzy/good-food/egg%20with%20sliced%20tomato%20and%20....jpg?updatedAt=1738333052180",
];

export default function Hero() {
  const { setCursorColor } = useCursor();
  const [heroImg, setHeroImg] = useState(null);

  useEffect(() => {
    const randomNum = getRandomNumber(0, images.length - 1); //random number between 0 and length of images array
    setHeroImg(images[randomNum]);
    console.log(randomNum);
  }, []);

  // Function to generate a random number between min and max (inclusive)
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Return the random number
  };

  return (
    <div className="w-screen h-screen">
      <div
        onMouseEnter={() => setCursorColor("red")}
        onMouseLeave={() => setCursorColor("white")}
        className="h-[100vh] max-w-screen relative object-cover lg:w-[100vw]"
      >
        {heroImg && (
          <Image
            src={heroImg}
            alt="food image"
            fill
            className="object-cover brightness-75"
          />
        )}

        <div className="relative h-screen py-10 text-ivory flex flex-col justify-around">
          <div className="font-regular flex justify-center text-9xl">GOOD</div>
          <div className="w-full flex justify-center">
            <p className="w-60 text-xs uppercase font-sans font-medium">
              chef avenue presents GoodFood, a personalized nutrition advisor
              and private chef service
            </p>
          </div>
          <div className="font-regular flex justify-center text-9xl">FOOD</div>
        </div>
      </div>
    </div>
  );
}
