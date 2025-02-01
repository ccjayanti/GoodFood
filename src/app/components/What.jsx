"use client";
import { useState } from "react";
import Image from "next/image";
import DishSlides from "./DishSlides";
import ThumbnailCarousel from "./ThumbnailCarousel";

export default function What() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative text-sage mt-5" id="what">
      <div className="px-5 py-5">
        <div className="flex justify-between relative mt-3 uppercase text-xs">
          <div>chapter</div>
          <div>003</div>
          <div>three</div>
        </div>
        <div className="text-9xl font-regular uppercase w-full text-center py-6">
          what
        </div>
        <div className="uppercase  text-xs py-5">
          Curated Culinary Experiences
        </div>
        <div className="font-regular text-xl">
          We specialize in crafting{" "}
          <span className="font-italic">personalized dining</span> experiences
          that cater to your tastes, preferences, and occasions. From intimate
          dinners to grand celebrations, we ensure every detail is meticulously
          planned and executed.Transform your dining room into a{" "}
          <span className="font-italic">fine dining</span> experience. With
          professional-grade skills and attention to detail, we bring the
          sophistication of a top-tier restaurant directly to your home.
        </div>
      </div>
      <div className="m-9 bg-sage">
        <div className="h-60 w-full relative">
          <Image
            src="https://ik.imagekit.io/0xcqzy/good-food/Tasty%20starter%20getting%20prepa....jpg?updatedAt=1737129981176"
            alt="food image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative h-[80vh]">
        <Image
          src="https://ik.imagekit.io/0xcqzy/good-food/flat%20lay%20photo%20of%20green%20cau....jpg?updatedAt=1737135059293"
          alt="food image"
          fill
          className="object-cover"
        />
      </div>
      <div className="px-5 p-7 mb-5">
        <div className="uppercase  text-xs py-5">
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
      <DishSlides></DishSlides>
      <div className=" text-ivory text-center p-5">
        <button
          onClick={handleClick}
          className="uppercase text-xs  bg-transparentBg p-2 rounded-full"
        >
          click to expand
        </button>
      </div>
      <div className="relative py-7">
        <div className="text-xs uppercase px-5 mt-7">Seamless Service</div>
        <div className="font-regular px-5 mt-5 text-xl">
          Our goal is to make your event effortless and enjoyable. From sourcing
          fresh, high-quality ingredients to delivering flawless table service,
          we handle every aspect so you can focus on your guests.We accommodate
          a variety of dietary preferences and requirements, including{" "}
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
