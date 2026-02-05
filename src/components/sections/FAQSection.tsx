import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What MOQ do you require?",
    answer:
      "We work with flexible MOQs depending on the product category. For most products, we can start with quantities as low as 100-500 units. For specialized or custom products, MOQs may be higher. Contact us to discuss your specific requirements.",
  },
  {
    question: "Which e-commerce platforms do you support?",
    answer:
      "We support all major e-commerce platforms including Amazon (FBA & FBM), eBay, Walmart Marketplace, Etsy, Shopify, Flipkart, and more. Our team has specific expertise in Amazon FBA preparation and compliance.",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "We implement a three-stage quality inspection process: Pre-production sampling, During Production Inspection (DPI), and Pre-Shipment Inspection (PSI). All inspections are conducted by our trained team or third-party agencies like SGS/Intertek.",
  },
  {
    question: "What shipping options are available?",
    answer:
      "We offer multiple shipping options: Sea Freight (25-35 days, most economical), Air Freight (5-10 days), Express Courier (3-5 days), and Railway Freight for specific routes. We'll recommend the best option based on your budget and timeline.",
  },
  {
    question: "Do you handle customs clearance?",
    answer:
      "Yes, we provide complete customs clearance services. Our team handles all documentation including Bill of Entry, Import License verification, Duty calculations, and coordination with customs authorities. We ensure smooth clearance with minimal delays.",
  },
  {
    question: "Do you offer private labeling and white labeling?",
    answer:
      "Absolutely! We work with manufacturers who offer complete private label and white label solutions. This includes custom packaging, branding, logo printing, and product customization according to your specifications.",
  },
  {
    question: "What is your sourcing capability?",
    answer:
      "We have established partnerships with verified manufacturers across China, Vietnam, Thailand, Indonesia, and other Asian countries. We can source virtually any product category including electronics, textiles, machinery, raw materials, and consumer goods.",
  },
  {
    question: "How long does the entire process take?",
    answer:
      "The timeline varies by order complexity: Sourcing & Sampling (7-14 days), Production (15-45 days depending on quantity), Quality Inspection (2-3 days), and Shipping (based on method chosen). Total typical timeline is 6-10 weeks for standard orders.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-navy-dark mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our import-export services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-sm border border-border px-6"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-navy-dark hover:no-underline hover:text-gold py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
