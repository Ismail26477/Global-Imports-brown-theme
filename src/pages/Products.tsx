import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ChatBot } from "../components/ChatBot";
import { X, Package, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Industrial Goods",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    description: "Heavy machinery, equipment, and industrial supplies from certified manufacturers.",
    products: ["CNC Machines", "Power Tools", "Industrial Motors", "Conveyor Systems", "Welding Equipment"],
  },
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    description: "Consumer and industrial electronics from trusted Asian manufacturers.",
    products: ["LED Displays", "Audio Equipment", "Smart Devices", "Components", "Accessories"],
  },
  {
    name: "Machinery",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=80",
    description: "Manufacturing and processing equipment for various industries.",
    products: ["Packaging Machines", "Food Processing", "Textile Machinery", "Printing Equipment", "Agricultural Machinery"],
  },
  {
    name: "Raw Materials",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    description: "Quality raw materials including textiles, metals, and chemicals.",
    products: ["Fabrics", "Steel", "Plastics", "Chemicals", "Wood Products"],
  },
  {
    name: "Consumer Products",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    description: "Retail and household items for e-commerce and retail businesses.",
    products: ["Home Decor", "Kitchen Items", "Personal Care", "Toys", "Fashion Accessories"],
  },
  {
    name: "Textiles",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=600&q=80",
    description: "Fabrics, garments, and textile products from quality mills.",
    products: ["Cotton Fabrics", "Synthetic Materials", "Ready-made Garments", "Home Textiles", "Industrial Textiles"],
  },
  {
    name: "Automotive Parts",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    description: "Quality automotive components and spare parts from reliable manufacturers.",
    products: ["Engine Parts", "Brake Systems", "Electrical Components", "Body Parts", "Accessories"],
  },
  {
    name: "Medical Equipment",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80",
    description: "Medical devices and healthcare equipment meeting international standards.",
    products: ["Diagnostic Equipment", "Surgical Instruments", "Hospital Furniture", "Lab Equipment", "PPE"],
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy via-navy-dark to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy-dark/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Products</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Product <span className="text-gradient-gold">Categories</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              We source and import a wide range of products from verified manufacturers 
              across the globe. Explore our categories below.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(category)}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-soft card-hover border border-transparent hover:border-gold/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                        <Package className="w-4 h-4 text-navy-dark" />
                      </div>
                      {category.name}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white mb-6">
            Can't Find What You're <span className="text-gradient-gold">Looking For?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            We can source virtually any product from verified global manufacturers. 
            Contact us with your requirements.
          </p>
          <Button onClick={() => navigate("/contact")} className="btn-gold group">
            Request Custom Sourcing
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-navy-dark/90 backdrop-blur-md"
            onClick={() => setSelectedCategory(null)}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
            <div className="relative h-48 sm:h-56 md:h-64">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/50 to-transparent" />
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
                  {selectedCategory.name}
                </h3>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedCategory.description}
              </p>

              <h4 className="font-heading font-bold text-navy-dark mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                Popular Products:
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory.products.map((product, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-muted to-muted/50 rounded-full text-sm font-medium text-navy border border-border"
                  >
                    {product}
                  </span>
                ))}
              </div>

              <Button onClick={() => { setSelectedCategory(null); navigate("/contact"); }} className="w-full btn-gold group">
                <span>Request Quote for {selectedCategory.name}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
