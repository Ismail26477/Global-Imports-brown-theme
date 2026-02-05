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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300",
          isScrolled ? "h-[65px]" : "h-[90px]"
        )}
      >
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-3 items-center h-full">

            {/* LEFT — LOGO (Desktop) */}
            <div className="flex items-center">
              <Link to="/" className="hidden lg:block">
                <img
                  src="/logo11.png"
                  alt="Global Imports Logo"
                  className={cn(
                    "object-contain transition-all duration-300",
                    isScrolled ? "h-12" : "h-20 lg:h-24"
                  )}
                />
              </Link>
            </div>

            {/* CENTER — NAVIGATION */}
            <nav className="hidden lg:flex items-center justify-center gap-12 font-semibold text-navy-dark">
              <Link to="/" className="hover:text-gold transition">Home</Link>
              <Link to="/about" className="hover:text-gold transition">About</Link>

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

            {/* RIGHT — CALL BUTTON + MOBILE HEADER */}
            <div className="flex items-start justify-end gap-0 w-full">

              {/* ===== MOBILE HEADER ROW ===== */}
              <div className="lg:hidden flex items-center justify-between w-full relative">
                
                {/* Menu */}
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  {isMobileMenuOpen ? (
                    <X className="w-7 h-7 text-navy-dark" />
                  ) : (
<Menu className="w-6 h-6 text-navy-dark" />
                  )}
                </button>

                {/* Center Logo */}
                <Link to="/" className="absolute left-1/2 -translate-x-1/2">
                  <img
                    src="/logo11.png"
                    alt="Global Imports Logo"
                    className="h-10 object-contain"
                  />
                </Link>

                {/* Call */}
                <a href="tel:+919270109911">
<Phone className="w-6 h-6 text-gold" />
                </a>
              </div>

              {/* ===== DESKTOP CALL BUTTON ===== */}
              <a
                href="tel:+919270109911"
                className={cn(
                  "hidden lg:flex items-center gap-3 rounded-full font-bold shadow-lg transition-all duration-300 group",
                  "hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.04] hover:bg-[#f3e6d7]",
                  isScrolled ? "px-5 py-2 text-sm" : "px-7 py-3"
                )}
                style={{
                  backgroundColor: "#E9D8C3",
                  color: "#3B2A1A"
                }}
              >
                <Phone className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="tracking-wide">+91 9270109911</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-[80px] px-4 sm:px-8 lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg font-semibold text-navy-dark pb-8">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b">Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b">About</Link>
            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b">Products</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b">Contact</Link>

            <div className="border-t pt-4 mt-2">
              <p className="font-semibold mb-3 text-sm sm:text-base">Services</p>
              <div className="space-y-2 text-sm sm:text-base">
                <Link to="/services/global-sourcing" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Global Sourcing</Link>
                <Link to="/services/export-management" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Export Management</Link>
                <Link to="/services/import-compliance" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Import Compliance</Link>
                <Link to="/services/logistics-freight" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Logistics & Freight</Link>
                <Link to="/services/quality-inspection" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Quality Inspection</Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
