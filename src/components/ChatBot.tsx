import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const faqResponses: Record<string, string> = {
  "what do you import": "We import a wide range of products including Industrial Goods, Electronics, Machinery, Raw Materials, Textiles, and Consumer Products from verified manufacturers across Asia.",
  "shipping time": "Shipping times vary by method: Sea Freight takes 25-35 days, Air Freight takes 5-10 days, and Express Courier takes 3-5 days. Contact us for specific product timelines.",
  "minimum order quantity": "MOQ varies by product category. We work with flexible quantities - typically starting from 100-500 units for most products. Custom orders may have different requirements.",
  "how to get a quote": "You can request a quote by clicking 'Request a Quote' button, filling our contact form, or directly messaging us on WhatsApp at +91 9270109911.",
  "your certifications": "We are ISO 9001 certified and work with APEDA, FSSAI, and IEC registered suppliers. All our partners undergo strict quality verification.",
  "payment methods": "We accept Bank Transfer (T/T), Letter of Credit (L/C), PayPal for smaller orders, and other secure payment methods based on order value.",
};

const quickQuestions = [
  "What do you import?",
  "Shipping time?",
  "Minimum order quantity?",
  "How to get a quote?",
  "Your certifications?",
  "Payment methods?",
];

interface Message {
  type: "user" | "bot";
  text: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hello! 👋 I'm here to help you with questions about Global Imports. Choose a topic below or type your question!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { type: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Find matching response
    const lowerText = text.toLowerCase();
    let botResponse = "I'm not sure about that. Would you like to speak to a human? Click the WhatsApp button below to chat with our team!";

    for (const [key, value] of Object.entries(faqResponses)) {
      if (lowerText.includes(key) || key.includes(lowerText)) {
        botResponse = value;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
    }, 500);
  };

  const handleQuickQuestion = (question: string) => {
    handleSend(question);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-navy flex items-center justify-center shadow-lg hover:bg-navy-light transition-colors",
          isOpen && "hidden"
        )}
        aria-label="Open chat"
      >
        <Bot className="w-7 h-7 text-white" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-navy p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white">Global Imports</h3>
                <p className="text-white/70 text-sm">FAQ Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-2",
                  message.type === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    message.type === "user" ? "bg-gold" : "bg-navy"
                  )}
                >
                  {message.type === "user" ? (
                    <User className="w-4 h-4 text-navy-dark" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm",
                    message.type === "user"
                      ? "bg-gold text-navy-dark rounded-tr-none"
                      : "bg-white shadow-sm rounded-tl-none"
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="p-3 border-t bg-white">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickQuestions.slice(0, 3).map((question) => (
                <button
                  key={question}
                  onClick={() => handleQuickQuestion(question)}
                  className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-navy hover:bg-gold hover:text-navy-dark transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Type your question..."
              className="flex-1"
            />
            <Button
              onClick={() => handleSend(input)}
              size="icon"
              className="bg-navy hover:bg-navy-light"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          {/* WhatsApp Link */}
          <div className="p-3 bg-muted/50 text-center">
            <a
              href="https://wa.me/919270109911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy hover:text-gold font-medium"
            >
              💬 Speak to a human on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
