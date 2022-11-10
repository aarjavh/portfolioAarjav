import React from 'react';
import Ignite from '../images/ignite.png'
import Canteen from '../images/canteen.png'
import Cyptera from '../images/cryptera.png'
import Companion from '../images/companion.png'
import Weather from '../images/weather.png'
import Portfolio from '../images/portfolio.png'
function FeaturesBlocks() {
  return (
    <section className="relative bg-slate-900">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 text-white">
            <h2 className="h2 mb-4">Projects</h2>
            <p className="text-xl text-gray-600">Here are some of the things I have been worked on recently</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <a href="https://www.nm-ignite.tech/" className="hover:-translate-y-2 transition duration-300 ease-in-out" target="_blank">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={Ignite} alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">NM Ignite 4.0 Website</h4>
              <p className="text-gray-600 text-center">Front End Development</p>
            </div></a>

            {/* 2nd item */}
            <a href="https://sites.google.com/view/nmims-e-canteen/home" className="hover:-translate-y-2 transition duration-300 ease-in-out" target="_blank">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={Canteen} alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">NMIMS E-CANTEEN</h4>
              <p className="text-gray-600 text-center">Cloud Based Platform</p>
            </div></a>

            {/* 3rd item */}
            <a href="http://thecryptera.com/" className="hover:-translate-y-2 transition duration-300 ease-in-out" target="_blank">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={Cyptera} alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">The Cryptera Website</h4>
              <p className="text-gray-600 text-center">Front End Project</p>
            </div></a>

            {/* 4th item */}
            <a href="https://github.com/MannPatel117/CompanionApp" className="hover:-translate-y-2 transition duration-300 ease-in-out" target="_blank">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={Companion} alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Companion Mob App</h4>
              <p className="text-gray-600 text-center">Full Stack Mob App Development</p>
            </div></a>

            {/* 5th item */}
            <a href="https://github.com/aarjavh/weatherApp" className="hover:-translate-y-2 transition duration-300 ease-in-out" target="_blank">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={Weather} alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Weather Mob App</h4>
              <p className="text-gray-600 text-center">Full Stack Mob App Development</p>
            </div></a>

            {/* 6th item */}
            <a href="#" className="hover:-translate-y-2 transition duration-300 ease-in-out" target="_blank">
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={Portfolio} alt="" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Aarjav's Portfolio</h4>
              <p className="text-gray-600 text-center">Front End Development</p>
            </div></a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
