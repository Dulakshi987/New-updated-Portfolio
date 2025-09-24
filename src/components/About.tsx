import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLightbulb, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const highlights = [
    {
      icon: faCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices'
    },
    {
      icon: faLightbulb,
      title: 'Problem Solver',
      description: 'Analytical thinking to solve complex technical challenges'
    },
    {
      icon: faUsers,
      title: 'Team Player',
      description: 'Collaborative approach to delivering exceptional results'
    },
    {
      icon: faRocket,
      title: 'Fast Learner',
      description: 'Continuously adapting to new technologies and frameworks'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate software engineer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="gradient-card shadow-professional border-0 hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    As a passionate software engineer, I specialize in building innovative web applications that blend cutting-edge technology with intuitive user experiences. 
                     My journey in software development began with a curiosity for code, evolving into a commitment to creating tools that empower users and streamline processes.
                  </p>
                  <p>
                    Proficient in React.Js,JavaScript,Bootstrap, and Laravel.I excel in agile environments where collaboration fuels creativity. From frontend interfaces that captivate to backend systems that scale effortlessly, I handle the full stack with precision. 
                  </p>
                  <p>
                   Eager to contribute to impactful projects, I seek opportunities to drive digital transformation in dynamic teams. Beyond coding, I enjoy exploring emerging technologies and mentoring peers. Let's connect to build something extraordinary together your vision, my expertise.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl overflow-hidden shadow-professional border-0 hover-lift transition-professional">
              {/* Replace with your image - options below */}
              
              {/* Option 1: Your profile photo */}
              <img 
                src="../img/about.jpg" 
                alt="Dulakshi Keshani" 
                className="w-full h-full object-cover"
              />
              
              {/* Option 2: Placeholder image (uncomment to use) */}
              {/* <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Software Developer"
                  className="w-3/4 h-3/4 object-cover rounded-full"
                />
              </div> */}
              
              {/* Option 3: Geometric pattern (uncomment to use) */}
              {/* <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full animate-pulse"></div>
              </div> */}
            </div>
            
            {/* Optional: Add a subtle overlay with your name/initials */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6">
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;