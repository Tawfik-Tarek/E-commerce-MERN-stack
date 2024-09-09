import React from "react";
import Navbar from "./Navbar";
import CartAndWishlist from "./CartAndWishlist";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="container mx-auto mb-10 px-default md:px-primary py-6  border-solid border-b-[0.5px] border-b-black w-full  h-[70px] ">
      <div className="flex items-center justify-between">
        <Logo />
        <Navbar />
        <CartAndWishlist />
      </div>
    </header>
  );
};

export default Header;
