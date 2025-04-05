"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  // const { data: session } = useSession();

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-[#d2eaef] to-[#ABD1F2] text-[#274760]">
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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/find-doctor">Find Doctor</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <details>
                  <summary>Pages</summary>
                  <ul>
                  <li>
                    <Link href="/pages/appointments">Appointments</Link>
                  </li>
                  <li>
                    <Link href="/pages/departments">Departments</Link>
                  </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">NORDIS</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/find-doctor">Find Doctor</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <details className="dropdown">
                <summary className="cursor-pointer">Pages</summary>
                <ul className="p-2 bg-white rounded-t-none z-10">
                  <li>
                    <Link href="/pages/appointments">Appointments</Link>
                  </li>
                  <li>
                    <Link href="/pages/departments">Departments</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn border-0 bg-[#307BC4]">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
