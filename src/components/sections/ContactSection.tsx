import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const teamMembers = [
  { name: "Vimal Gandhi", phone: "+91 9823050721", initials: "VG" },
  { name: "Aakash Gandhi", phone: "+91 9011675477", initials: "AG" },
  { name: "Prithvi Gandhi", phone: "+91 8168619911", initials: "PG" },
  { name: "Sagar Gandhi", phone: "+91 8830783396", initials: "SG" },
];

const productCategories = [
  "Industrial Goods",
  "Electronics",
  "Machinery",
  "Raw Materials",
  "Textiles",
  "Consumer Products",
  "Other",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      company: "",
      category: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80)",
            }}
          />
          <div className="absolute inset-0 gradient-overlay-dark" />
          <div className="relative z-10 py-16 px-8 text-center text-white">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Join Global Imports today and experience seamless, reliable logistics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919270109911"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="mailto:globalimportsworldwide@gmail.com"
                className="btn-navy inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30"
              >
                <Mail className="w-5 h-5" />
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              Get in Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-navy-dark mt-2 mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 mb-10">
              <a
                href="mailto:globalimportsworldwide@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-navy-dark">
                    globalimportsworldwide@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919270109911"
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Office Phone</p>
                  <p className="font-medium text-navy-dark">+91 9270109911</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-navy-dark">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Team Contacts */}
            <h3 className="font-heading font-bold text-xl text-navy-dark mb-4">
              Contact Our Team
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {teamMembers.map((member) => (
                <a
                  key={member.name}
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm card-hover"
                >
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                    {member.initials}
                  </div>
                  <div>
                    <p className="font-medium text-navy-dark text-sm">
                      {member.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.phone}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="font-heading font-bold text-2xl text-navy-dark mb-6">
              Send Us an Enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="category">Product Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
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
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-gold">
                <Send className="w-5 h-5 mr-2" />
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
