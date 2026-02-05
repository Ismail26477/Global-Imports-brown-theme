import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ChatBot } from "../components/ChatBot";
import { CheckCircle, ArrowRight, Sparkles, Users, Globe, Award, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const highlights = [
  "Direct partnerships with verified manufacturers",
  "Access to competitive pricing & exclusive products",
  "Fast sourcing & production timelines",
  "Complete documentation and compliance support",
  "Quality inspection at every stage",
  "Dedicated account management",
];

const stats = [
  { value: "16+", label: "Years in Global Trade" },
  { value: "500+", label: "Successful Projects" },
  { value: "50+", label: "Countries Covered" },
  { value: "100%", label: "Client Satisfaction" },
];

const values = [
  { icon: Target, title: "Mission", description: "To simplify international trade for Indian businesses by providing end-to-end import-export solutions with transparency and reliability." },
  { icon: Globe, title: "Vision", description: "To be the most trusted global trade partner for businesses across India, enabling them to access world-class products and markets." },
  { icon: Award, title: "Values", description: "Integrity, transparency, customer-first approach, and continuous innovation in trade solutions." },
];

const teamMembers = [
  { name: "Vimal Gandhi", role: "Founder & CEO", initials: "VG" },
  { name: "Aakash Gandhi", role: "Operations Head", initials: "AG" },
  { name: "Prithvi Gandhi", role: "Logistics Manager", initials: "PG" },
  { name: "Sagar Gandhi", role: "Client Relations", initials: "SG" },
];

export default function About() {
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
              <span className="text-gold font-medium uppercase tracking-wider text-sm">About Us</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Your Trusted <span className="text-gradient-gold">Global Trade</span> Partner
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              With over 16 years of experience, we bridge the gap between Indian businesses 
              and global manufacturers, making international trade simple and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Story</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-6">
                From Local Traders to <span className="text-gradient-gold">Global Partners</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Global Imports was founded with a simple mission: to make international trade 
                accessible for Indian businesses of all sizes. What started as a small trading 
                company in Nagpur has grown into a comprehensive trade solutions provider with 
                a network spanning over 50 countries.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, we serve hundreds of clients ranging from small businesses to large 
                enterprises, helping them source quality products from verified manufacturers 
                worldwide while handling all the complexities of international trade.
              </p>
              <div className="space-y-3">
                {highlights.slice(0, 4).map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-navy-dark" />
                    </div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                    alt="Warehouse operations"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
                    alt="Global shipping"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80"
                    alt="Container shipping"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80"
                    alt="Quality inspection"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-4">
              Our <span className="text-gradient-cyan">Mission & Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-soft border border-border card-hover">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy-dark mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-4">
              Meet Our <span className="text-gradient-gold">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success in global trade
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft border border-border text-center card-hover">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-heading font-bold text-navy-dark mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy to-navy-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white mb-6">
            Ready to Work <span className="text-gradient-gold">Together?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let us help you navigate the complexities of international trade
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
