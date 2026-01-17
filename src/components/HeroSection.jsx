import { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = ['Full-Stack Developer', 'Backend Developer', 'React Developer', 'AI Integration Specialist'];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentRoleIndex]);

  const socialLinks = [
    { icon: Mail, href: 'mailto:bhavinkarena2003@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919737673650', label: 'Phone' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bhavin-karena/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/bhavinkarena', label: 'GitHub' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="w-full px-4 md:container md:mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-mono mb-6">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up delay-100">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text glow-text block mt-2">Bhavin Karena</span>
            </h1>

            <div className="h-12 md:h-16 mb-6 opacity-0 animate-fade-up delay-200">
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                <span className="text-primary font-mono">&lt;</span>
                {displayText}
                <span className="animate-pulse text-primary">|</span>
                <span className="text-primary font-mono">/&gt;</span>
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8 opacity-0 animate-fade-up delay-300">
              <MapPin size={18} className="text-primary" />
              <span>Nikol, Ahmedabad, India</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-fade-up delay-400">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-up delay-500">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-up delay-100">
            <div className="relative group">
              {/* Animated gradient background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 animate-pulse transition duration-1000"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Main photo container */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border-4 border-background shadow-2xl ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-500">
                  <img
                    src="/profile.jpeg"
                    alt="Bhavin Karena - Full Stack Developer"
                    className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-background/95 backdrop-blur-sm border border-primary/30 rounded-full shadow-lg">
                  <p className="text-sm font-semibold text-primary whitespace-nowrap">
                    ⚡ Available for Work
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
