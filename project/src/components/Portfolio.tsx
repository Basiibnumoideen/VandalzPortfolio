import { useState } from "react";

{/*  import { ExternalLink } from "lucide-react";        --THIS IS CASE STUDY*/}
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import motiongraphics1 from "../assets/portfolio/motion graphics/90-app-vidburner.com.mp4"
import motiongraphics2 from "../assets/portfolio/motion graphics/motion graphics 2.mov"
import motiongraphics3 from "../assets/portfolio/motion graphics/impex-tv-electronics-vidburner.com.mp4"
import motiongraphics4 from "../assets/portfolio/motion graphics/myg-world-vidburner.com.mp4"
import motiongraphics5 from "../assets/portfolio/motion graphics/vkc-pride-vidburner.com.mp4"
import motiongraphics6 from "../assets/portfolio/motion graphics/xylem-learning-app-vidburner.com.mp4"
import motiongraphics7 from "../assets/portfolio/motion graphics/haritham-food-vidburner.com.mp4"


import graphicsdesign_1 from "../assets/portfolio/graphics design/WhatsApp Image 2025-03-10 at 12.46.56_546fbb19.jpg"; // Adjust the path if needed
import graphicsdesign_2 from "../assets/portfolio/graphics design/Artboard 1.png"; // Adjust the path if needed




const categories = [
  "All", "Digital Marketing", "Web Designing", "Motion Graphics",
  "Video Editing", "Graphics Designing", "3D Modeling"
];

const projects = [
  //graphics design
  {
    title: "Custom Design",
    category: "Graphics Designing",
    image: graphicsdesign_1,
    description: "A creative design project for a brand identity revamp."
  },
  {
    title: "Custom Design",
    category: "Graphics Designing",
    image: graphicsdesign_2,
    description: "A creative design project for a brand identity revamp."
  },
// Motion graphics 
  {
    title: "GreenEarth Campaign",
    category: "Motion Graphics",
    video: motiongraphics1,
    description: "Sustainability-focused content strategy that increased engagement."
  },
  {
    title: "GreenEarth Campaign",
    category: "Motion Graphics",
    video: motiongraphics2,
    description: "Sustainability-focused content strategy that increased engagement."
  },
  {
    title: "GreenEarth Campaign",
    category: "Motion Graphics",
    video: motiongraphics3,
    description: "Sustainability-focused content strategy that increased engagement."
  },
  {
    title: "GreenEarth Campaign",
    category: "Motion Graphics",
    video: motiongraphics4,
    description: "Sustainability-focused content strategy that increased engagement."
  },
  {
    title: "GreenEarth Campaign",
    category: "Motion Graphics",
    video: motiongraphics5,
    description: "Sustainability-focused content strategy that increased engagement."
  },
  {
    title: "GreenEarth Campaign",
    category: "Motion Graphics",
    video: motiongraphics6,
    description: "Sustainability-focused content strategy that increased engagement."
  },
  {
    title: "GreenEarth Campaign",
    category: "Motion Graphics",
    video: motiongraphics7,
    description: "Sustainability-focused content strategy that increased engagement."
  },

  //Digital Markating
  {
    title: "LuxuryStay SEO",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Comprehensive SEO strategy for a luxury hotel chain."
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-indigo-600 font-medium">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Featured Projects</h2>
          <p className="text-gray-600">Explore our recent work.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-indigo-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          speed={1000}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="portfolio-carousel"
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-2xl shadow-md bg-white">
                <div className="relative aspect-video overflow-hidden">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-center text-sm px-4">{project.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-indigo-600">{project.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{project.title}</h3>
                   {/*
                  <a href="#" className="inline-flex items-center text-indigo-600 font-medium mt-4 hover:text-indigo-700">
                    View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
