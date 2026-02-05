'use client';

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80",
    slogan: "Your Gateway to Global Trade",
    description:
      "We connect your business to verified global suppliers and manage the complete import-export process from sourcing to delivery.",
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",
    slogan: "From Local Needs to Global Supply",
    description:
      "Tell us what you need. Our team finds the right manufacturers worldwide and handles inspection, shipping, and compliance.",
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
    slogan: "Where Global Sourcing Meets Trust",
    description:
      "With on-ground verification and strict quality checks, we ensure you import only from reliable and trusted factories.",
  },
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80",
    slogan: "Trade Without Boundaries",
    description:
      "We simplify international trade by managing logistics, documentation, customs clearance, and safe delivery to your doorstep.",
  },
  {
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80",
    slogan: "Smart Sourcing. Seamless Logistics.",
    description:
      "End-to-end sourcing, freight management, and compliance support so you can focus on growing your business.",
  },
];

const stats = [
  { value: "500+", label: "Products Sourced" },
  { value: "50+", label: "Countries Served" },
  { value: "98%", label: "Success Rate" },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[60vh] sm:h-[75vh] md:h-screen min-h-[480px] sm:min-h-[520px] overflow-hidden">
      
      {/* SLIDER */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 to-navy-dark/60" />
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 sm:px-5">
          <div className="max-w-3xl text-white">

            <span className="inline-block px-2 sm:px-3 py-1 bg-gold/20 text-gold rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Trusted by 500+ Businesses
            </span>

            {/* Dynamic Slogan */}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
              {slides[current].slogan}
            </h1>

            {/* Dynamic Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl transition-all duration-700">
              {slides[current].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="btn-gold px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>

              <Button
                onClick={() => scrollToSection("#products")}
                className="bg-white text-navy-dark hover:bg-white/90 px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="glass rounded-t-2xl py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="font-heading text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy-dark">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
