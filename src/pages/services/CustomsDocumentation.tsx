import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { WhatsAppButton } from "../../components/WhatsAppButton";
import { ChatBot } from "../../components/ChatBot";
import { ShieldCheck, CheckCircle, ArrowRight, Sparkles, FileText, Clock, Shield, Scale } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  "Custom House Agent (CHA) services",
  "Bill of Entry filing and processing",
  "Duty calculation and payment",
  "Port clearance coordination",
  "Cargo examination facilitation",
  "Post-clearance audit support",
];

const process = [
  { step: "01", title: "Document Collection", description: "Gather all required import/export documents" },
  { step: "02", title: "Classification", description: "Accurate HSN code and duty determination" },
  { step: "03", title: "Filing", description: "Submit declarations to customs authorities" },
  { step: "04", title: "Assessment", description: "Facilitate customs examination if required" },
  { step: "05", title: "Duty Payment", description: "Process duty and tax payments" },
  { step: "06", title: "Release", description: "Obtain cargo release and delivery" },
];

const benefits = [
  { icon: Clock, title: "Fast Clearance", description: "Minimize port delays" },
  { icon: Shield, title: "Compliance", description: "100% regulatory adherence" },
  { icon: FileText, title: "Documentation", description: "Accurate paperwork" },
  { icon: Scale, title: "Duty Optimization", description: "Minimize duty costs legally" },
];

export default function CustomsDocumentation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy via-navy-dark to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy-dark/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Services</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Customs <span className="text-gradient-gold">Documentation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Expert customs handling and clearance services. Minimize delays with 
              proper documentation and professional CHA support.
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
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium uppercase tracking-wider text-sm">What We Offer</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-6">
                Complete <span className="text-gradient-gold">Customs Services</span>
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

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-4">
              Our <span className="text-gradient-cyan">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to customs clearance
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft border border-border card-hover">
                <span className="text-4xl font-heading font-bold text-gold/30">{item.step}</span>
                <h3 className="font-heading font-bold text-lg text-navy-dark mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white mb-6">
            Clear Your Cargo <span className="text-gradient-gold">Faster</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Expert customs clearance to minimize delays and maximize efficiency
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
