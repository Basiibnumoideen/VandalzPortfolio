import {  Facebook, Instagram, Linkedin, ArrowUp, } from "lucide-react";
import FadeMotion from "./FadeMotion"; // Adjust the import path if needed
import { X } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FadeMotion direction="up">
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                
                <span className="ml-2 text-xl font-bold">Vandalz Productions</span>
              </div>
              <p className="text-gray-400 mb-6">
              We empower businesses to grow through strategic digital marketing solutions designed to drive measurable results and deliver a strong return on investment (ROI).
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                 <X className="h-5 w-5 text-white" />
                </a>
                <a href="https://www.instagram.com/vandalz_designs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <svg
                    className="h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.969.573 3.807 1.556 5.35L2 22l4.783-1.534A9.947 9.947 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm5.014 13.767c-.206.58-1.203 1.14-1.679 1.186-.436.04-.998.074-1.615-.147-.372-.127-.851-.275-1.47-.54-2.582-1.096-4.261-3.665-4.392-3.838-.13-.173-1.049-1.396-1.049-2.664s.664-1.892.9-2.15c.22-.236.483-.296.645-.296h.468c.15 0 .35-.046.547.417.206.48.699 1.648.762 1.77.06.122.1.264.02.42-.076.155-.115.265-.229.404-.122.148-.242.264-.365.413-.116.143-.245.3-.106.58.138.279.612 1.009 1.318 1.63.908.805 1.675 1.053 1.969 1.17.205.08.457.06.594-.087.187-.19.42-.548.667-.882.173-.233.386-.26.61-.178.229.08 1.456.685 1.706.812.25.127.415.19.478.3.067.104.067.6-.14 1.18Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-4">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Designing</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Motion Graphics</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Video Editing</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Graphics Designing</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">3D Modeling</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
             <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2"> {/* Reduced spacing */}
               <li className="text-gray-400 p-1 space-y-4">123 Digital Avenue<br />San Francisco, CA 94107</li>
               <li><a href="tel:+919745972524" className="text-gray-400 hover:text-white transition-colors p-1 ">+91 97459 72524</a></li>
               <li><a href="tel:+919745972524" className="text-gray-400 hover:text-white transition-colors p-1">+91 90483 62821</a></li>
                <li><a href="tel:+919745972524" className="text-gray-400 hover:text-white transition-colors p-1">+974 5039 9217</a></li>
                <li><a href="mailto:vandalzvlz@gmail.com" className="text-gray-400 hover:text-white transition-colors p-1">vandalzvlz@gmail.com</a></li>
            </ul>
          </div>

          </div>

          <hr className="border-gray-800 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Vandalz Productions. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </footer>
    </FadeMotion>
  );
};

export default Footer;
