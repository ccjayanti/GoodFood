"use client";
import { useState } from "react";
import Image from "next/image";
import DishSlides from "./DishSlides";
import ThumbnailCarousel from "./ThumbnailCarousel";
import { useCursor } from "../context/CursorContext";

export default function What() {
  const { setCursorColor } = useCursor();
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      /*Custom Cursor follower Color */
      onMouseEnter={() => setCursorColor("var(--sage)")}
      onMouseLeave={() => setCursorColor("var(--sage)")}
      className="relative text-sage mt-5 lg:h-[100vh] lg:flex lg:ml-20 lg:mt-0"
      id="what"
    >
      <div className="px-5 py-5">
        <div className="flex justify-between relative mt-3 uppercase text-xs">
          <div>chapter</div>
          <div>003</div>
          <div>three</div>
        </div>
        <div className="text-9xl font-regular uppercase w-full text-center py-6 ">
          what
        </div>
        <div className="lg:w-[40vw]">
          <div className="uppercase  text-xs py-5">
            Curated Culinary Experiences
          </div>
          <div className="font-regular text-xl">
            We specialize in crafting{" "}
            <span className="font-italic">personalized dining</span> experiences
            that cater to your tastes, preferences, and occasions. From intimate
            dinners to grand celebrations, we ensure every detail is
            meticulously planned and executed.Transform your dining room into a{" "}
            <span className="font-italic">fine dining</span> experience. With
            professional-grade skills and attention to detail, we bring the
            sophistication of a top-tier restaurant directly to your home.
          </div>
        </div>
      </div>
      <div>
        <div className="m-9 bg-sage lg:h-[30vh] lg:w-[30vw] lg:absolute lg:p-10 lg:bottom-20 lg:m-0">
          <div className="h-60 w-full relative  lg:h-[30vh] ">
            <Image
              src="https://ik.imagekit.io/0xcqzy/good-food/Tasty%20starter%20getting%20prepa....jpg?updatedAt=1737129981176"
              alt="food image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div className="relative h-[80vh] lg:h-[40vh] lg:mt-5">
            <Image
              src="https://ik.imagekit.io/0xcqzy/good-food/flat%20lay%20photo%20of%20green%20cau....jpg?updatedAt=1737135059293"
              alt="food image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="px-5 p-7 mb-5  lg:w-[30vw] lg:bg-sage lg:text-ivory lg:mb-0 lg:mr-5 ">
        <div className="uppercase  text-xs py-5 lg:w-[30vw] ">
          A Culinary Experience, Just for You
        </div>
        <div className="font-regular text-xl">
          Discover a menu crafted with passion, precision, and the finest
          ingredients. Our private chef brings a personalized touch to every
          dish, ensuring a unique and unforgettable dining experience.Whether
          you crave comforting classics or innovative gourmet delights, every
          dish is made with passion and precision to bring restaurant-quality
          meals straight to your table.
        </div>
      </div>
      <div className="lg:flex">
        <DishSlides />
        <div className=" text-ivory text-center p-5 lg:flex align-middle">
          <button
            onClick={handleClick}
            className="uppercase text-xs  bg-transparentBg p-2 rounded-full lg:bg-sage "
          >
            click to expand
          </button>
        </div>
      </div>
      <div className="lg:flex">
        <div className="relative py-7  lg:w-[30vw]">
          <div className="text-xs uppercase px-5 mt-7">Seamless Service</div>
          <div className="font-regular px-5 mt-5 text-xl">
            Our goal is to make your event effortless and enjoyable. From
            sourcing fresh, high-quality ingredients to delivering flawless
            table service, we handle every aspect so you can focus on your
            guests.We accommodate a variety of dietary preferences and
            requirements, including{" "}
            <span className="font-italic">vegetarian, vegan, gluten-free</span>{" "}
            and other specialized diets, ensuring that everyone at your table is
            satisfied.
          </div>
        </div>
        <div className="m-9 bg-sage">
          <div className="h-60 w-full relative">
            <Image
              src="https://ik.imagekit.io/0xcqzy/good-food/Matcha%20Swiss%20Roll.jpg?updatedAt=1736521388656"
              alt="food image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Expanded Menu view */}
      {isExpanded && (
        <div className="fixed inset-0 bg-chocLight " style={{ zIndex: 9999 }}>
          <div className="text-ivory text-lg p-5">
            <div className="flex justify-end">
              <button
                className="uppercase text-xs  bg-transparentBg p-3 rounded-full "
                onClick={handleClick}
              >
                Close
              </button>
            </div>
            <ThumbnailCarousel></ThumbnailCarousel>
          </div>
        </div>
      )}
    </div>
  );
}
