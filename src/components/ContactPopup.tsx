'use client';

import React from "react"

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const productCategories = [
  "Industrial Goods",
  "Electronics",
  "Machinery",
  "Raw Materials",
  "Textiles",
  "Consumer Products",
  "Other",
];

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productInterest: "",
    message: "",
  });

  useEffect(() => {
    const dontShow = localStorage.getItem("hideContactPopup");
    if (dontShow === "true") return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("hideContactPopup", "true");
    }
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 24 hours.",
    });
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl md:rounded-2xl shadow-2xl overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto md:max-h-none">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy to-navy-light p-4 md:p-6 text-white sticky top-0">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="font-heading text-xl md:text-2xl font-bold mb-1 md:mb-2">
            Get a Free Quote! 🌍
          </h2>
          <p className="text-white/80 text-xs md:text-sm">
            Tell us your requirements and we'll provide a customized quote within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4">
          <div>
            <Label htmlFor="popup-name">Full Name</Label>
            <Input
              id="popup-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div>
              <Label htmlFor="popup-email" className="text-xs md:text-sm">Email</Label>
              <Input
                id="popup-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="popup-phone" className="text-xs md:text-sm">Phone</Label>
              <Input
                id="popup-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="popup-product">Product Interest</Label>
            <Select
              value={formData.productInterest}
              onValueChange={(value) => setFormData({ ...formData, productInterest: value })}
            >
              <SelectTrigger id="popup-product">
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
            <Label htmlFor="popup-message">Message</Label>
            <Textarea
              id="popup-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your requirements..."
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="dont-show"
              checked={dontShowAgain}
              onCheckedChange={(checked) => setDontShowAgain(checked as boolean)}
            />
            <Label htmlFor="dont-show" className="text-sm text-muted-foreground cursor-pointer">
              Don't show this again
            </Label>
          </div>

          <Button type="submit" className="w-full btn-gold">
            Get My Free Quote
          </Button>
        </form>
      </div>
    </div>
  );
}
