import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 ">
      <div>
        <Logo />
      </div>
      <ul className="flex mr-10 gap-10.5">
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>Features</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>Community</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>Pricing</span>
          </Link>
        </li>
        <button className="bg-[#28CB8B] py-3 px-8 rounded-md">
          Register Now
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
