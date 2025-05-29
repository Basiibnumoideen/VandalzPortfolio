import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Digital Marketing'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully! We'll contact you soon.");
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'Digital Marketing',
      });
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch {
    alert("An error occurred. Please check your connection.");
  }
};

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-medium">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Ready to elevate your digital presence? Contact us today to discuss how we can help you achieve your business goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="john@gmail.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="+91 123-4567-890"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                >
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Web Designing">Web Designing</option>
                  <option value="Motion Graphics">Motion Graphics</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Graphics Designing">Graphics Designing</option>
                  <option value="3D Modeling">3D Modeling</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <a href="mailto:vandalzvlz@gmail.com" className="text-indigo-600 hover:text-indigo-700">vandalzvlz@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                     Shinshad Sakeer [MarketMinds]  : <a href="tel:+91 97459 72524" className="text-indigo-600 hover:text-indigo-700">+91 97459 72524  </a> <br />
                     Sourav SV        [MarketMinds] : <a href="tel:+91 90483 62821" className="text-indigo-600 hover:text-indigo-700">+91 90483 62821 </a> <br />
                     Farhan Akther   [MarketMinds]  : <a href="tel:+974 5039 9217" className="text-indigo-600 hover:text-indigo-700">+974 5039 9217 </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600">
                      123 Digital Avenue<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;