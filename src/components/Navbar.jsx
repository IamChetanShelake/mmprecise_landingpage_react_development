// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { images } from '../assets';
// import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [aboutSubmenu, setAboutSubmenu] = useState(false);
//   const [newsSubmenu, setNewsSubmenu] = useState(false);

//   return (
//     <div className="text-sm w-full">
//       <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 shadow">

//         {/* Logo */}
//         <div>
//           <img src={images.logo} alt="logo" className="w-16 h-16" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8 md:pl-28">

//           <Link to="/" className="hover:text-primary transition-colors">Home</Link>

//           {/* About Dropdown */}
//           <div
//             className="relative group"
//           >
//             <div className="flex items-center cursor-pointer group-hover:text-primary transition-colors">
//               About <FiChevronDown className="ml-1" />
//             </div>
//             <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-4 mt-2 space-y-2">
//               <Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link>
//               <Link to="/leadership" className="hover:text-primary transition-colors">Leadership</Link>
//             </div>
//           </div>

//           <Link to="/expertise" className="hover:text-primary transition-colors">Expertise</Link>
//           <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
//           <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>

//           {/* News & Media Dropdown */}
//           <div
//             className="relative group"
//           >
//             <div className="flex items-center cursor-pointer group-hover:text-primary transition-colors">
//               News & Media <FiChevronDown className="ml-1" />
//             </div>
//             <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-4 mt-2 space-y-2 w-[180px]">
//               <Link to="/news-updates" className="hover:text-primary transition-colors">News Updates</Link>
//               <Link to="/media-coverage" className="hover:text-primary transition-colors">Media Coverage</Link>
//               <Link to="/csr" className="hover:text-primary transition-colors">CSR</Link>
//             </div>
//           </div>
//         </div>

//         {/* Contact Button */}
//         <button className="hidden md:inline bg-white hover:bg-gray-50 border border-gray-300 ml-20 px-9 py-2 rounded-full active:scale-95 transition-all hover:text-primary">
//           Contact Us
//         </button>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden active:scale-90 transition">
//           {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
//         </button>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 flex flex-col space-y-4 text-lg md:hidden">

//             <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-primary">Home</Link>

//             {/* About Mobile Dropdown */}
//             <div>
//               <button onClick={() => setAboutSubmenu(!aboutSubmenu)} className="flex items-center hover:text-primary">
//                 About <FiChevronDown className="ml-1" />
//               </button>
//               {aboutSubmenu && (
//                 <div className="ml-4 mt-2 space-y-2 text-base">
//                   <Link to="/about-us" className="hover:text-primary">About Us</Link>
//                   <Link to="/leadership" className="hover:text-primary">Leadership</Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/expertise" onClick={() => setMenuOpen(false)} className="hover:text-primary">Expertise</Link>
//             <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-primary">Projects</Link>
//             <Link to="/careers" onClick={() => setMenuOpen(false)} className="hover:text-primary">Careers</Link>

//             {/* News Mobile Dropdown */}
//             <div>
//               <button onClick={() => setNewsSubmenu(!newsSubmenu)} className="flex items-center hover:text-primary">
//                 News & Media <FiChevronDown className="ml-1" />
//               </button>
//               {newsSubmenu && (
//                 <div className="ml-4 mt-2 space-y-6 text-base">
//                   <Link to="/news-updates" className="hover:text-primary">News Updates</Link>
//                   <Link to="/media-coverage" className="hover:text-primary">Media Coverage</Link>
//                   <Link to="/csr" className="hover:text-primary">CSR</Link>
//                 </div>
//               )}
//             </div>

//             <button className="bg-white text-gray-600 border border-gray-300 mt-4 px-8 py-2 rounded-full active:scale-95 hover:text-primary">
//               Contact Us
//             </button>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// }

// export default Navbar;




