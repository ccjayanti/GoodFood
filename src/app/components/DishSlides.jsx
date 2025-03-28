"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import "@splidejs/react-splide/css";

const slide1 = [
  "https://ik.imagekit.io/0xcqzy/good-food/A%20bowl%20of%20soup%20on%20a%20wooden%20....jpg?updatedAt=1736519728727",
  "https://ik.imagekit.io/0xcqzy/good-food/Artichoke.jpg?updatedAt=1731842082537",
  "https://ik.imagekit.io/0xcqzy/good-food/fancy%20scallop%20dinner%20on%20plate.jpg?updatedAt=1731841505915",
  "https://ik.imagekit.io/0xcqzy/good-food/a%20plate%20of%20steak%20and%20aspara....jpg?updatedAt=1736521390883",
  "https://ik.imagekit.io/0xcqzy/good-food/a%20blue%20plate%20topped%20with%20fo....jpg?updatedAt=1738333052246",
];

const slide2 = [
  "https://ik.imagekit.io/0xcqzy/good-food/Burrata%20and%20Fruits.jpg?updatedAt=1738332183331",
  "https://ik.imagekit.io/0xcqzy/good-food/African%20Sweet%20Potato%20Soup.jpg?updatedAt=1738333058408",
  "https://ik.imagekit.io/0xcqzy/good-food/Red%20caviar%20meal%20in%20the%20whit....jpg?updatedAt=1738332499086",
  "https://ik.imagekit.io/0xcqzy/good-food/Brunch%20is%20this%20moment%20when%20....jpg?updatedAt=1738333055934",
  "https://ik.imagekit.io/0xcqzy/good-food/a%20plate%20of%20dessert.jpg?updatedAt=1736521390124",
];

const slide3 = [
  "https://ik.imagekit.io/0xcqzy/good-food/orange,%20cinnamon%20and%20rosema....jpg?updatedAt=1738333057858",
  "https://ik.imagekit.io/0xcqzy/good-food/Palabok.jpg?updatedAt=1738333049929",
  "https://ik.imagekit.io/0xcqzy/good-food/green%20and%20white%20vegetable%20s....jpg?updatedAt=1738333052593",
  "https://ik.imagekit.io/0xcqzy/good-food/Photograph%20of%20sea%20bass%20dish....jpg?updatedAt=1738333046172",
  "https://ik.imagekit.io/0xcqzy/good-food/a%20bowl%20of%20food%20with%20peas%20on....jpg?updatedAt=1736521393773",
];

export default function DishSlides() {
  return (
    <div className="px-5 lg:flex lg:h-screen lg:w-full">
      <div className="relative mx-auto w-full lg:w-[10vw] lg:h-screen lg:flex lg:flex-col lg:justify-start">
        <Splide
          className="pt-5 lg:pt-0"
          options={{
            type: "loop",
            direction: "rtl",
            perPage: 3,
            gap: "1rem",
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1,
              pauseOnHover: false,
            },
            ...(typeof window !== "undefined" && window.innerWidth >= 1024
              ? { direction: "ttb", height: "100vh",perPage: 4 }
              : {}),
          }}
          extensions={{ AutoScroll }}
        >
          {slide1.map((src, index) => (
            <SplideSlide key={index}>
              <div className="h-[100px] w-[70px] lg:w-[20vw] lg:h-screen">
                <Image src={src} alt={`Food image ${index + 1}`} fill className="object-cover" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      
      <div className="relative mx-auto w-full lg:w-[10vw] lg:h-screen lg:flex lg:flex-col lg:justify-end lg:ml-5">
        <Splide
          className="pt-5 lg:pt-0 "
          options={{
            type: "loop",
            direction: "ltr",
            perPage: 3,
            gap: "1rem",
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1,
              pauseOnHover: false,
            },
            ...(typeof window !== "undefined" && window.innerWidth >= 1024
              ? { direction: "ttb", height: "100vh" ,perPage: 4, autoScroll: { speed: -1, pauseOnHover: false, }  }
              : {}),
          }}
          extensions={{ AutoScroll }}
        >
          {slide2.map((src, index) => (
            <SplideSlide key={index}>
              <div className="h-[100px] w-[70px] lg:w-[20vw] lg:h-screen">
                <Image src={src} alt={`Food image ${index + 1}`} fill className="object-cover" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="relative mx-auto w-full lg:w-[10vw] lg:h-screen lg:flex lg:flex-col lg:justify-start lg:ml-5">
        <Splide
          className="pt-5 lg:pt-0 "
          options={{
            type: "loop",
            direction: "rtl",
            
            perPage: 3,
            gap: "1rem",
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1,
              pauseOnHover: false,
            },
            ...(typeof window !== "undefined" && window.innerWidth >= 1024
              ? { direction: "ttb", height: "100vh",perPage: 4, }
              : {}),
          }}
          extensions={{ AutoScroll }}
        >
          {slide3.map((src, index) => (
            <SplideSlide key={index}>
              <div className="h-[100px] w-[70px] lg:w-[20vw] lg:h-screen">
                <Image src={src} alt={`Food image ${index + 1}`} fill className="object-cover" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}