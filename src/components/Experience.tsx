import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faAward } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const experiences = [
     {
      type: 'education',
      icon: faGraduationCap,
      title: 'Bachelor of Science in Software Engineering',
      company: 'Cardiff Metropolitan University(ICBT)',
      period: ' 2023- PRESENT',
      location: 'Colombo,Sri Lanka',
      description: [
        'Passonate Undergratuate Student',
        'Specialized in Software Engineering and Web Development'
      ],
      technologies: ['Java', 'React.Js', 'Node.Js', 'MYSQL','Express.Js','MongoDB','Machine Learning','AI','R','SDLC','GIT','Testing','UI/UX','Data Structures', 'Algorithms']
    },
    {
      type: 'work',
      icon: faBriefcase,
      title: 'Software Engineer Intern',
      company: 'Keen Rabbits Pvt.LTD',
      period: 'Feb 2025 - Aug 2025',
      location: 'Gampaha(Hybrid)',
      description: [
        'Designed , Developed and maintained Full-stack web applications ',
        'Tetsing & Debugging full web applications and fixed bugs',
        'Collaborated with cross-functional teams to deliver features on time',
        'Worked agile enviorement and followed SDLC principles',
        'Handled Version control and CI/CD(etc:Git/Github)',
        'Developed Real-time project under senior mentroship'
      ],
      technologies: ['ReactJS', 'Laravel', 'MYSQL','JQery', 'AJAX', 'C-Panel', 'Git','Manual testing','Canva','Microsoft Assure','UI','SEO','Project Colloborate','Time Management','Agile Environment']
    },
    {
      type: 'work',
      icon: faBriefcase,
      title: 'Web Developer Intern',
      company: 'IT Signature',
      period: 'Sep 2024 - Dec 2024',
      location: 'Colombo(On-site)',
      description: [
        'Developed and maintained Backend based web applications ',
        'Collaborated with cross-functional teams to deliver feat,ures on time',
        'Worked agile enviorement and followed SDLC principles',
        'Developed demostrate skills to clients when finally real time projects.'
      ],
      technologies: ['PHP', 'JavaScript', 'Bootstrap', 'HTML','JQery', 'Figma','Backend Development','Time Management','Agile Environment']
    },
   
    
  ];

  const getTypeConfig = (type: string) => {
    switch (type) {
      case 'work':
        return { bgColor: 'bg-primary', textColor: 'text-primary-foreground' };
      case 'education':
        return { bgColor: 'bg-primary', textColor: 'text-primary-foreground' };
      case 'certification':
        return { bgColor: 'bg-warning', textColor: 'text-warning-foreground' };
      default:
        return { bgColor: 'bg-muted', textColor: 'text-muted-foreground' };
    }
  };

  return (
    <section id="experience" className="section-padding gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-border"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className={`flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary border-4 border-background relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <FontAwesomeIcon 
                    icon={experience.icon} 
                    className="text-primary-foreground text-sm" 
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-6 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                } max-w-md md:max-w-lg`}>
                  <Card className="gradient-card shadow-professional border-0 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-primary font-medium mb-1">
                            {experience.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {experience.period} • {experience.location}
                          </p>
                        </div>
                        <Badge 
                          className={`${getTypeConfig(experience.type).bgColor} ${getTypeConfig(experience.type).textColor}`}
                        >
                          {experience.type}
                        </Badge>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;