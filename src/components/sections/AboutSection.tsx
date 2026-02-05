'use client';

import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Direct partnerships with verified manufacturers",
  "Access to competitive pricing & exclusive products",
  "Fast sourcing & production timelines",
];

const evolution = [
  { label: "Before", text: "Limited product categories" },
  { label: "Now", text: "Multi-category sourcing expertise" },
  { label: "Focus", text: "E-commerce & global marketplace sellers" },
];

const stats = [
  { value: "16+", label: "Years in Global Trade" },
  { value: "Expert", label: "Professional Management" },
  { value: "Global", label: "China & 50+ Countries" },
  { value: "Multi", label: "Diverse Solutions" },
];

export function AboutSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section-padding world-map-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-xs sm:text-sm">
              About Us
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy-dark mt-2 mb-4 sm:mb-6">
              Your Trusted{" "}
              <span className="text-gradient-gold">Global Trade Partner</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              <strong className="text-navy-dark">Hassle-free Import & Global E-Commerce Sourcing</strong>
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              We bridge the gap between Indian businesses and global manufacturers, 
              making international trade simple and profitable. With over 16 years 
              of experience, we've helped hundreds of businesses source quality 
              products from trusted suppliers worldwide.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0" />
                  <span className="text-sm sm:text-base text-navy-dark">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h4 className="font-heading font-bold text-sm sm:text-base text-navy-dark mb-3 sm:mb-4">
                Our Evolution
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {evolution.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <span className="px-2 sm:px-3 py-1 bg-gold text-navy-dark text-xs sm:text-sm font-medium rounded-full">
                      {item.label}:
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={scrollToContact} className="btn-gold">
              Start Your Trade Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right Content - Images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                  alt="Warehouse operations"
                  className="w-full h-32 sm:h-48 object-cover"
                />
              </div>
              <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                  alt="Global shipping"
                  className="w-full h-40 sm:h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
              <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80"
                  alt="Container shipping"
                  className="w-full h-40 sm:h-64 object-cover"
                />
              </div>
              <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80"
                  alt="Quality inspection"
                  className="w-full h-32 sm:h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 md:mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm card-hover"
            >
              <div className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
