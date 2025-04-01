"use client";

import { signIn } from "next-auth/react";

const handleSignIn = () => {
    signIn("github");  // or the provider you're using
  };
const SignInButton = () => {
    return (
        <button onClick={handleSignIn} className="bg-white text-orange-500 px-4 py-1 rounded">
            Sign In
        </button>
    );
};

export default SignInButton;
