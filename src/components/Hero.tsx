import React from 'react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  // Handle scroll to contact section
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll to top of page if contact section doesn't exist
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    }
  };

  // Handle CV download
  const handleDownloadCV = (e) => {
    e.preventDefault();
    // Replace with your actual CV file path
    const cvFilePath = '/img/Dulakshi_Associate.pdf'; // Fixed: removed /public
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'Dulakshi_Associate.pdf'; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600 font-bold">
                Dulakshi Keshani
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Undergraduate Software Engineer Student 
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating exceptional web experiences with modern technologies. 
              Specializing in ReactJS, Laravel, and building scalable applications that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="gradient-primary hover:shadow-glow transition-professional hover-lift"
                onClick={handleContactClick}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact Me
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary-light transition-professional hover-lift"
                onClick={handleDownloadCV}
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download CV
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6">
              
              <a 
                href="https://github.com/Dulakshi987" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-professional hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>

<a 
                href="https://www.linkedin.com/in/dulakshi-keshani-4a9558294/" // Replace with your Discord profile link
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-professional hover:scale-110"
                aria-label="Linkedin Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              
              <a 
                href="https://discord.com/channels/@me" // Replace with your Discord profile link
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-professional hover:scale-110"
                aria-label="Discord Profile"
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
              
              <a 
                href="https://medium.com/@dulakshikeshani288" // Replace with your Medium profile link
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-professional hover:scale-110"
                aria-label="Medium Articles"
              >
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full shadow-lg overflow-hidden border-4 border-gray-200/50">
                <img 
                  src="/img/IMG_9907.jpg" 
                  alt="Dulakshi Keshani Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Optional: Subtle glow effect without darkening the image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-full opacity-50 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;