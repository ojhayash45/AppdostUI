import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "BEU Mate - Bihar Engineering",
      category: "AI-Powered Educational Platform",
      description: "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.",
      tech: "React Native, Node.js, AI/ML",
      link: "Play Store",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Devskillquest",
      category: "Educational Platform",
      description: "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects.",
      tech: "Next.js, TypeScript, PostgreSQL",
      link: "Website",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "The Weddings Chapter",
      category: "Wedding Planning Portal",
      description: "A premium wedding planning platform connecting couples with top vendors, venues, and services.",
      tech: "PHP, Laravel, MySQL",
      link: "Website",
      gradient: "from-rose-500 to-orange-500",
    },
  ];

  const openSourceProjects = [
    {
      title: "DeepFake Detection",
      category: "AI/ML Summer Internship Project",
      description: "Advanced deep learning model for detecting manipulated media using computer vision and neural networks.",
    },
    {
      title: "NooBot",
      category: "Smart Automation Bot",
      description: "Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.",
    },
    {
      title: "EduTools",
      category: "Educational Resources",
      description: "Collection of educational tools and utilities for students and teachers. Interactive learning resources and study aids.",
    },
    {
      title: "DialogFlow Chatbot",
      category: "Conversational AI Assistant",
      description: "Intelligent chatbot using Google's DialogFlow ES for natural language processing and automated customer support.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Featured Projects */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2 uppercase tracking-wide">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real solutions for real businesses - explore our successful projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{project.tech}</span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      {project.link}
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>

        {/* Open Source Projects */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open Source & <span className="text-gradient">Innovation Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our contributions to AI, automation, and educational technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {openSourceProjects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{project.category}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button variant="link" size="sm" className="p-0 h-auto">
                  View on GitHub →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
