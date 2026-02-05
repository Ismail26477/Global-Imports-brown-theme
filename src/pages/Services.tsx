import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ChatBot } from "../components/ChatBot";
import {
  Globe,
  FileCheck,
  ClipboardCheck,
  PackageCheck,
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Global Sourcing",
    icon: Globe,
    path: "/services/global-sourcing",
    description:
      "Find verified manufacturers across China, Vietnam, and 50+ countries with competitive pricing and quality assurance.",
  },
  {
    title: "Export Management",
    icon: FileCheck,
    path: "/services/export-management",
    description:
      "Complete export documentation, regulatory compliance, and customs handling for smooth international trade.",
  },
  {
    title: "Import Compliance",
    icon: ClipboardCheck,
    path: "/services/import-compliance",
    description:
      "Ensure full compliance with Indian customs laws, HSN codes, duties, and trade regulations.",
  },
  {
    title: "Logistics & Freight",
    icon: PackageCheck,
    path: "/services/logistics-freight",
    description:
      "Sea freight, air freight, and land transport with real-time tracking and door-to-door delivery.",
  },
  {
    title: "Quality Inspection",
    icon: Search,
    path: "/services/quality-inspection",
    description:
      "Pre-production, during production, and pre-shipment inspections to ensure product quality.",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-navy via-navy-dark to-navy-light text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-gold w-5 h-5" />
            <span className="uppercase tracking-widest text-gold text-sm">
              What We Offer
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            End-to-end global trade solutions from sourcing to shipping, compliance to quality inspection — all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-soft border border-border card-hover flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-cyan/20 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>

                <h3 className="font-heading text-2xl text-navy-dark mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>

                <Button
                  onClick={() => navigate(service.path)}
                  className="btn-gold mt-auto group"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
