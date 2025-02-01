"use client";
import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const images = [
  "https://ik.imagekit.io/0xcqzy/good-food/a%20blue%20plate%20topped%20with%20fo....jpg?updatedAt=1738333052246",
  "https://ik.imagekit.io/0xcqzy/good-food/A%20bowl%20of%20soup%20on%20a%20wooden%20....jpg?updatedAt=1736519728727",
  "https://ik.imagekit.io/0xcqzy/good-food/fancy%20scallop%20dinner%20on%20plate.jpg?updatedAt=1731841505915",
  "https://ik.imagekit.io/0xcqzy/good-food/a%20plate%20of%20steak%20and%20aspara....jpg?updatedAt=1736521390883",
  "https://ik.imagekit.io/0xcqzy/good-food/a%20blue%20plate%20topped%20with%20fo....jpg?updatedAt=1738333052246",
  "https://ik.imagekit.io/0xcqzy/good-food/Burrata%20and%20Fruits.jpg?updatedAt=1738332183331",
  "https://ik.imagekit.io/0xcqzy/good-food/African%20Sweet%20Potato%20Soup.jpg?updatedAt=1738333058408",
  "https://ik.imagekit.io/0xcqzy/good-food/Red%20caviar%20meal%20in%20the%20whit....jpg?updatedAt=1738332499086",
  "https://ik.imagekit.io/0xcqzy/good-food/Brunch%20is%20this%20moment%20when%20....jpg?updatedAt=1738333055934",
  "https://ik.imagekit.io/0xcqzy/good-food/orange,%20cinnamon%20and%20rosema....jpg?updatedAt=1738333057858",
  "https://ik.imagekit.io/0xcqzy/good-food/Palabok.jpg?updatedAt=1738333049929",
  "https://ik.imagekit.io/0xcqzy/good-food/green%20and%20white%20vegetable%20s....jpg?updatedAt=1738333052593",
  "https://ik.imagekit.io/0xcqzy/good-food/Photograph%20of%20sea%20bass%20dish....jpg?updatedAt=1738333046172",
  "https://ik.imagekit.io/0xcqzy/good-food/a%20bowl%20of%20food%20with%20peas%20on....jpg?updatedAt=1736521393773",
];

export default function ThumbnailCarousel() {
  const mainRef = useRef(null);
  const thumbRef = useRef(null);

  return (
    <div className="w-full relative ">
      {/* ✅ Main Carousel */}
      <Splide
        className="h-[70vh] pt-5"
        ref={mainRef}
        options={{
          type: "fade",
          rewind: true,
          pagination: false,
          arrows: false,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <div className="w-full flex justify-center ">
              <div className=" h-[400px] w-[600px]">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* ✅ Thumbnail Carousel */}
      <div className="custom-carousel">
        <Splide
          className="p-5"
          ref={thumbRef}
          options={{
            fixedWidth: 100,
            fixedHeight: 60,
            isNavigation: true,
            gap: "0.5rem",
            focus: "center",
            pagination: false,
            cover: true,
            arrows: true,
          }}
          onMounted={(splide) => {
            mainRef.current.sync(splide);
          }}
        >
          {images.map((image, index) => (
            <SplideSlide key={index} className="cursor-pointer splide__slide">
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="w-full h-auto rounded-lg"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
