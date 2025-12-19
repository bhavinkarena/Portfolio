import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'MERN Stack Developer',
    company: 'The Bilions',
    period: 'Feb 2025 - Aug 2025',
    current: true,
    achievements: [
      'Contributing to full-stack development with MERN stack',
      'Built fintech platform "Getways" with digital wallet management',
      'Developed comprehensive HRMS with real-time notifications',
      'Created full-stack e-commerce platform "Total Liquor" with React Native mobile app',
      'Created AI-powered RFP platform "Winbid AI" with 60% time reduction',
      'Implemented multi-role access systems and chatbot integrations',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'Thinknovus Technology',
    period: 'Dec 2023 - Jan 2025',
    current: false,
    achievements: [
      'Contributed to full-stack development with modern web technologies',
      'Working on frontend and backend feature implementations',
      'Collaborating with the development team on scalable solutions',
      'Developed a comprehensive backend for Spacerenta with payment integration.',
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Where I've <span className="gradient-text">Worked</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                } ${index % 2 === 0 ? (isVisible ? 'md:translate-x-0' : 'md:-translate-x-10') : (isVisible ? 'md:translate-x-0' : 'md:translate-x-10')}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-start gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-8">
                    <div className="timeline-dot animate-pulse-glow" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="card-glass rounded-2xl p-8 card-hover">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.current && (
                          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                            Current
                          </span>
                        )}
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <div className={`flex items-center gap-2 mb-6 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Briefcase size={16} className="text-primary" />
                        <span className="text-primary font-medium">{exp.company}</span>
                      </div>

                      <ul className={`space-y-3 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
