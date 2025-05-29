import React from 'react';
import { TrendingUp, Monitor, Film, Brush, LayoutDashboard, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="h-7 w-7" />, 
      title: "Digital Marketing", 
      description: "Maximize your brand’s impact with our expert digital marketing solutions, including SEO, social media management, and precision-targeted advertising."
    },
    {
      icon: <Monitor className="h-7 w-7" />, 
      title: "Web Designing", 
      description: "We craft stunning, responsive, and user-friendly websites designed to elevate your brand and drive success."
    },
    {
      icon: <Film className="h-7 w-7" />, 
      title: "Motion Graphics", 
      description: "Engage and inspire with breathtaking animations and dynamic motion graphics that bring your vision to life."
    },
    {
      icon: <LayoutDashboard className="h-7 w-7" />, 
      title: "Video Editing", 
      description: "Transform your vision into reality with expert video editing that captivates, inspires, and makes a lasting impression."
    },
    {
      icon: <Brush className="h-7 w-7" />, 
      title: "Graphics Designing", 
      description: "Turn ideas into stunning visuals with our expert graphic design services, covering everything from branding to promotional materials."
    },
    {
      icon: <Box className="h-7 w-7" />, 
      title: "3D Modeling", 
      description: "Bring your concepts to reality with precision-crafted 3D modeling for various applications including gaming, architecture, animation, and beyond."
    }
  ];

  return (
    <motion.section
      id="services"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-indigo-600 font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Comprehensive Digital Solutions to Elevate Your Brand</h2>
          <p className="text-gray-600">
          We provide comprehensive digital marketing solutions designed to align with your business goals and drive lasting growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
