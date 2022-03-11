import { GiDiceEightFacesEight } from "react-icons/gi";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-gray-700 backdrop-filter backdrop-blur-lg bg-opacity-60 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center text-white">
            <GiDiceEightFacesEight className="text-5xl" />
            <span className="text-2xl font-semibold">Rol Chart</span>
          </div>
          <div className="flex space-x-3 lg:space-x-6 text-white lg:text-xl text-base">
            <a href="#" className="hover:text-gray-300 duration-500">
              Home
            </a>
            <a href="#" className="hover:text-gray-300 duration-500">
              About
            </a>
            <a href="#" className="hover:text-gray-300 duration-500">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
