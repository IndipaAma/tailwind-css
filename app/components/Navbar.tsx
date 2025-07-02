import React from "react";
import Link from "next/link";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import Right from "../../public/Right.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 items-center">
      <div>
        <Image src={Logo} alt="Logo"></Image>
      </div>
      <ul className="flex mr-10 gap-10.5 items-center">
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
        <button className="flex bg-[#28CB8B] py-3 px-8 rounded-md gap-1.5">
          Register Now
          <Image src={Right} alt="Right icon"></Image>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
