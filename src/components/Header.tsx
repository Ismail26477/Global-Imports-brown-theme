'use client';

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300",
          isScrolled ? "h-[65px]" : "h-[90px]"
        )}
      >
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-3 items-center h-full px-4">

            {/* LEFT — Desktop Logo */}
            <div className="flex items-center">
              <Link to="/" className="hidden lg:block">
                <img
                  src="/logo11.png"
                  alt="Logo"
                  className={cn(
                    "object-contain transition-all duration-300",
                    isScrolled ? "h-12" : "h-20 lg:h-24"
                  )}
                />
              </Link>
            </div>

            {/* CENTER — Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-12 font-semibold text-navy-dark">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link to="/services">Services</Link>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isServicesOpen && "rotate-180"
                    )}
                  />
                </div>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-3">
                    <div className="glass-dark rounded-xl py-3 min-w-[240px] shadow-2xl">
                      {[
                        ["Global Sourcing","/services/global-sourcing"],
                        ["Export Management","/services/export-management"],
                        ["Import Compliance","/services/import-compliance"],
                        ["Logistics & Freight","/services/logistics-freight"],
                        ["Customs Documentation","/services/customs-documentation"],
                        ["Quality Inspection","/services/quality-inspection"],
                      ].map(([label, href]) => (
                        <Link key={href} to={href} className="block px-5 py-3">
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/products">Products</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            {/* RIGHT — Mobile Header + Desktop Call */}
            <div className="flex items-center justify-end w-full">

              {/* ===== MOBILE HEADER ===== */}
              <div className="lg:hidden flex items-center justify-between w-full relative">

                {/* Menu */}
                <button onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu className="w-6 h-6 text-navy-dark" />
                </button>

                {/* Center Logo */}
                <Link to="/" className="absolute left-1/2 -translate-x-1/2">
                  <img
                    src="/logo11.png"
                    alt="Logo"
                    className="h-10 object-contain"
                  />
                </Link>

                {/* Call */}
                <a href="tel:+919270109911">
                  <Phone className="w-6 h-6 text-gold" />
                </a>
              </div>

              {/* ===== DESKTOP CALL ===== */}
              <a
                href="tel:+919270109911"
                className="hidden lg:flex items-center gap-3 px-7 py-3 rounded-full font-bold shadow-lg"
                style={{ backgroundColor: "#E9D8C3", color: "#3B2A1A" }}
              >
                <Phone className="w-5 h-5" />
                +91 9270109911
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU DRAWER ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col">

          {/* Top Bar */}
          <div className="flex items-center justify-between h-[80px] px-6 border-b">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-7 h-7 text-navy-dark" />
            </button>

            <img src="/logo11.png" alt="Logo" className="h-10" />

            <a
              href="tel:+919270109911"
              className="bg-green-400 p-2.5 rounded-full shadow-md"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-8 py-8">
            <nav className="flex flex-col gap-7 text-lg font-semibold text-navy-dark">

              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

              <div className="pt-6 border-t">
                <p className="font-bold mb-4 text-base">Services</p>

                <div className="flex flex-col gap-4 font-medium text-[15px]">
                  <Link to="/services/global-sourcing" onClick={() => setIsMobileMenuOpen(false)}>Global Sourcing</Link>
                  <Link to="/services/export-management" onClick={() => setIsMobileMenuOpen(false)}>Export Management</Link>
                  <Link to="/services/import-compliance" onClick={() => setIsMobileMenuOpen(false)}>Import Compliance</Link>
                  <Link to="/services/logistics-freight" onClick={() => setIsMobileMenuOpen(false)}>Logistics & Freight</Link>
                  <Link to="/services/customs-documentation" onClick={() => setIsMobileMenuOpen(false)}>Customs Documentation</Link>
                  <Link to="/services/quality-inspection" onClick={() => setIsMobileMenuOpen(false)}>Quality Inspection</Link>
                </div>
              </div>

            </nav>
          </div>
        </div>
      )}
    </>
  );
}
