import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone, Mail, Home, Droplet, Building2, Trees, ShieldCheck, Menu, X } from "lucide-react";
import Logo from './assets/logo_resize.jpg';

export default function App() {
  const [activeService, setActiveService] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    { 
      title: "House Soft Wash", 
      icon: Home, 
      folder: "house-soft-wash",
      description: "Gentle, effective cleaning to restore your home's exterior." 
    },
    { 
      title: "Roof & Gutter Cleaning", 
      icon: Droplet, 
      folder: "roof-gutter-cleaning",
      description: "Protect your roof and gutters from damage and buildup." 
    },
    { 
      title: "Driveway & Sidewalk Cleaning", 
      icon: Trees, 
      folder: "driveway-sidewalk-cleaning",
      description: "Brighten your concrete surfaces for instant curb appeal." 
    },
    { 
      title: "Patio, Deck & Fence Refresh", 
      icon: Building2, 
      folder: "patio-deck-fence",
      description: "Rejuvenate outdoor living spaces with safe cleaning." 
    },
    { 
      title: "Surface Sealing", 
      icon: ShieldCheck, 
      folder: "surface-sealing",
      description: "Protect your surfaces from wear and weather." 
    },
    { 
      title: "Light Commercial Pressure Washing", 
      icon: Building2, 
      folder: "light-commercial",
      description: "Keep your business exterior spotless and professional." 
    },
  ];


  if(menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  } 

  return (
    <div className="font-sans text-gray-800 w-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-blue-700 text-white z-50 shadow-lg px-4 sm:px-6">
        <div className="flex justify-between items-center h-20 max-w-screen-xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-16 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-gray-200">About Us</a>
            <a href="#services" className="hover:text-gray-200">Services</a>
            <a href="#reviews" className="hover:text-gray-200">Reviews</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
          </div>

          {/* CTA Button */}
          <a href="#contact" className="hidden md:block bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-300">
            Get a Free Quote
          </a>

          {/* Hamburger Icon (Mobile) */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-blue-600"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 bg-opacity-50 z-50"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-blue-700 text-white z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b border-blue-500">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-6">
          <a href="#about" className="hover:text-gray-200" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#services" className="hover:text-gray-200" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#reviews" className="hover:text-gray-200" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#contact" className="hover:text-gray-200" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-300" onClick={() => setMenuOpen(false)}>
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="h-screen bg-blue-50 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-blue-800 max-w-2xl">
          Your Local Power Washing Pros
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-xl">
          Serving Spring and Surrounding Areas
        </p>
        <a href="#services" className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
          Explore Our Services
        </a>
      </header>

      {/* About */}
      <section id="about" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center md:text-left">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Spring Clean Exteriors is family-owned and locally operated. We’re proud to serve our neighbors with trusted, high-quality exterior cleaning.
          </p>
          <p className="text-lg text-gray-700">
            Founded by Josh Corbitt – husband to an amazing wife, mom, and accomplished local Choir Director, and proud dad of two young children (ages 3 and 5). We understand what it means to have your hands full, and that's why Spring Clean Exteriors is here – to take something off your plate and keep your home looking its best.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Services</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition h-full flex flex-col">
                <service.icon className="h-12 w-12 text-blue-700 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  className="text-blue-700 font-semibold hover:underline"
                  onClick={() => setActiveService(activeService === idx ? null : idx)}
                >
                  {activeService === idx ? "Close" : "Learn More"}
                </button>
                {activeService === idx && (
                  <div className="mt-4 space-y-4">
                    <p className="text-gray-600">Before & After gallery:</p>
                    <img src={`/assets/${service.folder}/before.jpg`} alt="Before" className="w-full rounded shadow" onError={(e)=>e.target.style.display='none'} />
                    <img src={`/assets/${service.folder}/after.jpg`} alt="After" className="w-full rounded shadow" onError={(e)=>e.target.style.display='none'} />
                    <video controls className="w-full rounded shadow" onError={(e)=>e.target.style.display='none'}>
                      <source src={`/assets/${service.folder}/demo.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="text-sm text-gray-500">👉 Add before.jpg, after.jpg, or demo.mp4 in /public/assets/{service.folder}/ to showcase your work.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-700 italic">We proudly use eco-friendly cleaning solutions.</p>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Customer Reviews</h2>
          <p className="text-gray-700">⭐️⭐️⭐️⭐️⭐️ "Spring Clean Exteriors made our house look brand new! Highly recommend!"</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">Ask us about our House Soft Wash and Roof Cleaning Specials!</p>
          </div>
          <div className="space-y-4">
            <p className="flex items-center gap-2 justify-center md:justify-start"><Phone /> (555) 123-4567</p>
            <p className="flex items-center gap-2 justify-center md:justify-start"><Mail /> info@springcleanexteriors.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 px-4">
        <p>&copy; {new Date().getFullYear()} Spring Clean Exteriors. All rights reserved.</p>
      </footer>
    </div>
  );
}
