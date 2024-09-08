"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 " style={{paddingTop: '8rem', paddingBottom: '8rem'}}>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact us at:</h3>
          <p>XX- 493904709</p>
        </div>
        
        <div className="w-1/2">
          <h3 className="text-xl font-bold mb-4">Contact Form</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-white text-black rounded-md transition-colors focus:border-indigo-500"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Mail Content
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border border-white text-black rounded-md transition-colors focus:border-indigo-500"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
