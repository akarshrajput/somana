import React from "react";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="flex dark:bg-stone-900 flex-col px-4 py-4 z-9999">
      <div className="grid lg:grid-cols-3 grid-cols-2">
        <div className="w-fit">
          <Logo />
        </div>
        <div className="lg:block hidden self-center justify-self-center ">
          <Navigation />
        </div>
        <div className="ml-auto">
          <HeaderNav />
        </div>
        <div className="col-span-2">
          <div className="lg:hidden w-full flex justify-center mt-4">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
