import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/aarav-main.png';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-slate-900">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="illustration-01">
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
            </radialGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className=" max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
          <p className="text-xl text-gray-600 mb-2 " data-aos="zoom-y-out" data-aos-delay="150">I am</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Aarjav Hansoti <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Full Stack Developer</span></h1>
            <div className="max-w-3xl mx-auto">
              
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a href="https://drive.google.com/file/d/1t0sYNPVVj9z7oJKXr-XRvlr8V5b1p-Fr/view?usp=sharing" target="_blank" className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">Resume</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center bg-gray-900">
                <img className="mx-auto" src={HeroImage} width="368" height="132" alt="Hero" />
              </div>
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;