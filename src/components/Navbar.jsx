import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SUPPLIES", link: "/supplies" },
    { name: "DASHBOARD", link: "/dashboard" },
    { name: "LOGIN", link: "/login" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full z-20">
      <div className="md:flex items-center justify-between bg-[#401D3E] py-4 md:px-10 px-5">
        <div
          className="text-2xl flex items-center 
          text-[#DE76A3] font-bold font-[cursive]"
        >
          <span className="text-3xl mr-3">
            <img className="md:w-20 w-16" src={logo} alt="" />
          </span>
          RESILIENCE
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-[#DE76A3]"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex z-50 md:items-center md:pb-0 pb-5 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-[#401D3E] ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 mr-8 md:mr-0 text-xl md:my-0 my-2 text-left border border-[#DE76A3] md:border-0"
            >
              <Link
                to={link.link}
                onClick={() => setOpen(!open)}
                className="text-[#DE76A3] p-2 md:p-0 w-full bg-[#401D3E] block hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
