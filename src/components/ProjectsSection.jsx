import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ExternalLink,
  Wallet,
  Users,
  Bot,
  BarChart3,
  Bell,
  GitBranch,
  FileText,
  Zap,
  ShoppingCart,
  Lock,
  Smartphone,
  CreditCard,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const colorMap = {
  "cyan-blue": { from: "#06b6d4", to: "#3b82f6" },
  "purple-pink": { from: "#a855f7", to: "#ec4899" },
  "green-emerald": { from: "#10b981", to: "#059669" },
  "orange-red": { from: "#f97316", to: "#ef4444" },
  "amber-yellow": { from: "#f59e0b", to: "#eab308" },
};

const projects = [
  {
    title: "Runner Spike",
    subtitle: "Full Stack E-Commerce Platform",
    description:
      "Complete e-commerce platform for athletic footwear with admin dashboard, product management, and order tracking system.",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "React 19",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    features: [
      { icon: ShoppingCart, text: "Shopping Cart & Order Management" },
      { icon: Lock, text: "JWT & OAuth Authentication" },
      { icon: Users, text: "Role-Based Access Control" },
      { icon: Smartphone, text: "Responsive Mobile Design" },
    ],
    colorKey: "orange-red",
    glow: "hover:shadow-orange-500/20",
    link: "https://www.runnerspikes.in/",
  },
  {
    title: "HRMS",
    subtitle: "Human Resource Management",
    description:
      "Complete employee management system with dynamic leave management, real-time notifications, and interactive org charts.",
    techStack: ["Node.js", "Express", "MongoDB", "React","RTK Query", "Socket.IO"],
    features: [
      { icon: Users, text: "Complete Employee Management" },
      { icon: FileText, text: "Dynamic Leave Management" },
      { icon: Bell, text: "Real-time Notifications" },
      { icon: GitBranch, text: "Interactive Org Chart" },
    ],
    colorKey: "purple-pink",
    glow: "hover:shadow-purple-500/20",
    link: "https://beamish-puffpuff-85d4b3.netlify.app/",
  },
  {
    title: "Total Liquor",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "Three-tier e-commerce platform for liquor sales with React Native mobile app, React web application, and Node.js backend API with Stripe payment processing.",
    techStack: [
      "React Native",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redux Toolkit",
      "Stripe API",
    ],
    features: [
      { icon: Smartphone, text: "React Native Mobile App" },
      { icon: CreditCard, text: "Stripe Payment Processing" },
      { icon: Package, text: "PostgreSQL with Sequelize ORM" },
      { icon: Lock, text: "JWT Authentication" },
    ],
    colorKey: "amber-yellow",
    glow: "hover:shadow-amber-500/20",
    link: "https://precious-licorice-57b141.netlify.app/",
  },
  {
    title: "Winbid AI",
    subtitle: "AI-Powered RFP Platform",
    description:
      "Revolutionary RFP platform with AI-powered proposal generation achieving 60% time reduction in document processing.",
    techStack: ["MERN", "OpenAI", "Gemini", "Puppeteer"],
    features: [
      { icon: Bot, text: "AI-Powered Proposal Generation" },
      { icon: FileText, text: "Automated Document Processing" },
      { icon: Zap, text: "60% Time Reduction" },
      { icon: BarChart3, text: "Real-time Progress Tracking" },
    ],
    colorKey: "green-emerald",
    glow: "hover:shadow-green-500/20",
    link: "https://sunny-nasturtium-443e5e.netlify.app",
  },
  {
    title: "Getways",
    subtitle: "Fintech Platform",
    description:
      "A comprehensive digital wallet management platform with multi-role access system and real-time transaction analytics.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      { icon: Wallet, text: "Digital Wallet Management" },
      { icon: Users, text: "Multi-Role Access System" },
      { icon: Bot, text: "Custom Chatbot Integration" },
      { icon: BarChart3, text: "Real-time Analytics with Chart.js" },
    ],
    colorKey: "cyan-blue",
    glow: "hover:shadow-cyan-500/20",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've worked on, showcasing my expertise in
              building scalable, real-time applications with modern
              technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group card-glass rounded-2xl overflow-hidden card-hover transition-all duration-700 ${
                  project.glow
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient header */}
                <div
                  className="h-2"
                  style={{
                    background: `linear-gradient(to right, ${
                      colorMap[project.colorKey].from
                    }, ${colorMap[project.colorKey].to})`,
                  }}
                />

                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {project.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-center gap-3"
                      >
                        <feature.icon
                          size={16}
                          className="text-primary flex-shrink-0"
                        />
                        <span className="text-muted-foreground text-sm">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 text-primary hover:bg-primary/10 w-full"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          View Project
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
