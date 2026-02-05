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
      <header
        className={cn(
          "fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300",
          isScrolled ? "h-[65px]" : "h-[80px]"
        )}
      >
        <div className="container mx-auto h-full px-4">

          {/* ================= DESKTOP HEADER ================= */}
          <div className="hidden lg:flex items-center justify-between h-full">

            {/* Logo */}
            <Link to="/">
              <img
                src="/logo11.png"
                alt="Global Imports Logo"
                className={cn(
                  "object-contain transition-all duration-300",
                  isScrolled ? "h-12" : "h-20"
                )}
              />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-12 font-semibold text-navy-dark">
              <Link to="/" className="hover:text-gold transition">Home</Link>
              <Link to="/about" className="hover:text-gold transition">About</Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer hover:text-gold transition">
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
                        <Link
                          key={href}
                          to={href}
                          className="block px-5 py-3 text-[#f8f4e1] hover:text-[#fcb25d]"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/products" className="hover:text-gold transition">Products</Link>
              <Link to="/contact" className="hover:text-gold transition">Contact</Link>
            </nav>

            {/* Call Button */}
            <a
              href="tel:+919270109911"
              className={cn(
                "flex items-center gap-3 rounded-full font-bold shadow-lg transition-all duration-300",
                isScrolled ? "px-5 py-2 text-sm" : "px-7 py-3"
              )}
              style={{
                backgroundColor: "#E9D8C3",
                color: "#3B2A1A"
              }}
            >
              <Phone className="w-5 h-5" />
              <span>+91 9270109911</span>
            </a>
          </div>

          {/* ================= MOBILE HEADER ================= */}
          <div className="lg:hidden flex items-center justify-between h-full relative">

            {/* LEFT — MENU */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-navy-dark" />
              ) : (
                <Menu className="w-7 h-7 text-navy-dark" />
              )}
            </button>

            {/* CENTER — LOGO */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img
                src="/logo11.png"
                alt="Global Imports Logo"
                className="h-10 object-contain"
              />
            </Link>

            {/* RIGHT — CALL */}
            <a href="tel:+919270109911">
              <Phone className="w-7 h-7 text-gold" />
            </a>
          </div>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-[90px] px-6 lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-5 text-lg font-semibold text-navy-dark pb-10">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="border-b pb-3">Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="border-b pb-3">About</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="border-b pb-3">Products</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="border-b pb-3">Contact</Link>

            <div className="pt-4 border-t">
              <p className="mb-3 text-base">Services</p>
              <div className="flex flex-col gap-2 text-base">
                <Link to="/services/global-sourcing" onClick={() => setIsMobileMenuOpen(false)}>Global Sourcing</Link>
                <Link to="/services/export-management" onClick={() => setIsMobileMenuOpen(false)}>Export Management</Link>
                <Link to="/services/import-compliance" onClick={() => setIsMobileMenuOpen(false)}>Import Compliance</Link>
                <Link to="/services/logistics-freight" onClick={() => setIsMobileMenuOpen(false)}>Logistics & Freight</Link>
                <Link to="/services/quality-inspection" onClick={() => setIsMobileMenuOpen(false)}>Quality Inspection</Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
