import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Zap, Shield, Clock, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const badges = [
    { icon: Code, label: "Web Development", color: "from-blue-500 to-cyan-500" },
    { icon: Smartphone, label: "Mobile Apps", count: "+4 Apps" },
    { icon: Zap, label: "Fast Delivery", count: "On Time" },
    { icon: Shield, label: "Secure & Scalable" },
    { icon: Clock, label: "24/7 Support" },
    { icon: Award, label: "100% Client Satisfaction" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Complete IT Solution Provider Since 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Transform Your Ideas Into{" "}
            <span className="text-gradient">Digital Reality</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, 
            we bring innovation and excellence to every project with our expert team of developers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg" className="group">
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg">
              Get Free Consultation
            </Button>
          </div>

          {/* Feature Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {badges.map((badge, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl hover:scale-105 transition-transform cursor-pointer"
              >
                <badge.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold mb-1">{badge.label}</p>
                {badge.count && (
                  <p className="text-xs text-muted-foreground">{badge.count}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