import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { CgArrowTopRight } from 'react-icons/cg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutSubmenu, setAboutSubmenu] = useState(false);
  const [newsSubmenu, setNewsSubmenu] = useState(false);

  const navRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setAboutSubmenu(false);
        setNewsSubmenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setAboutSubmenu(false);
    setNewsSubmenu(false);
  }, [window.location.pathname]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setAboutSubmenu(false);
    setNewsSubmenu(false);
  };

  return (
    <div className="text-sm w-full" ref={navRef}>
      <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 shadow">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={images.logo} alt="logo" className="w-16 h-16" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 md:pl-28">
          <Link
            to="/"
            className="hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutSubmenu(true)}
            onMouseLeave={() => setAboutSubmenu(false)}
          >
            <div className="flex items-center cursor-pointer hover:text-primary transition-colors duration-200">
              About <FiChevronDown className="ml-1  duration-200 group-hover:rotate-180" />
            </div>
            {aboutSubmenu && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 mt-2 space-y-3 min-w-[180px] z-50 border border-gray-100">
                <Link
                  to="/about-us"
                  className="block hover:text-primary "
                >
                  About Us
                </Link>
                <Link
                  to="/leadership"
                  className="block hover:text-primary "
                >
                  Leadership
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/expertise"
            className="hover:text-primary transition-colors duration-200"
          >
            Expertise
          </Link>

          <Link
            to="/projects"
            className="hover:text-primary transition-colors duration-200"
          >
            Projects
          </Link>

          <Link
            to="/careers"
            className="hover:text-primary transition-colors duration-200"
          >
            Careers
          </Link>

          {/* News & Media Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setNewsSubmenu(true)}
            onMouseLeave={() => setNewsSubmenu(false)}
          >
            <div className="flex items-center cursor-pointer hover:text-primary transition-colors duration-200">
              News & Media <FiChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            {newsSubmenu && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 mt-2 space-y-3 min-w-[180px] z-50 border border-gray-100">
                <Link
                  to="/news-updates"
                  className="block hover:text-primary "
                >
                  News Updates
                </Link>
                <Link
                  to="/media-coverage"
                  className="block hover:text-primary "
                >
                  Media Coverage
                </Link>
                <Link
                  to="/csr"
                  className="block hover:text-primary "
                >
                  CSR
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Contact Button */}
        <button className="hidden md:flex items-center gap-2 bg-white border border-primary ml-20 px-9 py-2 rounded-full transition-all duration-200 hover:shadow-md">
          <span>Contact Us</span>
          <CgArrowTopRight className="w-5 h-5" />
        </button>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden active:scale-90 transition p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4 text-lg md:hidden z-50 border-t border-gray-200">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="py-2 hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>

            {/* About Mobile Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => setAboutSubmenu(!aboutSubmenu)}
                className="flex items-center justify-between w-full py-2 hover:text-primary transition-colors duration-200"
              >
                <span>About</span>
                <FiChevronDown
                  className={`ml-1 transition-transform duration-200 ${aboutSubmenu ? 'rotate-180' : ''}`}
                />
              </button>
              {aboutSubmenu && (
                <div className="ml-4 mt-2 space-y-3 text-base">
                  <Link
                    to="/about-us"
                    onClick={handleLinkClick}
                    className="block py-1 hover:text-primary transition-colors duration-200"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/leadership"
                    onClick={handleLinkClick}
                    className="block py-1 hover:text-primary transition-colors duration-200"
                  >
                    Leadership
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/expertise"
              onClick={handleLinkClick}
              className="py-2 hover:text-primary transition-colors duration-200 border-b border-gray-100"
            >
              Expertise
            </Link>

            <Link
              to="/projects"
              onClick={handleLinkClick}
              className="py-2 hover:text-primary transition-colors duration-200 border-b border-gray-100"
            >
              Projects
            </Link>

            <Link
              to="/careers"
              onClick={handleLinkClick}
              className="py-2 hover:text-primary transition-colors duration-200 border-b border-gray-100"
            >
              Careers
            </Link>

            {/* News Mobile Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => setNewsSubmenu(!newsSubmenu)}
                className="flex items-center justify-between w-full py-2 hover:text-primary transition-colors duration-200"
              >
                <span>News & Media</span>
                <FiChevronDown
                  className={`ml-1 transition-transform duration-200 ${newsSubmenu ? 'rotate-180' : ''}`}
                />
              </button>
              {newsSubmenu && (
                <div className="ml-4 mt-2 space-y-3 text-base">
                  <Link
                    to="/news-updates"
                    onClick={handleLinkClick}
                    className="block py-1 hover:text-primary transition-colors duration-200"
                  >
                    News Updates
                  </Link>
                  <Link
                    to="/media-coverage"
                    onClick={handleLinkClick}
                    className="block py-1 hover:text-primary transition-colors duration-200"
                  >
                    Media Coverage
                  </Link>
                  <Link
                    to="/csr"
                    onClick={handleLinkClick}
                    className="block py-1 hover:text-primary transition-colors duration-200"
                  >
                    CSR
                  </Link>
                </div>
              )}
            </div>

            <button className="flex items-center gap-2 bg-white text-primary border border-gray-300 mt-4 px-8 py-3 rounded-full active:scale-95 hover:bg-gray-50 hover:shadow-md transition-all duration-200">
              <span>Contact Us</span>
              <CgArrowTopRight className="w-5 h-5" />
            </button>

          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;