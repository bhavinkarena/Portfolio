import { useState } from "react";
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
  Eye,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const colorMap = {
  "cyan-blue": { from: "#06b6d4", to: "#3b82f6" },
  "purple-pink": { from: "#a855f7", to: "#ec4899" },
  "green-emerald": { from: "#10b981", to: "#059669" },
  "orange-red": { from: "#f97316", to: "#ef4444" },
  "amber-yellow": { from: "#f59e0b", to: "#eab308" },
};

// Map a full-res image path to its lightweight JPEG thumbnail in /thumbs
const thumbOf = (img) =>
  img ? img.replace(/^\//, "/thumbs/").replace(/\.\w+$/, ".jpg") : img;

const projects = [
  {
    title: "Runner Spike",
    subtitle: "Full Stack E-Commerce Platform",
    description:
      "Complete e-commerce platform for athletic footwear with admin dashboard, product management, and order tracking system.",
    image: "/runnerspikes.png",
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
    keyFeatures: [
      {
        title: "Product Filtering",
        description:
          "Browse products by category, brand, tags, size, color, and price range with real-time filtering",
      },
      {
        title: "Size Charts",
        description:
          "Brand-specific size charts for Nike, Adidas, Puma, and General sizing",
      },
      {
        title: "Secure Payments",
        description:
          "Complete purchases securely through Razorpay payment gateway",
      },
      {
        title: "Order Tracking",
        description:
          "Track orders and view order history with delivery status updates",
      },
      {
        title: "Admin Dashboard",
        description:
          "Manage products, categories, brands, orders, users, coupons, and reviews",
      },
    ],
    technicalImplementation: [
      "**Razorpay** for secure Indian payment processing",
      "**Cloudinary + AWS S3** for optimized image storage and delivery",
      "**Twilio** for OTP-based phone authentication",
      "**JWT + Helmet** for authentication and API security",
    ],
    colorKey: "orange-red",
    glow: "hover:shadow-orange-500/20",
    link: "https://www.runnerspikes.in/",
    role: "Full Stack Developer",
    status: "Completed",
    challenges: [
      "Building a scalable product variant system with size-color dependencies",
      "Implementing secure Razorpay payment integration with order verification",
      "Creating responsive mobile-first UI with swipeable product galleries",
      "Managing complex filter state with URL synchronization for shareable product searches",
    ],
    learnings: [
      "Deep understanding of e-commerce payment flows and order lifecycle management",
      "Building role-based access control for admin dashboards",
      "Implementing infinite scroll with intersection observers",
      "Managing complex Redux state with RTK Query caching strategies",
    ],
  },
  {
    title: "HRMS",
    subtitle: "Human Resource Management",
    description:
      "Complete employee management system with dynamic leave management, real-time notifications, and interactive org charts.",
    image: "/hrms.png",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "React 19",
      "RTK Query",
      "Socket.IO",
    ],
    features: [
      { icon: Users, text: "Complete Employee Management" },
      { icon: FileText, text: "Dynamic Leave Management" },
      { icon: Bell, text: "Real-time Notifications" },
      { icon: GitBranch, text: "Interactive Org Chart" },
    ],
    keyFeatures: [
      {
        title: "Employee Management",
        description:
          "Complete employee profiles with document storage, performance evaluations, designation history tracking, and Google Drive integration.",
      },
      {
        title: "Real-time Attendance Tracking",
        description:
          "Automated attendance system with clock-in/out functionality, break management, and comprehensive reporting.",
      },
      {
        title: "Payroll Management",
        description:
          "Automated payroll processing with configurable salary adjustments, bonus tracking, and PDF report generation.",
      },
      {
        title: "Leave Management",
        description:
          "Comprehensive leave system with multi-level approval workflows, multiple leave types, and dynamic balance tracking.",
      },
      {
        title: "Recruitment Pipeline",
        description:
          "Job posting management, applicant tracking system, and candidate evaluation workflow for streamlined hiring.",
      },
      {
        title: "Interactive Org Chart",
        description:
          "Visual organizational hierarchy using React Flow for displaying reporting structures and team compositions.",
      },
    ],
    technicalImplementation: [
      "**State Management**: Redux Toolkit with RTK Query for efficient server state caching",
      "**Authentication**: Dual authentication system supporting JWT tokens and Google OAuth 2.0",
      "**Data Security**: Field-level AES-256-GCM encryption with PBKDF2 key derivation",
      "**Background Jobs**: Node-cron scheduled tasks for attendance marking and leave expiration",
      "**Real-time Updates**: Socket.IO for instant notifications across all connected clients",
    ],
    colorKey: "purple-pink",
    glow: "hover:shadow-purple-500/20",
    link: "https://beamish-puffpuff-85d4b3.netlify.app/",
    role: "Full Stack Developer",
    status: "Completed",
    challenges: [
      "Implementing AES-256-GCM encryption for sensitive employee data",
      "Building complex payroll calculation system with multiple employment types",
      "Designing real-time notification system using Socket.IO",
      "Creating flexible leave management with multi-level approval workflows",
    ],
    learnings: [
      "Mastered field-level encryption strategies for protecting sensitive data",
      "Gained expertise in building cron job schedulers for automated tasks",
      "Learned Google OAuth 2.0 authentication with Passport.js",
      "Developed skills in building interactive org chart visualizations",
    ],
  },
  {
    title: "Total Liquor",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "Three-tier e-commerce platform for liquor sales with React Native mobile app, React web application, and Node.js backend API with Stripe payment processing.",
    image: "/total-liquor.png",
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
    keyFeatures: [
      {
        title: "Multi-Vendor Marketplace",
        description:
          "Store owners can register, complete Stripe onboarding, manage inventory, and receive payments with automatic 10% platform fee.",
      },
      {
        title: "Bulk Product Import",
        description:
          "Excel-based product import system that automatically creates categories, brands, products, and variants with intelligent data parsing.",
      },
      {
        title: "Real-time Order Management",
        description:
          "Complete order lifecycle management with status tracking (Pending → Preparing → Ready → Delivered).",
      },
      {
        title: "Cross-Platform Mobile App",
        description:
          "React Native mobile application with NativeWind styling, featuring product browsing, cart management, and Stripe payment integration.",
      },
      {
        title: "Comprehensive Admin Dashboard",
        description:
          "Full administrative control over users, stores, products, categories, brands, inventory, orders, and payments.",
      },
    ],
    technicalImplementation: [
      "**Database Design**: 18+ interconnected models with complex associations using Sequelize ORM",
      "**Payment Processing**: Stripe Connect Express integration with automatic account creation and split payments",
      "**State Management**: Redux Toolkit with RTK Query for efficient API caching and optimistic updates",
      "**Form Handling**: Zod schema validation with React Hook Form for type-safe form management",
      "**File Processing**: XLSX library for parsing Excel uploads with header normalization and batch operations",
    ],
    colorKey: "amber-yellow",
    glow: "hover:shadow-amber-500/20",
    link: "https://precious-licorice-57b141.netlify.app/",
    role: "Full Stack Developer",
    status: "In Progress",
    challenges: [
      "Implementing Stripe Connect for multi-vendor marketplace with split payments",
      "Building bulk product import system parsing Excel files",
      "Designing role-based access control with separate authentication flows",
      "Managing complex order state machine across different user roles",
    ],
    learnings: [
      "Mastered Stripe Connect Express accounts for marketplace payment splitting",
      "Gained expertise in building scalable multi-tenant architectures",
      "Learned complex form validation using Zod schemas",
      "Developed proficiency in cross-platform applications",
    ],
  },
  {
    title: "Winbid AI",
    subtitle: "AI-Powered RFP Platform",
    description:
      "Revolutionary RFP platform with AI-powered proposal generation achieving 60% time reduction in document processing.",
    image: "/winbid-ai.png",
    techStack: [
      "MERN",
      "Socket.io",
      "OpenAI",
      "Gemini",
      "Puppeteer",
      "Grok AI",
      "Llama"
    ],
    features: [
      { icon: Bot, text: "AI-Powered Proposal Generation" },
      { icon: FileText, text: "Automated Document Processing" },
      { icon: Zap, text: "60% Time Reduction" },
      { icon: BarChart3, text: "Real-time Progress Tracking" },
    ],
    keyFeatures: [
      {
        title: "Multi-Agent AI Pipeline",
        description:
          "Intelligent proposal generation using multiple LLMs (Grok, DeepSeek, Llama) for scope analysis, solution generation, and document production.",
      },
      {
        title: "Automated RFP Discovery",
        description:
          "Aggregates and normalizes RFP data from SAM.gov, Bonfire, DemandStar, and OpenGov with advanced filtering.",
      },
      {
        title: "Professional DOCX Generation",
        description:
          "Creates polished proposal documents with custom templates, company branding, and professional formatting.",
      },
      {
        title: "Real-Time Progress Tracking",
        description:
          "WebSocket-based live updates during AI document generation with operation cancellation support.",
      },
      {
        title: "Section-by-Section AI Improvement",
        description:
          "Granular control over AI-generated content with the ability to regenerate or improve individual sections.",
      },
    ],
    technicalImplementation: [
      "**Multi-LLM Integration**: Leverages Grok, DeepSeek, and Llama models for different aspects of proposal generation",
      "**Automated RFP Scraping**: Puppeteer-based web scraping from SAM.gov, Bonfire, DemandStar, and OpenGov",
      "**Real-Time WebSockets**: Socket.io for bidirectional communication enabling live progress tracking",
      "**Document Generation**: Professional DOCX output with custom templates and structured formatting",
      "**Template System**: Flexible template management for different proposal types and client requirements",
    ],
    colorKey: "green-emerald",
    glow: "hover:shadow-green-500/20",
    link: "https://sunny-nasturtium-443e5e.netlify.app",
    role: "Full Stack Developer",
    status: "In Progress",
    challenges: [
      "Implementing multi-source RFP aggregation with web scraping",
      "Building multi-agent AI pipeline using multiple LLMs",
      "Handling complex document parsing for PDFs, DOCX, and Excel files",
      "Implementing real-time progress tracking with Socket.io",
    ],
    learnings: [
      "Mastered multi-agent AI architecture patterns",
      "Gained experience with government procurement APIs",
      "Learned advanced document processing techniques",
      "Implemented sophisticated real-time communication",
    ],
  },
  {
    title: "Game Admin Portal",
    subtitle: "Gaming Platform Administration",
    description:
      "Comprehensive gaming platform administration system with real-time balance management, hierarchical user management, transaction reporting, and AI-powered chatbot support.",
    image: "/game-admin-portal.png",
    techStack: [
      "React",
      "Node.js",
      "Parse Server",
      "MongoDB",
      "Socket.IO",
      "OpenAI",
    ],
    features: [
      { icon: Users, text: "7-Tier Hierarchical User Management" },
      { icon: Zap, text: "Real-Time Balance System" },
      { icon: BarChart3, text: "Comprehensive Reporting" },
      { icon: Bot, text: "AI-Powered Support Chatbot" },
    ],
    keyFeatures: [
      {
        title: "Hierarchical User Management",
        description:
          "7-tier role system (Super-User → Player) with cascading permissions and automated subordinate tracking for commission calculations.",
      },
      {
        title: "Real-Time Balance System",
        description:
          "WebSocket-powered balance updates with encrypted payloads, batch spin processing, and automatic fraud detection mechanisms.",
      },
      {
        title: "Comprehensive Reporting",
        description:
          "Transaction reports, agent performance analytics, game coin statistics, and daily automated email reports.",
      },
      {
        title: "AI-Powered Support Chatbot",
        description:
          "OpenAI GPT-3.5 integrated chatbot with role-based context awareness and conversation history.",
      },
      {
        title: "Game RTP Configuration",
        description:
          "Dynamic Return-to-Player settings with reel configuration and support for multiple game types.",
      },
    ],
    technicalImplementation: [
      "**Parse Cloud Functions**: 20+ custom functions handling authentication, transactions, and reporting",
      "**WebSocket Events**: Real-time balance updates, maintenance alerts, and encrypted game communications",
      "**Cron Jobs**: Automated daily reports, game statistics aggregation, and leaderboard updates",
      "**AWS S3 Integration**: Secure file storage for support ticket attachments with pre-signed URLs",
      "**MongoDB Aggregation**: Complex pipelines for transaction summaries and hierarchical data queries",
    ],
    colorKey: "purple-pink",
    glow: "hover:shadow-purple-500/20",
    role: "Full Stack Developer",
    status: "In Progress",
    challenges: [
      "Implementing real-time balance synchronization with encrypted WebSocket payloads",
      "Building complex hierarchical user management with 7 role levels",
      "Designing efficient MongoDB aggregation pipelines for millions of records",
      "Creating secure device ID verification system to prevent fraud",
    ],
    learnings: [
      "Mastered Parse Server cloud functions for scalable BaaS solutions",
      "Gained expertise in WebSocket event handling for real-time gaming",
      "Learned efficient caching strategies and cursor-based pagination",
      "Developed skills in building multi-tenant admin dashboards",
    ],
  },
  {
    title: "Getways",
    subtitle: "Fintech Platform",
    description:
      "A comprehensive digital wallet management platform with multi-role access system and real-time transaction analytics.",
    image: "/getways.png",
    techStack: ["Parse Server", "React-Admin", "Express", "Stripe", "ECharts"],
    features: [
      { icon: Wallet, text: "Digital Wallet Management" },
      { icon: Users, text: "Multi-Role Access System" },
      { icon: Bot, text: "Custom Chatbot Integration" },
      { icon: BarChart3, text: "Real-time Analytics with Chart.js" },
    ],
    keyFeatures: [
      {
        title: "Multi-Gateway Payment Processing",
        description:
          "Unified integration with Stripe, PayARC, Fiserv, Authorize.Net, Wert, and Coinbase for flexible payment options.",
      },
      {
        title: "Player Wallet System",
        description:
          "Complete wallet functionality with recharge, redeem, and cashout capabilities, including transaction history.",
      },
      {
        title: "Crypto Payment Integration",
        description:
          "Web3-powered cryptocurrency payments with Wert widget integration for seamless fiat-to-crypto conversions.",
      },
      {
        title: "Admin Dashboard & Analytics",
        description:
          "Comprehensive transaction monitoring with ECharts-powered analytics and real-time reporting.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Four-tier permission system (Super-User, Master-Agent, Agent, Player) with customized dashboards.",
      },
      {
        title: "KYC Verification System",
        description:
          "Integrated SEON verification for identity validation, compliance tracking, and fraud prevention.",
      },
    ],
    technicalImplementation: [
      "**Parse Server Backend**: Cloud functions for transaction processing and wallet management",
      "**React-Admin Frontend**: Custom auth and data providers with role-based UI rendering",
      "**Payment Gateway Modules**: Isolated integrations for Stripe, PayARC, Fiserv, Authorize.Net, Wert, and Coinbase",
      "**ECharts Analytics**: Interactive dashboards for transaction trends and revenue analysis",
      "**Web3 Crypto Payments**: Blockchain transaction verification and wallet connectivity",
    ],
    colorKey: "cyan-blue",
    glow: "hover:shadow-cyan-500/20",
    role: "Full Stack Developer",
    status: "In Progress",
    challenges: [
      "Integrating multiple payment gateways with unified transaction handling",
      "Building secure player wallet system supporting multiple workflows",
      "Implementing real-time cryptocurrency payments via Web3",
      "Designing role-based access control for complex hierarchies",
    ],
    learnings: [
      "Deep understanding of multi-gateway payment processing",
      "Building scalable fintech applications with Parse Server",
      "Implementing KYC verification workflows",
      "Creating interactive analytics dashboards using ECharts",
    ],
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState(null);

  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  const renderCard = (project, index, isFeatured) => (
    <div
      key={project.title}
      className={`group card-glass rounded-2xl overflow-hidden card-hover transition-all duration-700 ${
        project.glow
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Thumbnail */}
      <div className={`relative overflow-hidden ${isFeatured ? "h-56" : "h-44"}`}>
        {project.image ? (
          <img
            src={thumbOf(project.image)}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, ${colorMap[project.colorKey].from}, ${colorMap[project.colorKey].to})`,
            }}
          />
        )}
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-90" />

        {/* Status badge */}
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-medium text-primary border border-primary/30">
          {project.status}
        </span>

        {/* Title over image */}
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[11px] font-mono text-primary/90">{project.subtitle}</span>
          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p
          className={`text-muted-foreground text-sm mb-5 leading-relaxed ${
            isFeatured ? "line-clamp-3" : "line-clamp-2"
          }`}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, isFeatured ? 5 : 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > (isFeatured ? 5 : 3) && (
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              +{project.techStack.length - (isFeatured ? 5 : 3)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/50 text-primary hover:bg-primary/10 flex-1"
            onClick={() => setSelectedProject(project)}
          >
            <Eye size={16} className="mr-2" />
            View Details
          </Button>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button
                variant="default"
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <ExternalLink size={16} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="w-full px-4 md:container md:mx-auto">
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

          {/* Featured projects */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {featured.map((project, index) => renderCard(project, index, true))}
          </div>

          {/* Remaining projects */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((project, index) => renderCard(project, index + 2, false))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <div className="space-y-6">
              {/* Header */}
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <DialogTitle className="text-3xl font-bold mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {selectedProject.subtitle}
                    </DialogDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </DialogHeader>

              {/* Project Image */}
              {selectedProject.image && (
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden border border-border">
                  <img
                    src={thumbOf(selectedProject.image)}
                    alt={selectedProject.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Role */}
              <div className="flex items-center gap-2">
                <Users size={18} className="text-primary" />
                <span className="text-sm">
                  <span className="font-semibold">Role:</span>{" "}
                  {selectedProject.role}
                </span>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {selectedProject.keyFeatures && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <div className="grid gap-4">
                    {selectedProject.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg bg-muted/50 border border-border"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2
                            size={20}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Implementation */}
              {selectedProject.technicalImplementation && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Technical Implementation
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.technicalImplementation.map(
                      (item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {item.split("**").map((part, i) =>
                              i % 2 === 1 ? (
                                <strong key={i} className="text-foreground">
                                  {part}
                                </strong>
                              ) : (
                                part
                              ),
                            )}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {selectedProject.challenges && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Learnings */}
              {selectedProject.learnings && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Learnings</h3>
                  <ul className="space-y-2">
                    {selectedProject.learnings.map((learning, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {learning}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <ExternalLink size={18} className="mr-2" />
                      Visit Live Project
                    </Button>
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
