import Image from "next/image";

export default function Why() {
  return (
    <div className="relative text-clay mt-5">
      <div className="h-[60vh] w-full relative ">
        <Image
          src="https://ik.imagekit.io/0xcqzy/good-food/why/Chopping%20Vegetables.jpg?updatedAt=1736521956162"
          alt="food image"
          fill
          className="object-cover"
        />
      </div>
      <div className="px-5 py-5">
        <div className="flex justify-between relative mt-3 uppercase text-xs">
          <div>chapter</div>
          <div>001</div>
          <div>one</div>
        </div>
        <div className="text-9xl font-regular uppercase w-full text-center py-6">
          WHY
        </div>
        <div className="uppercase  text-xs py-5">
          Tailored Culinary Experience
        </div>
        <div className="font-regular text-xl">
          We craft every meal to suit your{" "}
          <span className="font-italic">taste preferences, dietary needs,</span>{" "}
          and <span className="font-italic">event style</span> ensuring a dining
          experience that feels uniquely yours.
        </div>
      </div>
      <div className="m-9 bg-clay">
        <div className="h-60 w-full relative">
          <Image
            src="https://ik.imagekit.io/0xcqzy/good-food/why/Baking%20a%20Pie.jpg?updatedAt=1736522049214"
            alt="food image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative h-[80vh]">
        <Image
          src="https://ik.imagekit.io/0xcqzy/good-food/why/Papaya%20and%20blueberries%20salad.jpg?updatedAt=1736522097544"
          alt="food image"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative py-7">
        <div className="text-xs uppercase px-5 mt-7">
          Commitment to Excellence
        </div>
        <div className="font-regular px-5 mt-2 text-xl">
          At Goodfood we pride ourselves on delivering not just food, but an{" "}
          <span className="font-italic">unforgettable experience</span> with
          touch of{" "}
          <span className="font-italic">
            sophistication, creativity, and care.{" "}
          </span>
        </div>
      </div>
      <div className="m-9 bg-clay">
        <div className="h-60 w-full relative">
          <Image
            src="https://ik.imagekit.io/0xcqzy/good-food/why/a%20white%20plate%20topped%20with%20f....jpg?updatedAt=1736522166661"
            alt="food image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="h-[80vh] w-full relative ">
        <Image
          src="https://ik.imagekit.io/0xcqzy/good-food/Delicious%20tomato%20nectarine%20....jpg?updatedAt=1736521058440"
          alt="food image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
