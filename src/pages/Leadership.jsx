import React from 'react'
import { images } from '../assets';
import { FaGraduationCap } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import { BsBuildingsFill } from 'react-icons/bs';




function Leadership() {

  const achievements = [
    {
      img: `${images.award}`,
      title: "PROMISING ENGINEER AWARD 2022 – IEI NASHIK",
      description:
        "Recognition for outstanding contribution to structural engineering innovation.",
    },
    {
      img: `${images.award}`,
      title:
        "OUTSTANDING CONCRETE STRUCTURE AWARD 2023 – ACCE NASHIK & ULTRATECH",
      description:
        "Advanced engineering for large-scale structures requiring exceptional load capabilities.",
    },
    {
      img: `${images.award}`,
      title:
        "WORLD RECORD HOLDER – WORLD RECORD OF INDIA, 2023",
      description:
        "Pre-engineered buildings and post-tensioned slab systems for optimal structural performance.",
    },
  ];

  const leadership = [
    {
      icon: <FaGraduationCap />,
      title: "Mentored By",
      description: "Er. Prasanna Bhore.",
    },
    {
      icon: <FiBookOpen />,
      title: "Expert Lectures",
      description: "Regularly delivers talks at engineering institutions",
    },
    {
      icon: <BsBuildingsFill />,
      title: "Site Visits",
      description: "Hosts educational tours for engineering students",
    },

  ];

  const left = [
    'Industrial & Long-Span Structures – Spans Up To 24m',
    'Post-Tensioning, Void PT Slab, Deck Slab Systems',
    'Centering And Shuttering Designs'
  ];
  const right = [
    'Fibre-Reinforced Concrete',
    'GGBS (Ground Granulated Blast-Furnace Slag)',
    'Real-Time Strength Monitoring'
  ];

  return (
    <div className='' >

      {/* ACHIEVEMENTS & AWARDS */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-800">ACHIEVEMENTS & AWARDS</h2>
        <p className="text-[#1e1e1e] mb-8 mt-2">
          Recognized for excellence and innovation in structural engineering
        </p>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white  "
            >
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover overflow-hidden hover:scale-105 transition-transform" />

              <div className="p-4 text-start">
                <h3 className="text-sm font-semibold text-black">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ACHIEVEMENTS & AWARDS */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-800 uppercase">Mentorship & Knowledge Sharing</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {leadership.map((item, index) => (
            <div
              key={index}
              className="bg-white"
            >
              <div className="flex items-center gap-3 py-4 px-4">
                <div className="text-primary w-10 h-10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-black">{item.title}</h3>
              </div>
              <div className="pl-14 text-start">
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      <section className="w-full flex flex-col items-center justify-center py-10 px-4">
        <h2 className="text-2xl font-bold text-gray-800 py-4 uppercase">TECHNICAL SPECIALIZATIONS</h2>
        <div className="bg-white shadow-md rounded-2xl border-0 shadow-orange-300 p-6 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2">
              {left.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="rounded-full bg-primary p-1 mr-1.5"></div>
                  <span className='font-normal'>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {right.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="rounded-full bg-primary p-1 mr-1.5"></span>
                  <span className='font-normal'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Leadership