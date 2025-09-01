import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Play, ArrowRight, Star, Users, Trophy } from 'lucide-react';
import heroCampus from '@/assets/hero-campus.jpg';
import studentsLearning from '@/assets/students-learning.jpg';
import sportsFacilities from '@/assets/sports-facilities.jpg';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const images = [
    {
      src: heroCampus,
      alt: "Donadee International School Campus - Modern Educational Excellence",
      title: "Our Beautiful Campus"
    },
    {
      src: studentsLearning,
      alt: "International Students Learning Together",
      title: "Academic Excellence"
    },
    {
      src: sportsFacilities,
      alt: "World-Class Sports Facilities",
      title: "Athletic Programs"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ${
                index === currentImage ? 'scale-105' : 'scale-100'
              } ${isLoaded ? 'animate-hero-fade-in' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-dark/70 to-secondary/60"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Star className="w-8 h-8 text-secondary" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <Trophy className="w-12 h-12 text-secondary" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-25" style={{ animationDelay: '2s' }}>
        <Users className="w-10 h-10 text-secondary" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Logo/Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 ${
          isLoaded ? 'animate-logo-bounce' : 'opacity-0'
        }`}>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center animate-glow">
            <Star className="w-5 h-5 text-primary-dark" />
          </div>
          <span className="font-semibold text-sm tracking-wide">DONADEE INTERNATIONAL SCHOOL</span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-hero font-poppins mb-6 ${
          isLoaded ? 'animate-text-reveal' : 'opacity-0'
        }`}>
          <span className="block">Excellence in</span>
          <span className="block gradient-text">International Education</span>
        </h1>

        {/* Motto */}
        <div className="relative mb-8">
          <p className={`text-motto text-secondary-light max-w-2xl mx-auto ${
            isLoaded ? 'animate-motto-typewriter' : 'opacity-0'
          }`} style={{ 
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: isLoaded ? '100%' : '0',
            margin: '0 auto'
          }}>
            "Determination Leads to Success"
          </p>
        </div>

        {/* Location Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-12 ${
          isLoaded ? 'animate-cta-slide-up' : 'opacity-0'
        }`}>
          <MapPin className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium">Kpong Ahudjo Campus</span>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto ${
          isLoaded ? 'animate-cta-slide-up' : 'opacity-0'
        }`}>
          <Button className="btn-hero group w-full sm:w-auto">
            Discover Excellence at Donadee
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" className="btn-secondary w-full sm:w-auto group">
            <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            Virtual Campus Tour
          </Button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto ${
          isLoaded ? 'animate-cta-slide-up' : 'opacity-0'
        }`} style={{ animationDelay: '2.8s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-1">500+</div>
            <div className="text-sm text-white/80">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-1">98%</div>
            <div className="text-sm text-white/80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-1">15+</div>
            <div className="text-sm text-white/80">Years Excellence</div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-secondary shadow-glow' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`View ${images[index].title}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;