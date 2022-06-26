import React from "react";
import '../homepage/Hero.css'

const Hero = () => {
  return (
    <div >
      <section  className="w-fit ">
        <div className="px-4 py-12 mx-auto sm:px-6 md:px-12 lg:px-24 lg:py-24 bg-gradient-to-r from-gradiantRed to-gradiantOrange">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <img  className="object-cover object-center  rounded-lg shadow-2xl heroImg" alt="hero" src="https://images.pexels.com/photos/3405808/pexels-photo-3405808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 text-xs font-bold tracking-widest text-gray-100 uppercase">one in a kind</span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-white md:text-7xl lg:text-5xl">Buy a flower for your loved ones.</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-white">Make someone happy by gifting them a flower.</p>
              <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-primaryBtn rounded-xl hover:bg-white hover:text-primaryBtn focus:outline-white focus:ring-2 focus:ring-offset-2 focus:white">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
