import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'dulakshikeshani288@gmail.com',
      link: 'mailto:dulakshikeshani288@gmail.com'
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '+94 70 215 6096',
      link: 'tel:+94702156096'
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: 'Gampaha, Sri Lanka',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: faGithub,
      label: 'GitHub',
      link: 'https://github.com/Dulakshi987',
      color: 'hover:text-gray-800'
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dulakshi-keshani-4a9558294/',
      color: 'hover:text-blue-600'
    },
    {
      icon: faDiscord,
      label: 'Discord',
      link: 'https://discord.com/channels/@me', // Replace with your Discord profile link
      color: 'hover:text-indigo-500'
    },
    {
      icon: faMedium,
      label: 'Medium',
      link: 'https://medium.com/@dulakshikeshani288', // Replace with your Medium profile link
      color: 'hover:text-gray-900'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Get in touch and let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Get In Touch Section */}
          <Card className="gradient-card shadow-professional border-0">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 gradient-primary rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <FontAwesomeIcon 
                        icon={info.icon} 
                        className="text-primary-foreground text-sm md:text-base" 
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs md:text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-sm md:text-base text-foreground hover:text-primary transition-professional break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm md:text-base text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Follow Me Section */}
          <Card className="gradient-card shadow-professional border-0">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                Follow Me
              </h3>
              
              {/* Single Row Layout for Social Icons */}
              <div className="flex justify-center sm:justify-start space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-3 rounded-lg bg-background/50 border border-border hover:bg-background transition-professional group ${social.color}`}
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon 
                      icon={social.icon} 
                      className={`text-muted-foreground transition-professional group-hover:scale-110 mb-1`}
                      size="lg"
                    />
                    <span className="text-xs font-medium text-foreground">{social.label}</span>
                  </a>
                ))}
              </div>

              {/* Contact Form */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Send a Message
                </h4>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 md:px-4 md:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-professional text-sm"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 md:px-4 md:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-professional text-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-professional resize-none text-sm"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary hover:shadow-glow transition-professional"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;