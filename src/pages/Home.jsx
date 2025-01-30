import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
    // className="bg-coffeeBg absolute h-screen w-full bg-cover bg-no-repeat"
    // style={{ backgroundImage: `url(${coffeeBg})` }}
    >
      <div className="flex-col justify-items-center p-6 tablet:px-20 lapt:px-32 laptL:px-40">
        <div className="text-center text-3xl font-bold italic mix-blend-lighten lapt:text-4xl laptL:text-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="mt-5 text-center text-xl mix-blend-lighten tablet:text-3xl lapt:text-4xl laptL:text-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          malesuada nulla ante, in consectetur leo fringilla nec. Nam nisi diam
        </div>

        <Link to="/products">
          <button className="mt-9 w-28 rounded-3xl bg-gray-400">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}
