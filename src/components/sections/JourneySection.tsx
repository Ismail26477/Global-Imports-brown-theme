const timelineItems = [
  {
    year: "2008-2018",
    title: "Foundation & Specialization",
    description:
      "Started in import business focusing on woodworking machinery and plywood raw materials. Built deep expertise in specific product categories.",
  },
  {
    year: "2018-2024",
    title: "Evolution to E-Commerce",
    description:
      "Adapted to rapid e-commerce growth, expanding to multi-category sourcing. Partnered with Amazon sellers and D2C brands.",
  },
  {
    year: "2024+",
    title: "Global Trade Partnership",
    description:
      "Established Global Imports Nagpur as a dedicated company for comprehensive trade solutions. Now serving 500+ businesses across 50+ countries.",
  },
];

export function JourneySection() {
  return (
    <section className="section-padding bg-navy-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Our Story
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-2 mb-4">
            Our Journey
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            From specialized expertise to global trade partnership
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gold transform -translate-x-1/2 mt-8 z-10" />

                {/* Content */}
                <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="inline-block px-4 py-1 bg-gold text-navy-dark text-sm font-bold rounded-full mb-4">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-2xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70">{item.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
