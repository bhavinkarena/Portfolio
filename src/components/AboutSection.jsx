import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, Rocket, Zap, Users } from 'lucide-react';

const skills = [
  { category: 'Frontend', items: [
    { name: 'React.js', level: 90 },
    { name: 'Redux', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ]},
  { category: 'Backend', items: [
    { name: 'Node.js', level: 95 },
    { name: 'Express.js', level: 90 },
    { name: 'Socket.IO', level: 85 },
  ]},
  { category: 'Database', items: [
    { name: 'MongoDB', level: 90 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 75 },
  ]},
  { category: 'Tools', items: [
    { name: 'AWS', level: 65 },
    { name: 'Git', level: 85 },
    { name: 'REST APIs', level: 90 },
  ]},
];

const highlights = [
  { icon: Code2, title: '2+ Years', description: 'MERN Stack Development' },
  { icon: Rocket, title: 'Scalable Apps', description: 'Performance Optimized' },
  { icon: Zap, title: 'Real-time', description: 'Socket.IO & WebSockets' },
  { icon: Users, title: 'Team Player', description: 'Agile Methodology' },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="w-full px-4 md:container md:mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Who I <span className="gradient-text">Am</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              A passionate Full-Stack Developer with 2+ years of experience specializing in the MERN stack. 
              I excel in building fintech platforms, HRMS solutions, and AI-driven applications with a focus 
              on scalability, real-time features, and exceptional user experiences.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`card-glass rounded-2xl p-6 text-center card-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category, catIndex) => (
              <div
                key={category.category}
                className={`card-glass rounded-2xl p-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(catIndex + 4) * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-primary mb-6">{category.category}</h3>
                <div className="space-y-5">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-primary font-mono">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${catIndex * 200}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
