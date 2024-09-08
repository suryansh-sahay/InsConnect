"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen bg-black">
        {/* Left Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
        <div className="flex-1 flex flex-col justify-center items-center p-8 text-white">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span >
             Connect with{" "}
            </span>
            <br></br>
            <div className='text-indigo-500'>
            <TypeAnimation
              sequence={[
                "UniConnect",
                1000,
                "Peers",
                1000,
                "University",
                1000,
                "World",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </div>
          </h1>
          <p className="text-gray-500 text-xl font-semibold">Lodge your grievances and gain support from your peers!</p><br/><br/><br/>
           <div className="flex space-x-8">
           <Link href="/LoginPage">
           <button className="bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold">
              Get Started</button></Link> 
            <button className="border border-indigo-700 border-'5' text-indigo-500 px-6 py-3 font-semibold rounded-full">View your Uni</button>
          </div>

        </div>
        </motion.div>

        {/* Right Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-20"
        >
        <div className="rounded-full bg-black  w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] relative">
            <img
              src="LPic.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              max-w-sm max-h-sm
            />
      </div>
      </motion.div>
      </div>
      <AboutUs/>
      <FAQs/>
      <Footer/>
     
    </div>
  );
};

export default Home;
