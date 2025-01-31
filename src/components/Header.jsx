import { Link } from "react-router-dom";
import cartLogo from "../images/cart.png";
import hamMenu from "../images/ham-menu.png";

export default function Header({ hamDisplay, setHamDisplay, setBgPosition }) {
  function mobileNavigator() {
    if (hamDisplay === "block") {
      setHamDisplay("none");
      setBgPosition("");
    } else {
      setHamDisplay("block");
      setBgPosition("fixed");
    }
  }

  function setHamOff() {
    setHamDisplay("none");
  }

  return (
    <header className="flex w-full justify-center border-b-2 p-2 align-middle tablet:justify-start">
      <div
        style={{ display: hamDisplay }}
        className="fixed mt-11 h-full w-11/12 space-y-6 border-2 bg-white text-2xl"
      >
        <div className="mt-8">
          <Link onClick={mobileNavigator} to={"/"}>
            <button className="w-full rounded-2xl text-center active:bg-gray-200">
              Home
            </button>
          </Link>
        </div>
        <div>
          <Link onClick={mobileNavigator} to={"/about"}>
            <button className="w-full rounded-2xl text-center active:bg-gray-200">
              About
            </button>
          </Link>
        </div>
        <div>
          <Link onClick={mobileNavigator} to={"/products"}>
            <button className="w-full rounded-2xl text-center active:bg-gray-200">
              Products
            </button>
          </Link>
        </div>
      </div>
      <nav>
        <img
          onClick={mobileNavigator}
          src={hamMenu}
          className="absolute left-4 top-2 h-8 tablet:top-4 tablet:hidden tablet:h-9 lapt:right-7 lapt:h-10 laptL:h-12"
        />

        <div className="flex" onClick={setHamOff}>
          <Link
            to="/"
            className="text-3xl font-bold tablet:text-4xl lapt:text-5xl laptL:text-6xl"
          >
            Shop Name
          </Link>

          <ul className="hidden tablet:inline-block">
            <Link
              to="/"
              className="absolute right-80 top-4 lapt:right-96 lapt:text-xl laptL:text-2xl"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="absolute right-52 top-4 lapt:right-60 lapt:text-xl laptL:text-2xl"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="absolute right-28 top-4 lapt:right-32 lapt:text-xl laptL:text-2xl"
            >
              About
            </Link>
          </ul>
        </div>

        <Link to="/cart">
          <img
            onClick={setHamOff}
            src={cartLogo}
            className="absolute right-4 top-3 h-7 tablet:top-2 tablet:h-9 lapt:right-7 lapt:h-10 laptL:h-12"
          />
        </Link>
      </nav>
    </header>
  );
}
