import { Button } from "@/components/ui/button";
import { Sparkles, Cpu, Users, HeadphonesIcon, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "User-Centric Design",
      description: "Intuitive UI/UX that guarantees user satisfaction and engagement.",
    },
    {
      icon: Cpu,
      title: "Cutting-Edge Technology",
      description: "Latest frameworks and tools for scalable, robust solutions.",
    },
    {
      icon: Users,
      title: "Client-Focused Approach",
      description: "Your success is our priority, every step of the way.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support Available",
      description: "Fast turnaround time with round-the-clock technical support.",
    },
  ];

  const achievements = [
    { label: "Client Satisfaction", value: "100%" },
    { label: "Projects Delivered", value: "15+" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">About AppDost</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Trusted Partner for Complete{" "}
            <span className="text-gradient">Digital Transformation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              AppDost is your partner for complete digital transformation. Founded in 2025, 
              we are a full-service IT solutions provider specializing in turning innovative 
              ideas into powerful, market-ready products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expertise spans the entire development lifecycle, from intuitive UI/UX 
              design to robust software development.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Discover Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
