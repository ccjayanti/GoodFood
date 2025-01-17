import Image from "next/image";

export default function Who() {
  return (
    <div className="relative text-mist ">
      <div className="px-5 py-5">
        <div className="flex justify-between relative mt-3 uppercase text-xs">
          <div>chapter</div>
          <div>002</div>
          <div>two</div>
        </div>
        <div className="text-9xl font-regular uppercase w-full text-center py-6">
          WHo
        </div>
        <div className="uppercase  text-xs py-5">
          a passionate Culinary service
        </div>
        <div className="font-regular ">
          We are a dedicated team of culinary professionals with years of
          experience in the art of fine dining. Our mission is to bring{" "}
          <span className="font-italic">expertise, precision</span>, and{" "}
          <span className="font-italic">passion </span>to every plate we serve.
          With a foundation in time-honored culinary techniques and a flair for
          creativity, we strike the perfect balance between{" "}
          <span className="font-italic">tradition</span> and
          <span className="font-italic">modernity. </span>Every dish tells a
          story of our dedication to the craft.
        </div>
      </div>
      <div className="m-9 bg-mist">
        <div className="h-60 w-full relative">
          <Image
            src="https://ik.imagekit.io/0xcqzy/good-food/person%20holding%20knife%20and%20to....jpg?updatedAt=1737124839641"
            alt="food image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative h-[80vh]">
        <Image
          src="https://ik.imagekit.io/0xcqzy/good-food/Chef%20at%20work.jpg?updatedAt=1736519548600"
          alt="food image"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative py-7">
        <div className="text-xs uppercase px-5 mt-7">
          A Foundation of Expertise
        </div>
        <div className="font-regular px-5 mt-2">
          With years of hands-on experience in{" "}
          <span className="font-italic">fine dining</span> and professional
          kitchens, we have honed our craft to blend artistry with precision.
          Our team is built on a strong foundation of{" "}
          <span className="font-italic">experience, innovation</span> and{" "}
          <span className="font-italic">dedication</span> to our craft. We take
          pride in staying ahead of trends while respecting the{" "}
          <span className="font-italic"> timeless principles</span> of culinary
          excellence.
        </div>
      </div>
      <div className="m-9 bg-mist">
        <div className="h-60 w-full relative">
          <Image
            src="https://ik.imagekit.io/0xcqzy/good-food/Cream%20of%20Tomato%20Soup.jpg?updatedAt=1736521580180"
            alt="food image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="h-[80vh] w-full relative ">
        <Image
          src="https://ik.imagekit.io/0xcqzy/good-food/A%20dish%20from%20Warehouse%20London.jpg?updatedAt=1737130396157"
          alt="food image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
