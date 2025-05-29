import { ArrowRight, BarChart2, TrendingUp, Users } from 'lucide-react';
import FadeMotion from './FadeMotion'; // Import the animation component
import heroImage from '../assets/hero/Untitled design.png';


const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <FadeMotion direction="up">
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4">
                Digital Marketing Agency
              </span>
            </FadeMotion>

            <FadeMotion direction="left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Innovate With Vision.<span className="text-indigo-600"> Design With Purpose.</span>
              </h1>
            </FadeMotion>

            <FadeMotion direction="right" delay={0.3}>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We craft innovative digital marketing strategies that drive real growth and lasting success. Our expert team specializes in SEO, social media, paid advertising, and content marketing to help your business attract, engage, and convert your ideal audience.
              </p>
            </FadeMotion>

            <FadeMotion direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#services" className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-full border border-indigo-200 hover:border-indigo-300 transition-colors flex items-center justify-center">
                  Our Services
                </a>
              </div>
            </FadeMotion>

            <FadeMotion direction="up" delay={0.7}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                <div className="flex items-center">
                  <BarChart2 className="h-6 w-6 text-indigo-600 mr-2" />
                  <span className="text-gray-700 font-medium">Data-Driven</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-indigo-600 mr-2" />
                  <span className="text-gray-700 font-medium">Results-Focused</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-indigo-600 mr-2" />
                  <span className="text-gray-700 font-medium">Client-Centric</span>
                </div>
              </div>
            </FadeMotion>
          </div>

          <FadeMotion direction="right">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full opacity-70"></div>
              <img src={heroImage} alt="Hero Section"
      className="rounded-2xl shadow-xl w-full h-auto object-cover relative z-10"
    />
            </div>
          </FadeMotion>
        </div>
      </div>
    </section>
  );
};

export default Hero;
