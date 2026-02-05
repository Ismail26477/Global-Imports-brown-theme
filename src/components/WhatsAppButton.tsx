import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919270109911";
  const message = encodeURIComponent("Hello! I'm interested in your import-export services. Please provide more information.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-navy-dark text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-navy-dark" />
        </div>

        {/* Button */}
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg pulse-green hover:scale-110 transition-transform">
          <MessageCircle className="w-7 h-7 text-white" fill="white" />
        </div>
      </div>
    </a>
  );
}
