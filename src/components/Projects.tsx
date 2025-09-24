import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faShoppingCart, faUsers, faCode, faEye } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const projects = [
    {
    title: 'CRM System',
    description: 'Book Shop Web System that cashier can generate customers bills from the system and admin can manage the users,item,customers and view generated bill and the system.',
    image: <img src='/public/img/CRM.jpeg'></img>, 
    technologies: ['Java', 'JavaScript', 'Bootstrap','MYSQL','HTML','EmailAPI'],
    githubLink: 'https://github.com/Dulakshi987/CRM_PahanaEdu',
  },
    {
      title: 'Inventory Management System',
      description: 'Comprehensive HR system with inventory management, secure OTP authentication, and dynamic content rendering for enhanced user experience and data protection.',
         image: <img src='/public/img/Hr.jpeg'></img>, 
      technologies: ['Laravel', 'JavaScript', 'Bootstrap', 'MYSQL','HTML'],
      githubLink: 'https://github.com/Dulakshi987/Inventory-and-HR',
    },
    {
      title: 'Graphic Post System',
      description: 'Internship project with admin/user interfaces, post of all type etc:pdf,jpg,.ai insert, user & post management, OTP authentication, and CRUD operations for efficient content workflows.',
       image: <img src='/public/img/Graphic.jpeg'></img>, 
      technologies: ['Laravel', 'JavaScript', 'Bootstrap', 'MYSQL','HTML'],
      githubLink: 'https://github.com/Dulakshi987/Graphic',
    },
    {
      title: 'Portfolio ',
      description: 'Professional portfolio website showcasing projects and skills with modern design.',
       image: <img src='/public/img/Portfolio.jpeg'></img>, 
      technologies: ['ReactJS', 'Tailwind CSS', 'TypeScript'],
      githubLink: 'https://github.com/alexjohnson/portfolio-v2',
    },
    {
      title: 'Investment Calculator',
      description: 'Self-study project calculates total interest, invested capital, and annual returns based on initial investment, annual contributions, and duration.',
              image: <img src='/public/img/Investment.jpeg'></img>, 
      technologies: ['ReactJS'],
      githubLink: 'https://github.com/Dulakshi987/Investment-Calculator',
    },
    {
      title: 'Hotel Management System',
      description: 'Second-year project with bank payment gateway, real-time reservations, admin/user apps, review system, and automated weekly/monthly/annual reports.',
      image: <img src='/public/img/Varsity.jpeg'></img>, 
      technologies: ['PHP', 'HTML', 'Bootstrap', 'JavScript'],
      githubLink: 'https://github.com/tdbpathiraja/Hotel-Room-Reservation-System',
    },
    {
      title: 'Pet Food Mobile App',
      description: 'Java/SQLite mobile app with cart, orders, nutrition details for customers, and admin product management.',
      image: <img src='/public/img/Petshop.png'></img>, 
      technologies: ['Java', 'CSS', 'Sqlite'],
      githubLink: 'https://github.com/Dulakshi987/Pet-food-MobileApp',
    },
    {
      title: 'Employee Automated System',
      description: 'Academic Java project with admin/HR manager roles for adding employees, designations, departments, and EPF number search.',
      image: <img src='/public/img/Employee.png'></img>, 
      technologies: ['Java','MYSQL'],
      githubLink: 'https://github.com/Dulakshi987/Employee-Automated-System',
    },
    {
      title: 'Food Cafe System',
      description: 'Academic project in HTML/CSS/JS/PHP with menu viewing, ordering, reservations, bookings, and Admin/Customer/Staff logins.',
     image: <img src='/public/img/Food.jpeg'></img>, 
      technologies: ['PHP', 'HTML', 'Bootstrap', 'JavScript'],
      githubLink: 'https://github.com/Dulakshi987/Food-Cafe--System',
    }
  ];

  // Calculate how many projects to show (2 rows = 6 projects on desktop, 4 on tablet, 2 on mobile)
  const getVisibleProjects = () => {
    if (showAllProjects) return projects;
    
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    
    if (isMobile) return projects.slice(0, 2); // 1 column * 2 rows = 2 projects
    if (isTablet) return projects.slice(0, 4); // 2 columns * 2 rows = 4 projects
    return projects.slice(0, 6); // 3 columns * 2 rows = 6 projects
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Card key={index} className="gradient-card shadow-professional border-0 hover-lift transition-professional group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="h-48 gradient-primary flex items-center justify-center text-6xl group-hover:scale-110 transition-professional">
                    {project.image}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary hover:bg-primary-light"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button 
                  size="sm"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary-light"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        {!showAllProjects && projects.length > visibleProjects.length && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAllProjects(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FontAwesomeIcon icon={faEye} className="mr-2" />
              View All {projects.length} Projects
            </Button>
          </div>
        )}

        {/* Show All Text */}
        {showAllProjects && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              Showing all {projects.length} projects
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;