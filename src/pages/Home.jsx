import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Clock, Star, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const locationRef = useRef(null);

  const services = [
    {
      name: "Modern Haircuts",
      description: "Chic, contemporary cuts tailored to your unique style and features.",
      image: "https://images.unsplash.com/photo-1599387737204-1815855051b6?w=600&h=700&fit=crop"
    },
    {
      name: "Balayage & Ombré",
      description: "Hand-painted color for a natural, sun-kissed, and seamless look.",
      image: "https://images.unsplash.com/photo-1616099397989-1e3545e3f364?w=600&h=700&fit=crop"
    },
    {
      name: "Keratin Smoothing",
      description: "Tame frizz and achieve silky, smooth hair with our premium treatments.",
      image: "https://images.unsplash.com/photo-1605552259124-b3713f018d2d?w=600&h=700&fit=crop"
    },
    {
      name: "Gloss & Tone",
      description: "Enhance your color, add shine, and perfect your tone in one step.",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=700&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Olivia Sterling",
      text: "This salon is a hidden gem. The aesthetic is stunning, and the stylists are true artists. I've never been happier with my hair.",
      rating: 5,
    },
    {
      name: "James Maxwell",
      text: "A truly premium experience from start to finish. The attention to detail is unmatched. Highly recommend for men's grooming.",
      rating: 5,
    },
    {
      name: "Chloe Davis",
      text: "I came in for a balayage, and it's the best I've ever had. The color is so natural and beautifully blended. I feel amazing!",
      rating: 5,
    }
  ];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleHomeClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setIsMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#FDFBF8] font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500&display=swap');
        h1, h2, h3, h4, .font-serif {
          font-family: 'Playfair Display', serif;
        }
        body, p, button, a, span, div {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#FDFBF8]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 border-b border-neutral-200">
            <a href="#" onClick={handleHomeClick} className="font-serif text-2xl text-[#1A1A1A] tracking-tighter">
              Élan
            </a>
            
            <nav className="hidden md:flex items-center space-x-10">
              <button onClick={() => scrollToSection(servicesRef)} className="text-sm text-neutral-600 hover:text-[#1A1A1A] transition-colors">Services</button>
              <button onClick={() => scrollToSection(aboutRef)} className="text-sm text-neutral-600 hover:text-[#1A1A1A] transition-colors">About</button>
              <button onClick={() => scrollToSection(locationRef)} className="text-sm text-neutral-600 hover:text-[#1A1A1A] transition-colors">Contact</button>
              <Button variant="outline" className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white rounded-none px-6 text-sm font-normal">
                Book Now
              </Button>
            </nav>

            <button 
              className="md:hidden p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
               <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-neutral-900 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-neutral-900 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-neutral-900 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden absolute top-full left-0 w-full bg-[#FDFBF8] border-b border-neutral-200 py-6 px-6 space-y-4">
              <button onClick={() => scrollToSection(servicesRef)} className="block w-full text-left text-neutral-700 hover:text-[#1A1A1A]">Services</button>
              <button onClick={() => scrollToSection(aboutRef)} className="block w-full text-left text-neutral-700 hover:text-[#1A1A1A]">About</button>
              <button onClick={() => scrollToSection(locationRef)} className="block w-full text-left text-neutral-700 hover:text-[#1A1A1A]">Contact</button>
              <Button variant="outline" className="w-full mt-4 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white rounded-none px-6 font-normal">
                Book Now
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center min-h-[calc(100vh-80px)]">
            <div className="md:w-1/2 text-center md:text-left py-16 md:py-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#1A1A1A] leading-tight">
                Crafting Hair,<br />Defining Style.
              </h1>
              <p className="mt-6 max-w-md mx-auto md:mx-0 text-neutral-600 leading-relaxed">
                Welcome to Élan, a modern salon where artistry and individual expression converge. We specialize in personalized hair experiences that enhance your natural beauty.
              </p>
              <Button onClick={() => scrollToSection(servicesRef)} className="mt-10 bg-[#1A1A1A] text-white hover:bg-[#333] rounded-none px-8 py-6 text-base font-normal group">
                Explore Our Services <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="md:w-1/2 h-96 md:h-[calc(100vh-80px)]">
              <img 
                src="https://images.unsplash.com/photo-1597007259933-b3c107c81a2c?w=800&h=1200&fit=crop"
                alt="Stylish woman with modern haircut"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center md:text-left max-w-xl mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[#1A1A1A]">Our Expertise</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              We offer a curated menu of services, combining innovative techniques with the finest products to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-medium text-[#1A1A1A]">{service.name}</h3>
                  <p className="mt-2 text-neutral-600">{service.description}</p>
                  <button className="mt-4 text-sm font-medium text-[#1A1A1A] group-hover:text-[#E07A5F] transition-colors flex items-center">
                    Book This Service <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 bg-[#FDFBF8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1580616426867-6889a7f3d3b7?w=800&h=1000&fit=crop"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-medium text-[#1A1A1A]">The Élan Philosophy</h2>
              <div className="w-20 h-px bg-[#E07A5F] my-6"></div>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Élan was born from a passion for hair as a form of art. Our space is designed to be a creative sanctuary—minimalist, inspiring, and calming. We believe in the power of a great haircut to transform not just your look, but your confidence.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our team of stylists is dedicated to the craft of hairdressing, continuously learning and evolving to bring you the most current styles and techniques. We are committed to sustainability, using eco-conscious products and practices.
              </p>
              <Button onClick={() => scrollToSection(locationRef)} variant="link" className="p-0 mt-6 text-[#1A1A1A] h-auto hover:no-underline group">
                Meet Our Team <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center">
            <svg width="40" height="32" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-6 text-[#E07A5F]">
              <path d="M16.5185 38H0L12.3889 0H24.7778L16.5185 38ZM40.7963 38H24.2778L36.6667 0H49L40.7963 38Z" fill="currentColor"/>
            </svg>
            <div className="min-h-[150px]">
              <p className="text-2xl md:text-3xl font-serif text-[#1A1A1A] leading-snug">
                {testimonials[currentTestimonial].text}
              </p>
            </div>
            <p className="mt-8 text-sm tracking-widest uppercase text-neutral-500">
              {testimonials[currentTestimonial].name}
            </p>
          </div>
          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-[#1A1A1A]">
            <ChevronLeft />
          </button>
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-[#1A1A1A]">
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Location Section */}
      <section ref={locationRef} className="bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-20">
              <h2 className="text-4xl md:text-5xl font-medium">Get In Touch</h2>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                Visit our studio for a consultation or book your next appointment. We look forward to welcoming you.
              </p>
              <div className="mt-12 space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-4 text-[#E07A5F]"/>
                  <span className="text-neutral-200">123 Design District, Miami, FL 33137</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-4 text-[#E07A5F]"/>
                  <span className="text-neutral-200">hello@elansalon.co</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-4 text-[#E07A5F]"/>
                  <span className="text-neutral-200">(305) 555-0123</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 h-80 md:h-auto min-h-[400px]">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.569431448833!2d-80.19205568549936!3d25.792510983626245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b1a5d0e88385%3A0x62956e100f937d57!2sMiami%20Design%20District!5e0!3m2!1sen!2sus!4v1676391485641!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDFBF8] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} Élan Salon. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
               <a href="#" className="text-sm text-neutral-500 hover:text-[#1A1A1A]">Instagram</a>
               <a href="#" className="text-sm text-neutral-500 hover:text-[#1A1A1A]">Facebook</a>
               <a href="#" className="text-sm text-neutral-500 hover:text-[#1A1A1A]">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}