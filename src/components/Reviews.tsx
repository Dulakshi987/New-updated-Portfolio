import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
  const reviews = [
    {
      name: 'Tharindu Darshana',
      role: 'Assistant IT Lectuer',
      company: 'Esoft',
      rating: 4,
      review: 'She is a motivated student who learns with interest and focus. During the software project, she displayed strong coding skills, creativity, and good teamwork. At the same time, she needs to improve documentation and time management. Overall, she performed well.',
      avatar: 'TD',
      date: '2025-05-10'
    },
    {
      name: 'Usha Gayani',
      role: 'Software Engineer',
      company: 'Keen Rabbits Pvt.Ltd',
      rating: 5,
      review: 'Working with Keshani was fantastic. She understood our requirements perfectly and delivered a solution that exceeded expectations. Her technical expertise and communication skills are excellent.',
       avatar: 'UG',
      date: '2025-08-15'
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const slidesToShow = 1; // Show 1 review per slide
  const totalSlides = reviews.length; // 6 total slides

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  // Navigation handlers
  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const ReviewCard = ({ review }: { review: any }) => (
    <Card 
      className="gradient-card shadow-professional border-0 hover-lift transition-professional relative overflow-hidden max-w-md mx-auto"
    >
      <CardContent className="p-6 h-full">
        <div className="absolute top-4 right-4 text-primary/20">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
        </div>
        
        <div className="flex items-start mb-4">
          <Avatar className="h-12 w-12 bg-primary text-primary-foreground mr-4 flex-shrink-0">
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              {review.avatar}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground truncate">{review.name}</h4>
            <p className="text-sm text-primary font-medium truncate">{review.role}</p>
            <p className="text-xs text-muted-foreground truncate">{review.company}</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          {renderStars(review.rating)}
        </div>

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-5 text-center">
          "{review.review}"
        </p>

        <div className="text-xs text-muted-foreground text-center">
          {new Date(review.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="reviews" className="section-padding gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Client Reviews & Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative mb-12">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-background/95 backdrop-blur-sm hover:bg-background rounded-full p-3 shadow-lg transition-all duration-300 border border-border/50"
            aria-label="Previous review"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-primary h-4 w-4" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-background/95 backdrop-blur-sm hover:bg-background rounded-full p-3 shadow-lg transition-all duration-300 border border-border/50"
            aria-label="Next review"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-primary h-4 w-4" />
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-[400px] flex items-center justify-center"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary scale-125 shadow-md'
                    : 'bg-muted hover:bg-primary/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default Reviews;