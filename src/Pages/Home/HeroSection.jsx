import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const HeroSection = () => {
    return (
        <section className="min-h-[700px] bg-black text-white font-urbanist flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10">
            <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Explore the World, <br className="hidden md:block" /> One Country at a Time.
                </h1>
                <p className="text-base md:text-lg text-gray-300 max-w-lg">
                    Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                </p>
                <NavLink to="/about">
                    <button className="mt-4 inline-flex items-center gap-2 bg-[#202020] border-2 border-[] hover:bg-blue-700 text-white px-8 py-2 rounded-full text-sm font-semibold shadow-lg transition-all duration-300">
                        Start Exploring <FaLongArrowAltRight />
                    </button>
                </NavLink>
            </div>


            <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img src="/images/world.png" alt="World" />
            </div>
        </section>
    );
};
