"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-[#F3F9FB] h-14 py-10 my-1">
      <div className=" z-10 h-full w-full max-w-[1300px] px-[15px] mx-auto flex justify-between items-center sticky top-0">
        {/* Logo */}
        <Link href="/">
          <h1>Heal.io</h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          <li className="px-2 py-1 hover:bg-red-500 rounded-sm m-2 cursor-pointer duration-300 hover:text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="px-2 py-1 hover:bg-red-500 rounded-sm m-2 cursor-pointer duration-300 hover:text-white">
            <Link href="/products">Shop</Link>
          </li>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#F3F9FB] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <Link href="/">
            <h1>Heal.io</h1>
          </Link>

          {/* Mobile Navigation Items */}
          {/*  */}
          <li className="px-2 py-1 border-b rounded-sm hover:bg-red-500 duration-300 hover:text-white cursor-pointer border-gray-600">
            <Link href="/">Home</Link>
          </li>
          <li className="px-2 py-1 border-b rounded-sm hover:bg-red-500 duration-300 hover:text-white cursor-pointer border-gray-600">
            <Link href="/products">Shop</Link>
          </li>

          <li className="px-2 py-1 border-b rounded-sm hover:bg-red-500 duration-300 hover:text-white cursor-pointer border-gray-600">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="px-2 py-1 border-b rounded-sm hover:bg-red-500 duration-300 hover:text-white cursor-pointer border-gray-600">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
