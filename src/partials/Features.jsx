import React, { useState, useRef, useEffect } from 'react';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">About Me</h1>
            <p className="text-xl text-gray-600">Currently in the Final Year of my BTech Degree. I am looking for a job with a role of developer, my skills can be seen below. My aim is to get into product management section working with the top firms of the world. My Positions of Responsibilties in the college have given me enough experience to work in a team, manage a team, communicate professionaly and think under pressure conditions.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
            <h1 className="h2 mb-4 text-3xl">My Education</h1>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3`}
                  href="#0"
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">BTech in CSBS</div>
                    <div className="text-gray-600 text-sm">NMIMS Navi Mumbai is a part of SVKM's Narsee Monjee University. Being a relatively newer campus, the college gave me immense exposure in all the new tech as well as the clubs and committees which helped me improve my communications, teamwork, people management and thinking skills</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3`}
                  href="#0"
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">12th CBSE</div>
                    <div className="text-gray-600 text-sm">DAV International School is a well known chain of schools. This school gave me not only theoritical and practical knowledge which helped me see the world with a different perspective</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">10th CBSE</div>
                    <div className="text-gray-600 text-sm">Ryan International School and the Ryan Groups are well known for giving the students exposure in co-curricular activities. I took the advantage of all the advantage that the school provided which improved my posture for the real world earlier than others</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
              <h1 className="h2 mb-4 text-3xl">Position of Responsibility</h1>
                {/* Item 1 */}
                <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Treasurer</div>
                    <div className="text-gray-600 text-sm">Treasurer of the Placement Committee comes with the responsibilty of managing all the activites related to money. Along with money related activities, as a Placement Committee Member, I connect with Companies and HR to bring them to the college for Internships and Placements</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 `}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Events Head</div>
                    <div className="text-gray-600 text-sm">Head of the Events Department for the Annual Flagship Tech Fest of College, IGNITE 4.0. I managed 18 students under me who managed individual events. I was directly answerable to the President of the Fest and to the Faculty Incharge</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5  ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Core Member</div>
                    <div className="text-gray-600 text-sm">As the core member of a Tech Club of college means I had to plan tech related workshops and other events exclusively for the students of the college along with other core member</div>
                  </div>
                </a>
              </div>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
