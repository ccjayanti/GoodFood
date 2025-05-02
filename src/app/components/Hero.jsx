"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCursor } from "../context/CursorContext";

//images for hero section
const images = [
  // "https://ik.imagekit.io/0xcqzy/good-food/Ora%20King%20Salmon%20-%20dinner%20pl....jpg?updatedAt=1731841913791",
  "https://ik.imagekit.io/0xcqzy/good-food/%EB%B3%B5%EC%88%AD%EC%95%84%20%EB%94%94%EC%A0%80%ED%8A%B8.jpg?updatedAt=1731860829500",
  // "https://ik.imagekit.io/0xcqzy/good-food/a%20bowl%20of%20food%20with%20a%20garni....jpg?updatedAt=1731861052594",
  "https://ik.imagekit.io/0xcqzy/good-food/egg%20with%20sliced%20tomato%20and%20....jpg?updatedAt=1738333052180",
  "https://ik.imagekit.io/0xcqzy/good-food/Slice%20of%20fruit%20pie.jpg?updatedAt=1738333052015",
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
    <div
      onMouseEnter={() => setCursorColor("red")}
      onMouseLeave={() => setCursorColor("white")}
      className="h-[100vh] max-w-screen relative object-cover"
    >
      {heroImg && (
        <Image
          src={heroImg}
          alt="food image"
          fill
          className="object-cover brightness-50"
        />
      )}

      {/* Overlay text */}
      <div className="absolute top-2 left-0 w-full h-full text-ivory flex flex-col items-center justify-between text-center">
        <div className="font-regular mt-5 text-9xl">GOOD</div>
        <p className=" mt-4 w-60 text-xs uppercase font-sans font-medium">
          chef avenue presents GoodFood, a personalized nutrition advisor and
          private chef service
        </p>
        <div className="font-regular text-9xl mt-5">FOOD</div>
      </div>
    </div>
  );
}
