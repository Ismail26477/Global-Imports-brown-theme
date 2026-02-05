import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { ChatBot } from "../../components/ChatBot";
import { PackageCheck, CheckCircle, ArrowRight, Sparkles, Ship, Plane, Truck, Clock } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  "Sea freight - FCL and LCL options",
  "Air freight for urgent shipments",
  "Express courier services",
  "Multimodal transport solutions",
  "Door-to-door delivery",
  "Real-time shipment tracking",
];

const shippingModes = [
  { 
    icon: Ship, 
    title: "Sea Freight", 
    description: "Cost-effective for large shipments. FCL and LCL options available.",
    details: ["20ft & 40ft containers", "LCL consolidation", "Port-to-port & door-to-door"]
  },
  { 
    icon: Plane, 
    title: "Air Freight", 
    description: "Fast delivery for urgent and high-value cargo.",
    details: ["Express delivery", "Scheduled cargo", "Charter services"]
  },
  { 
    icon: Truck, 
    title: "Land Transport", 
    description: "Efficient ground transportation and last-mile delivery.",
    details: ["Cross-border trucking", "Warehouse distribution", "Last-mile delivery"]
  },
];

const benefits = [
  { icon: Clock, title: "Fast Delivery", description: "Optimized routes for quick transit" },
  { icon: Ship, title: "Multiple Options", description: "Sea, air, and land solutions" },
  { icon: PackageCheck, title: "Track & Trace", description: "Real-time shipment visibility" },
  { icon: Plane, title: "Global Coverage", description: "Worldwide delivery network" },
];

export default function LogisticsFreight() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy via-navy-dark to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy-dark/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Services</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Logistics & <span className="text-gradient-gold">Freight</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Sea freight, air freight, and express shipping options. Optimized routes 
              for cost-effective and timely delivery worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => navigate("/contact")} className="btn-gold group">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                <PackageCheck className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium uppercase tracking-wider text-sm">What We Offer</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-6">
                Complete <span className="text-gradient-gold">Logistics Solutions</span>
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

      {/* Shipping Modes Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-4">
              Shipping <span className="text-gradient-cyan">Modes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the right shipping mode for your cargo needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {shippingModes.map((mode, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-soft border border-border card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-6">
                  <mode.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy-dark mb-3">{mode.title}</h3>
                <p className="text-muted-foreground mb-4">{mode.description}</p>
                <ul className="space-y-2">
                  {mode.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white mb-6">
            Ship Your Cargo <span className="text-gradient-gold">Today</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Get competitive rates and reliable delivery for your shipments
          </p>
          <Button onClick={() => navigate("/contact")} className="btn-gold group">
            Request a Quote
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
