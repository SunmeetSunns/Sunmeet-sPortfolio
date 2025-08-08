import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  // };
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'service_jjz8rx6',
    'template_xze2fjr',
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    },
    'MYIt6-bgkEo5-KegM'
  )
  .then((result) => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }, (error) => {
    alert('Failed to send the message. Please try again.');
    console.error(error.text);
  });
};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 px-6 text-white overflow-hidden">
      {/* Enhanced floating cosmic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-40"
          style={{ transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.02}deg)` }}
        ></div>
        <div 
          className="absolute top-1/2 right-16 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50"
          style={{ transform: `translateY(${scrollY * -0.08}px) rotate(${scrollY * -0.03}deg)` }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-35"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-60"
          style={{ transform: `translateY(${scrollY * -0.06}px) rotate(${scrollY * -0.04}deg)` }}
        ></div>
        <div 
          className="absolute top-1/4 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-45"
          style={{ transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * 0.06}deg)` }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          style={{ transform: `translateY(${Math.max(0, (scrollY - 2400) * -0.1)}px)` }}
        >
          Let's Connect Across the Galaxy
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            className="space-y-8"
            style={{ transform: `translateY(${Math.max(0, (scrollY - 2600) * -0.03)}px)` }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 hover:transform hover:translateX-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">kaursunmeet624@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:transform hover:translateX-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+91 639xxxxx12</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:transform hover:translateX-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">Available for Remote Work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-bold mb-6 text-center">Let's Connect</h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/SunmeetSunns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110 group hover:rotate-12"
                >
                  <Github className="w-6 h-6 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sunmeet-kaur-sachdeva-0b5374228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 group hover:rotate-12"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-white" />
                </a>
                <a
                  href="mailto:kaursunmeet624@gmail.com.com"
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110 group hover:rotate-12"
                >
                  <Mail className="w-6 h-6 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
            style={{ transform: `translateY(${Math.max(0, (scrollY - 2600) * 0.02)}px)` }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="hover:transform hover:translateY-1 transition-transform duration-300">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300 hover:border-blue-500/50"
                  placeholder="xyz"
                  required
                />
              </div>

              <div className="hover:transform hover:translateY-1 transition-transform duration-300">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300 hover:border-blue-500/50"
                  placeholder="xyz@gmail.com"
                  required
                />
              </div>

              <div className="hover:transform hover:translateY-1 transition-transform duration-300">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300 resize-none hover:border-blue-500/50"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold hover:rotate-1"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
