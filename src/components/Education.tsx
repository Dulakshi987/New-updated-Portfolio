import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2018 - 2022',
      gpa: '3.8/4.0',
      achievements: [
        'Magna Cum Laude',
        'Dean\'s List (6 semesters)',
        'Computer Science Honor Society Member'
      ]
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Tech Academy',
      location: 'San Francisco, CA',
      period: '2017 - 2018',
      gpa: 'Certificate of Excellence',
      achievements: [
        'Top 5% of graduating class',
        'Best Final Project Award',
        'Peer Mentorship Program Leader'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: faGraduationCap
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      icon: faGraduationCap
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2022',
      icon: faGraduationCap
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications that shape my technical expertise.
          </p>
        </div>

        {/* Education */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8 text-center">
            Academic Background
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="gradient-card shadow-professional border-0 h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 gradient-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FontAwesomeIcon 
                        icon={faGraduationCap} 
                        className="text-primary-foreground text-lg md:text-xl" 
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-2 gap-1 sm:gap-4">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                          {edu.period}
                        </div>
                      </div>
                      <p className="text-sm font-medium text-foreground mb-3">{edu.gpa}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="gradient-card shadow-professional border-0 hover:shadow-glow transition-professional">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon 
                      icon={cert.icon} 
                      className="text-primary-foreground text-lg md:text-xl" 
                    />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-1">{cert.issuer}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;