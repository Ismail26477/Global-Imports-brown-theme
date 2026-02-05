import { useState } from "react";
import { X, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Industrial Goods",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    description:
      "Heavy machinery, equipment, and industrial supplies from certified manufacturers.",
    products: [
      "CNC Machines",
      "Power Tools",
      "Industrial Motors",
      "Conveyor Systems",
      "Welding Equipment",
    ],
  },
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    description:
      "Consumer and industrial electronics from trusted Asian manufacturers.",
    products: [
      "LED Displays",
      "Audio Equipment",
      "Smart Devices",
      "Components",
      "Accessories",
    ],
  },
  {
    name: "Machinery",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=80",
    description:
      "Manufacturing and processing equipment for various industries.",
    products: [
      "Packaging Machines",
      "Food Processing",
      "Textile Machinery",
      "Printing Equipment",
      "Agricultural Machinery",
    ],
  },
  {
    name: "Raw Materials",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    description:
      "Quality raw materials including textiles, metals, and chemicals.",
    products: ["Fabrics", "Steel", "Plastics", "Chemicals", "Wood Products"],
  },
  {
    name: "Consumer Products",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    description:
      "Retail and household items for e-commerce and retail businesses.",
    products: [
      "Home Decor",
      "Kitchen Items",
      "Personal Care",
      "Toys",
      "Fashion Accessories",
    ],
  },
  {
    name: "Textiles",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=600&q=80",
    description:
      "Fabrics, garments, and textile products from quality mills.",
    products: [
      "Cotton Fabrics",
      "Synthetic Materials",
      "Ready-made Garments",
      "Home Textiles",
      "Industrial Textiles",
    ],
  },
];

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[0] | null>(null);

  const scrollToContact = () => {
    setSelectedCategory(null);
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-navy-dark mt-2 mb-4">
            Product Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We handle all major product categories from trusted manufacturers
          </p>
        </div>

        {/* ✅ 2 cards per row on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(category)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm card-hover"
            >
              <div className="relative h-32 md:h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                  <h3 className="font-heading font-bold text-sm md:text-xl text-white flex items-center gap-2">
                    <Package className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
            onClick={() => setSelectedCategory(null)}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
            <div className="relative h-64">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent" />
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading font-bold text-3xl text-white">
                  {selectedCategory.name}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-muted-foreground mb-6">
                {selectedCategory.description}
              </p>

              <h4 className="font-heading font-bold text-navy-dark mb-4">
                Popular Products:
              </h4>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory.products.map((product, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-navy"
                  >
                    {product}
                  </span>
                ))}
              </div>

              <Button onClick={scrollToContact} className="w-full btn-gold">
                Request Quote for {selectedCategory.name}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
