import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white min-h-[27.5rem] text-center md:tex-start px-default md:px-primary pt-[5rem]">
      <div className="mx-auto container min-h-[14.75rem] flex flex-wrap justify-between items-start">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-10 lg:mb-0 mx-auto">
          <h2 className="text-[1.5rem] font-bold [lineHeight:1.5rem] mb-[1.5rem]">
            Exclusive
          </h2>
          <p className="text-[1.25rem] text-center  font-medium [lineHeight:1.75rem] mb-[1.5rem]">
            Subscribe
          </p>
          <p className="text-[1rem] text-center  font-medium [lineHeight:1.5rem] mb-[1rem]">
            Get 10% off your first order
          </p>
          <div className="h-[3rem] w-[13.563rem] relative mx-auto ">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-full bg-transparent text-white border-[1.5px] border-solid border-white text-[1rem] px-[1rem] rounded-[0.25rem] relative"
            />
            <button className="absolute right-0 top-0 h-full w-[4rem] bg-primary text-white text-[1rem] font-medium">
              Submit
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0">
          <h2 className="text-[1.25rem] font-medium mb-[1.5rem]">Support</h2>
          <ul className="text-[1rem] [lineHeught:1.5rem] space-y-[1rem]">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0">
          <h2 className="text-[1.25rem] font-medium mb-[1.5rem]">Account</h2>
          <ul className="text-sm space-y-[1rem]">
            <li>
              <Link to={"/account"} aria-label="my account">
                My Account
              </Link>
            </li>
            <li>
              <Link to={"/login"} aria-label="login page">
                Login
              </Link>{" "}
              /{" "}
              <Link to={"/register"} aria-label="register page">
                {" "}
                Register
              </Link>
            </li>
            <li>
              <Link to={"/cart"} aria-label="cart page">
                Cart
              </Link>
            </li>
            <li>
              <Link to={"/wishlist"} aria-label="wishlist page">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to={"/shop"} aria-label="shop page">
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0">
          <h2 className="text-[1.25rem] font-medium mb-[1.5rem]">Account</h2>
          <ul className="text-sm space-y-[1rem]">
            <li>
              <Link to={"/privacy"} aria-label="Privacy Policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={"/terms"} aria-label="Terms Of Use page">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link to={"/FAQ"} aria-label="FAQ page"></Link>
            </li>
            <li>
              <Link to={"/contact"} aria-label="Contact page">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
