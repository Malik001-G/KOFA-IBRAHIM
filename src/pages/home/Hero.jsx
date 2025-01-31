import React from "react";
import arrow from '../../assets/images/schedule_arrow.svg'
import ipinle from "../../assets/images/ipinle.svg";
import Timer from './../../components/timer/Timer';
import hero from '../../assets/images/hero_image.png'
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="bg-white pb-3">
        <div className="flex justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-24">
            <h1 className="mb-4 text-7xl font-bold animated-text tracking-tight leading-none lg:text-9xl">KOFA IBRAHIM</h1>
            <div className="flex justify-between items-center pr-6">
              <div className="w-7/12 text-left">
                <p className=" leading-8 text-xl">A visionary Documentary Filmmaker, Leadership and Strategy Expert, and passionate Climate Advocate.</p>
              </div>
              <div className="w-5/12 text-right">
                <button type="button" className="px-5 py-3 text-sm capitalize font-medium text-center text-white bg-[#1E1E1E] rounded-full
                 hover:bg-black items-center transition-all hover:ease-in-out 
                 inline-flex hover:scale-105 duration-700 focus:ring-0 
                 focus:outline-none">schedule a meeting <img src={arrow} className="ml-2 w-3 pt-1" alt="" /></button>
              </div>
            </div>
            
          </div>
        </div>
        <div>
          <img src={hero} alt="" className="h-96 object-cover shadow-md w-full"/>
        </div>

      </section>
    </>
  );
};

export default Hero;




