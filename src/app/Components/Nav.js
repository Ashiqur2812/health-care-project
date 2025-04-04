"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
// import SignInButton from './SignInButton';

const Nav = () => {
  // const { data: session } = useSession();

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
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/find-doctor">Find Doctor</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">NORDIS</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/find-doctor">Find Doctor</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex gap-4">
          <a className="btn bg-[#A1EEBD]">Sign Up</a>

          {/* {session ? (
            <>
              <span className="font-medium">{session.user?.name}</span>
              <button 
                onClick={() => signOut()} 
                className="bg-white text-orange-500 px-4 py-1 rounded">
                Sign out
              </button>
            </>
          ) : (
            <SignInButton />
          )} */}

          <div className="navbar-end">
            <a className="btn bg-[#A1EEBD] ">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
