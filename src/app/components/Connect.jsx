import { useCursor } from "../context/CursorContext";
export default function Connect() {
  const { setCursorColor } = useCursor();
  return (
    <div
      /*Custom Cursor follower Color */
      onMouseEnter={() => setCursorColor("var(--sand)")}
      onMouseLeave={() => setCursorColor("var(--sand)")}
      className="relative text-sand mt-5 px-5 py-5"
      id="connect"
    >
      <div className="">
        <div className="flex justify-between relative mt-3 uppercase text-xs">
          <div>chapter</div>
          <div>004</div>
          <div>connect</div>
        </div>
        <div className="text-7xl font-regular uppercase w-full text-center py-6">
          Connect
        </div>
      </div>
      <div className="font-regular text-xl">
        We would love to hear from you! Whether you are planning a special
        celebration or simply looking to enjoy an unforgettable dining
        experience, we are here to help. Reach out to us via phone, email, or
        our contact form, and lets start crafting something extraordinary
        together. Follow us on social media for inspiration, updates, and a
        glimpse into the world of fine dining we create for our clients.
      </div>

      <div className="uppercase  text-xs pt-5">follow us on</div>
      <div className="uppercase  text-xs ">social media</div>
      <div className="font-italic text-2xl mt-3">
        <div>
          <a href="https://www.instagram.com/">Instagram</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/">LinkedIn</a>
        </div>
      </div>
      <div className="uppercase  text-xs pt-7">here we are</div>
      <div className="uppercase  text-xs ">get in touch</div>
      <div className="font-italic text-2xl mt-3">
        <div>
          <div>Phone</div>
          <div>+31 4159265359</div>
        </div>
        <div className="pt-3">
          <div>Mail</div>
          <div>contact@goodfood.com</div>
        </div>
      </div>
      <div className="my-9 ">
        <div className="text-xs uppercase mt-3 ">info</div>
        <div className="font-regular text-xl mt-3">Goodfood</div>
        <div className="font-regular text-xl">Privacy Policy </div>
      </div>
    </div>
  );
}
