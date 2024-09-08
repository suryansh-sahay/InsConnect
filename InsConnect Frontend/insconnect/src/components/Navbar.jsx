"use client"
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="UniConnect Logo" className="h-16" />
        <h1 className="text-3xl font-bold">UniConnect</h1>
      </div>
      <div className="flex items-center space-x-8">
        <Link className="hover:text-indigo-700  md:my-0 my-12 font-semibold text-lg " href="/AboutUs">
        About Us
        </Link>
        <Link className="hover:text-indigo-700 md:mr-12 md:my-0 my-12 font-semibold text-lg " href="/FAQs">
        FAQs
        </Link>
        <Link className="hover:text-indigo-700 md:mr-12 md:my-0 my-12 font-semibold text-lg " href="/Search">
          Check your Uni
        </Link>

        <Link className="bg-indigo-500 text-white font-semibold text-lg px-4 py-2 md:mr-16 rounded hover:bg-indigo-700 transition duration-300" href="/LoginPage">
         Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
