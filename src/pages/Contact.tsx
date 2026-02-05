import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ChatBot } from "../components/ChatBot";
import { Mail, MapPin, Phone, Send, MessageCircle, Sparkles, ArrowRight, Clock, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "../hooks/use-toast";

const teamMembers = [
  { name: "Vimal Gandhi", phone: "+91 9823050721", initials: "VG", role: "Founder & CEO" },
  { name: "Aakash Gandhi", phone: "+91 9011675477", initials: "AG", role: "Operations Head" },
  { name: "Prithvi Gandhi", phone: "+91 8168619911", initials: "PG", role: "Logistics Manager" },
  { name: "Sagar Gandhi", phone: "+91 8830783396", initials: "SG", role: "Client Relations" },
];

const productCategories = [
  "Industrial Goods",
  "Electronics",
  "Machinery",
  "Raw Materials",
  "Textiles",
  "Consumer Products",
  "Automotive Parts",
  "Medical Equipment",
  "Other",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "globalimportsworldwide@gmail.com", href: "mailto:globalimportsworldwide@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9270109911", href: "tel:+919270109911" },
  { icon: MapPin, label: "Location", value: "Nagpur, Maharashtra, India", href: null },
  { icon: Clock, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM", href: null },
  { icon: Globe, label: "Coverage", value: "50+ Countries Worldwide", href: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      category: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-navy via-navy-dark to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy-dark/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Contact Us</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Have questions about our services? Ready to start your global trade journey? 
              Our team is here to help you every step of the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919270109911"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+919270109911"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy-dark mb-8">
                Contact <span className="text-gradient-gold">Information</span>
              </h2>

              <div className="space-y-4 mb-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft border border-border card-hover">
                    {info.href ? (
                      <a href={info.href} className="flex items-center gap-4 w-full group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/10 to-cyan/10 flex items-center justify-center group-hover:from-gold/20 group-hover:to-cyan/20 transition-all duration-300">
                          <info.icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium text-navy-dark">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/10 to-cyan/10 flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium text-navy-dark">{info.value}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Team Contacts */}
              <h3 className="font-heading font-bold text-xl text-navy-dark mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                Contact Our Team Directly
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <a
                    key={index}
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-soft card-hover border border-transparent hover:border-gold/20 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white font-bold group-hover:from-gold group-hover:to-gold-dark group-hover:text-navy-dark transition-all duration-300">
                      {member.initials}
                    </div>
                    <div>
                      <p className="font-medium text-navy-dark text-sm">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                      <p className="text-xs text-gold">{member.phone}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-elevated p-6 md:p-8 border border-border">
              <h3 className="font-heading font-bold text-2xl text-navy-dark mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                Send Us an Enquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="mt-1.5 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="mt-1.5 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-1.5 rounded-xl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company"
                      className="mt-1.5 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">Product Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger id="category" className="mt-1.5 rounded-xl">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {productCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements, the products you're looking for, estimated quantities, etc."
                    rows={5}
                    required
                    className="mt-1.5 rounded-xl resize-none"
                  />
                </div>

                <Button type="submit" className="w-full btn-gold group">
                  <Send className="w-5 h-5 mr-2" />
                  <span>Send Enquiry</span>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
