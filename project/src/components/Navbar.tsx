import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Logo from "../assets/logo/logos.png"; // Import the SVG

<div className="flex items-center">
  <span className="text-xl font-bold text-gray-900">
    <img 
      src={Logo} 
      className="h-14 w-36" // Increased width
      alt="Vandalz Productions Logo"
    />
  </span>
</div>



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }} // Starts Invisible & Above Screen
      animate={{ opacity: 1, y: 0 }} // Fades Down
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth Transition
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Brand Name */}
          

<div className="flex items-center">
  <span className="text-xl font-bold text-gray-900">
    <img 
      src={Logo} 
      className="h-16 w-auto" // Adjust the size
      alt="Vandalz Productions Logo"
    />
  </span>
</div>



          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["home", "services", "about", "portfolio", "testimonials", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="hidden md:inline-block cursor-pointer bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors text-nowrap"
              >
            Get Started
            </Link>

          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4"
        >
          <div className="flex flex-col items-center space-y-4">
            {["home", "services", "about", "portfolio", "testimonials", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

            <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="cursor-pointer bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors">
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
