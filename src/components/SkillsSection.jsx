import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const colorMap = {
  'yellow-orange': { from: '#eab308', to: '#f97316' },
  'cyan-blue': { from: '#06b6d4', to: '#3b82f6' },
  'green-emerald': { from: '#10b981', to: '#059669' },
  'purple-pink': { from: '#a855f7', to: '#ec4899' },
  'orange-red': { from: '#f97316', to: '#ef4444' },
  'indigo-purple': { from: '#6366f1', to: '#a855f7' },
};

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
    colorKey: 'yellow-orange',
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Redux', 'RTK Query', 'Tailwind CSS', 'Shadcn', 'Bootstrap', 'React Admin'],
    colorKey: 'cyan-blue',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Parse Server', 'Socket.IO', 'REST APIs'],
    colorKey: 'green-emerald',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    colorKey: 'purple-pink',
  },
  {
    title: 'Tools & Services',
    skills: ['AWS S3', 'Git/GitHub', 'Stripe', 'Chart.js', 'Puppeteer', 'Docker'],
    colorKey: 'orange-red',
  },
  {
    title: 'AI/ML',
    skills: ['OpenAI API', 'Gemini', 'LangChain', 'Prompt Engineering'],
    colorKey: 'indigo-purple',
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto relative">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Technical <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`card-glass rounded-2xl p-6 card-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="h-1 rounded-full mb-6"
                  style={{
                    background: `linear-gradient(to right, ${colorMap[category.colorKey].from}, ${colorMap[category.colorKey].to})`,
                  }}
                />
                <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-lg bg-muted/50 text-muted-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '50K+', label: 'Lines of Code' },
              { number: '2+', label: 'Years Experience' },
              { number: '5+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
