import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { ChatBot } from "../../components/ChatBot";
import { Globe, CheckCircle, ArrowRight, Sparkles, MapPin, Users, Shield, Clock } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  "Access to verified manufacturers in China, Vietnam, and 50+ countries",
  "Direct factory relationships for competitive pricing",
  "Product sampling and quality verification",
  "Supplier audits and background checks",
  "Negotiation support for better terms",
  "Multi-category sourcing expertise",
];

const countries = [
  { name: "China", flag: "🇨🇳", specialty: "Electronics, Machinery, Textiles" },
  { name: "Vietnam", flag: "🇻🇳", specialty: "Garments, Footwear, Furniture" },
  { name: "India", flag: "🇮🇳", specialty: "Pharmaceuticals, Textiles, Spices" },
  { name: "Thailand", flag: "🇹🇭", specialty: "Automotive, Electronics, Food" },
  { name: "Indonesia", flag: "🇮🇩", specialty: "Palm Oil, Rubber, Textiles" },
  { name: "Bangladesh", flag: "🇧🇩", specialty: "Garments, Leather, Jute" },
];

const benefits = [
  { icon: Shield, title: "Verified Suppliers", description: "All suppliers undergo rigorous verification" },
  { icon: Users, title: "Direct Access", description: "Connect directly with manufacturers" },
  { icon: Clock, title: "Fast Turnaround", description: "Quick sourcing within 7-14 days" },
  { icon: MapPin, title: "Global Reach", description: "Access to 50+ countries worldwide" },
];

export default function GlobalSourcing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy via-navy-dark to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy-dark/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Services</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Global <span className="text-gradient-gold">Sourcing</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Access verified manufacturers across China, Vietnam, and 50+ countries. 
              We find the best suppliers for your specific product needs with competitive pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => navigate("/contact")} className="btn-gold group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/products")}
                className="border-white/30 text-white hover:bg-white/10"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium uppercase tracking-wider text-sm">What We Offer</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-6">
                Comprehensive <span className="text-gradient-gold">Sourcing Solutions</span>
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-navy-dark" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-soft border border-border card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/10 to-cyan/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-dark mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-4">
              Our <span className="text-gradient-cyan">Global Network</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have established relationships with verified suppliers across these key manufacturing hubs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft border border-border card-hover">
                <div className="text-4xl mb-4">{country.flag}</div>
                <h3 className="font-heading font-bold text-xl text-navy-dark mb-2">{country.name}</h3>
                <p className="text-sm text-muted-foreground">{country.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white mb-6">
            Ready to Source <span className="text-gradient-gold">Globally?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let us help you find the perfect suppliers for your business needs
          </p>
          <Button onClick={() => navigate("/contact")} className="btn-gold group">
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
