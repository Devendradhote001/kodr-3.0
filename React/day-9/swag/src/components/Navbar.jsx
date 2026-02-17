import React, { useContext } from "react";
import { CircleUser } from "lucide-react";
import { MyStore } from "../MyContext";

const Navbar = () => {
  let { setToggle } = useContext(MyStore);

  return (
    <div className="px-10 h-[8%] flex justify-between items-center bg-blue-600 text-white">
      <div className="flex items-center gap-4">
        <div className="h-7">
          <img
            className="h-full"
            src="https://www.shutterstock.com/image-vector/swag-lettering-260nw-616060418.jpg"
            alt=""
          />
        </div>
        <h1 className="text-xl">Swag Mall</h1>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-8 text-xl font-semibold">
          <p onClick={() => setToggle(false)} className="cursor-pointer">
            Home
          </p>
          <p onClick={() => setToggle(true)} className="cursor-pointer">
            Cart
          </p>
          <p className="cursor-pointer">Favourites</p>
        </div>
        <div>
          <CircleUser size={26} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
