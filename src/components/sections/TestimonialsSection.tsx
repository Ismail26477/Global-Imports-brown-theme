import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechMart Electronics",
    content:
      "Global Imports transformed our supply chain. Their quality inspection process ensures we receive only the best products. Highly recommended for electronics importers!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Founder, HomeStyle Decor",
    content:
      "Working with Global Imports has been a game-changer for our home decor business. They handle everything from sourcing to delivery seamlessly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Amit Patel",
    role: "Director, Industrial Solutions Ltd",
    content:
      "The customs expertise of Global Imports saved us countless hours and potential penalties. Their team truly understands international trade regulations.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sneha Reddy",
    role: "Amazon FBA Seller",
    content:
      "As an e-commerce seller, I needed a reliable partner for product sourcing. Global Imports exceeded my expectations with their FBA-specific services.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-navy-dark text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl mt-2 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Trusted by importers, e-commerce sellers, and brands worldwide
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-12">
                    <Quote className="w-8 h-8 md:w-12 md:h-12 text-gold/30 mb-4 md:mb-6" />

                    <p className="text-base md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-3 md:gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-gold"
                      />
                      <div>
                        <h4 className="font-heading font-bold text-base md:text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/60 text-xs md:text-sm">
                          {testimonial.role}
                        </p>
                        <div className="flex gap-1 mt-1">
                          {Array.from({
                            length: testimonial.rating,
                          }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 md:w-4 md:h-4 text-gold fill-gold"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-gold w-6"
                    : "bg-white/30 w-2"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
