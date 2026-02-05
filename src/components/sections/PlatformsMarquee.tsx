const platforms = [
  "Amazon",
  "eBay",
  "Walmart",
  "Etsy",
  "Shopify",
  "Alibaba",
  "AliExpress",
  "Flipkart",
];

export function PlatformsMarquee() {
  return (
    <section className="py-12 bg-navy-dark overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-white/70 text-sm uppercase tracking-wider">
          E-Commerce Platforms We Support
        </p>
      </div>

      <div className="relative">
        <div className="flex marquee">
          {[...platforms, ...platforms].map((platform, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-8 py-4 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <span className="text-xl font-heading font-bold text-white">
                {platform}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
