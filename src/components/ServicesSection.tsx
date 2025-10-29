import { Smartphone, Globe, Palette, Database, Cloud, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Custom Android applications built with the latest technologies to bring your ideas to life.",
      features: ["Native & Hybrid Apps", "Play Store Deployment", "Maintenance & Support"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive and scalable web applications tailored to your business needs.",
      features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"],
    },
    {
      icon: Palette,
      title: "UI/UX Development",
      description: "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Brand Identity"],
    },
    {
      icon: Database,
      title: "CRM Software",
      description: "Comprehensive CRM solutions to manage customer relationships and boost productivity.",
      features: ["Custom Development", "Integration Services", "Training & Support"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["AWS, Azure, GCP", "Migration Services", "Performance Tuning"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with robust security solutions and best practices.",
      features: ["Security Audits", "Penetration Testing", "Compliance"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive IT Solutions for Your{" "}
            <span className="text-gradient">Business Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end technology solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
