import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { ChatBot } from "../../components/ChatBot";
import { Search, CheckCircle, ArrowRight, Sparkles, Eye, ClipboardCheck, Shield, AlertCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  "Pre-production inspection (PPI)",
  "During production inspection (DPI)",
  "Pre-shipment inspection (PSI)",
  "Container loading supervision",
  "Factory audit and assessment",
  "Defect analysis and reporting",
];

const inspectionTypes = [
  { 
    title: "Pre-Production", 
    icon: ClipboardCheck,
    description: "Verify raw materials and production readiness before manufacturing begins",
    checkpoints: ["Raw material quality", "Production capacity", "Sample verification"]
  },
  { 
    title: "During Production", 
    icon: Eye,
    description: "Monitor quality during manufacturing to catch issues early",
    checkpoints: ["Process compliance", "In-line sampling", "Defect tracking"]
  },
  { 
    title: "Pre-Shipment", 
    icon: Search,
    description: "Final quality check before goods leave the factory",
    checkpoints: ["AQL sampling", "Packaging check", "Documentation verification"]
  },
];

const benefits = [
  { icon: Shield, title: "Quality Assurance", description: "Ensure product meets specifications" },
  { icon: AlertCircle, title: "Early Detection", description: "Catch defects before shipping" },
  { icon: ClipboardCheck, title: "Detailed Reports", description: "Comprehensive inspection reports" },
  { icon: Eye, title: "Factory Audits", description: "Verify supplier capabilities" },
];

export default function QualityInspection() {
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
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Services</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Quality <span className="text-gradient-gold">Inspection</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Pre-production, during production, and pre-shipment inspections. Ensure 
              product quality before it leaves the factory.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => navigate("/contact")} className="btn-gold group">
                Get Started
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
                <Search className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium uppercase tracking-wider text-sm">What We Offer</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-6">
                Comprehensive <span className="text-gradient-gold">Inspection Services</span>
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

      {/* Inspection Types Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-4">
              Inspection <span className="text-gradient-cyan">Types</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quality control at every stage of production
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {inspectionTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-soft border border-border card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy-dark mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.checkpoints.map((checkpoint, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      {checkpoint}
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
            Ensure <span className="text-gradient-gold">Quality</span> Today
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Don't risk receiving defective products. Let us inspect before you ship.
          </p>
          <Button onClick={() => navigate("/contact")} className="btn-gold group">
            Schedule Inspection
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
