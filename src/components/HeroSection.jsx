import { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, ArrowDown } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="w-full px-4 md:container md:mx-auto text-center relative z-10">
        <div className="opacity-0 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-mono mb-6">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up delay-100">
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text glow-text">Bhavin Karena</span>
        </h1>

        <div className="h-12 md:h-16 mb-6 opacity-0 animate-fade-up delay-200">
          <p className="text-xl md:text-3xl text-muted-foreground font-light">
            <span className="text-primary font-mono">&lt;</span>
            {displayText}
            <span className="animate-pulse text-primary">|</span>
            <span className="text-primary font-mono">/&gt;</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 opacity-0 animate-fade-up delay-300">
          <MapPin size={18} className="text-primary" />
          <span>Nikol, Ahmedabad, India</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-up delay-400">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-up delay-500">
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
    </section>
  );
};

export default HeroSection;
