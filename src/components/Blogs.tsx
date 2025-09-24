import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faExternalLinkAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
  const blogPosts = [
    {
        image: <img src='/public/img/Graphic.jpeg'></img>, 
      title: 'How to Choose the Right Web Development Framework',
      date: '2025-04-25',
      link: 'https://medium.com/@dulakshikeshani288/how-to-choose-the-right-web-development-framework-b49ad3d71c40',
    
    },
    {
      title: 'Continuous Innovation in Software Development in CI/CD Pipelines',
      date: '2025-04-27',
      link: 'https://medium.com/@dulakshikeshani288/continuous-innovation-in-software-development-of-ci-cd-pipelines-437828818b24',
      
    },
    {
      title: 'Software Design Patterns',
      date: '2025-08-27',
      link: 'https://medium.com/@dulakshikeshani288/software-design-patterns-19cec1b10233',
     
    }
   
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'React': 'bg-blue-100 text-blue-700 border-blue-200',
      'CSS': 'bg-green-100 text-green-700 border-green-200',
      'TypeScript': 'bg-purple-100 text-purple-700 border-purple-200',
      'Performance': 'bg-orange-100 text-orange-700 border-orange-200',
      'JavaScript': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'Backend': 'bg-red-100 text-red-700 border-red-200',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <section id="blogs" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights about web development and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
             
            >
              <CardContent className="p-0">
                <div className="relative">
                 
                  
                 
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="outline" 
                      className={getCategoryColor(post.category)}
                    >
                      
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <FontAwesomeIcon icon={faClock} className="mr-1" />
                      
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faUser} className="mr-1" />
                      Dulakshi Keshani
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faCalendar} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button 
                  size="sm"
                  className="w-full gradient-primary hover:shadow-glow"
                  asChild
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                    Read More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary-light"
          >
            View All Posts
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;