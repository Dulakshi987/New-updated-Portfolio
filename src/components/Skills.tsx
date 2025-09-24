import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJs, faReact, 
  faJava, faPhp, faGithub, faFigma, 
  faNodeJs 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faPalette, faCode, faCheckCircle, 
  faServer, faBug, faBook, 
  faLaptopCode, faPaintBrush, faCube,
  faDatabase, faCalendarAlt, faCloud
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', icon: faHtml5, color: '#E34F26' },
        { name: 'CSS', icon: faCss3Alt, color: '#1572B6' },
        { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
        { name: 'ReactJS', icon: faReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: faCode, color: '#3178C6' },
        { name: 'Bootstrap', icon: faLaptopCode, color: '#7952B3' },
        { name: 'Tailwind CSS', icon: faPalette, color: '#38BDF8' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: faNodeJs, color: '#339933' },
        { name: 'Express.js', icon: faServer, color: '#404040' },
        { name: 'Laravel', icon: faCube, color: '#F05340' },
        { name: 'PHP', icon: faPhp, color: '#777BB4' },
        { name: 'Java', icon: faJava, color: '#007396' },
        // { name: 'J2EE', icon: faJava, color: '#007396' },
        // { name: 'RESTful APIs', icon: faCode, color: '#6C757D' }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', icon: faDatabase, color: '#47A248' },
        { name: 'MySQL', icon: faServer, color: '#4479A1' },
        { name: 'SQLite', icon: faDatabase, color: '#003B57' }
      ]
    },
    {
      category: 'UI/UX Design',
      skills: [
        { name: 'Figma', icon: faFigma, color: '#F24E1E' },
        { name: 'Canva', icon: faPaintBrush, color: '#00C4CC' },
        // { name: 'Adobe XD', icon: faPaintBrush, color: '#FF0000' },
        // { name: 'User Research', icon: faCheckCircle, color: '#28A745' }
      ]
    },
    {
      category: 'Development Tools',
      skills: [
        { name: 'IntelliJ IDEA', icon: faCode, color: '#000000' },
        { name: 'VS Code', icon: faLaptopCode, color: '#007ACC' },
        { name: 'Git/GitHub', icon: faGithub, color: '#181717' },
                { name: 'ClickUp', icon: faCheckCircle, color: '#7B68EE' },

        // { name: 'Postman', icon: faCode, color: '#FF6C37' },
        // { name: 'NPM/Yarn', icon: faCube, color: '#CB3837' }
      ]
    },
    {
      category: 'Project Management',
      skills: [
        { name: 'Jira', icon: faCheckCircle, color: '#0052CC' },
        { name: 'ClickUp', icon: faCheckCircle, color: '#7B68EE' },
        { name: 'Google Calendar', icon: faCalendarAlt, color: '#4285F4' },
        { name: 'Microsoft Teams', icon: faCloud, color: '#6264A7' },
        { name: 'Agile/Scrum', icon: faCube, color: '#61DAFB' }
      ]
    },
    // {
    //   category: 'Infrastructure',
    //   skills: [
    //     { name: 'VMware', icon: faCloud, color: '#1A1A1A' },
    //     { name: 'Docker', icon: faCube, color: '#2496ED' },
    //     { name: 'Virtualization', icon: faServer, color: '#6C757D' }
    //   ]
    // },
    {
      category: 'Testing & QA',
      skills: [
        { name: 'Test Cases', icon: faBook, color: '#6C757D' },
        // { name: 'Manual Testing', icon: faBug, color: '#DC3545' },
        { name: 'Unit Testing', icon: faCheckCircle, color: '#28A745' },
        // { name: 'Postman API Testing', icon: faCode, color: '#FF6C37' }
      ]
    }
  ];

  const renderSkillPair = (skills, index) => (
    <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 last:mb-0">
      {skills.map((skill, skillIndex) => (
        <div key={skillIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/75 transition-colors duration-300">
          <div className="flex items-center space-x-2 flex-1">
            <div className="p-1.5 bg-background rounded-full border border-border">
              <FontAwesomeIcon 
                icon={skill.icon} 
                style={{ color: skill.color }}
                className="text-base"
              />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-foreground font-medium block truncate">{skill.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section-padding gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive full-stack skill set with modern development tools and project management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card shadow-professional border-0 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.reduce((pairs, skill, idx) => {
                    if (idx % 2 === 0) {
                      pairs.push([skill, category.skills[idx + 1]].filter(Boolean));
                    }
                    return pairs;
                  }, []).map((pair, pairIndex) => (
                    renderSkillPair(pair, pairIndex)
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;