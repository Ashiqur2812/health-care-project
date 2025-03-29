import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>ABOUT US</a>
              </li>
              <li>
                <a>BLOGS</a>
              </li>
              <Link href="/add-doctors">
                <li>Add Doctors</li>
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">NORDIS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" px-1 flex flex-row gap-5 ">
            <Link href="/">
              <li>HOME</li>
            </Link>
            <li>ABOUT US</li>
            <li>BLOGS</li>
            <Link href="/add-doctors">
              <li>Add Doctors</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#A1EEBD] ">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
