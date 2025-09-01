import Navigation from '@/components/Navigation';
import FeaturesSection from '@/components/FeaturesSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Users, Calendar, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroCampus from '@/assets/hero-campus.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCampus} 
            alt="Donadee International School Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/80 to-secondary/70"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-hero font-poppins mb-6 animate-text-reveal">
              About <span className="gradient-text-light">Donadee International</span>
            </h1>
            
            <p className="text-motto text-secondary-light mb-8 animate-fade-in">
              "Determination Leads to Success"
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Kpong Ahudjo Campus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-poppins font-bold text-foreground mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2008, Donadee International School has been a beacon of educational excellence 
                  in Ghana, nurturing young minds with our core belief that "Determination Leads to Success."
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Located in the serene Kpong Ahudjo campus, we provide a world-class international education 
                  that prepares students for global citizenship while maintaining strong roots in African values.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Graduates</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="school-card p-8">
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide holistic, international-standard education that develops critical thinking, 
                    character, and global awareness, empowering students to become leaders who contribute 
                    positively to society.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="school-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-bold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We uphold the highest ethical standards and foster honesty in all our interactions.
                </p>
              </div>
              
              <div className="school-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-secondary-dark" />
                </div>
                <h3 className="font-poppins font-bold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in all endeavors, pushing boundaries to achieve the best.
                </p>
              </div>
              
              <div className="school-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-bold text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new ideas and technologies to enhance the learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-4xl font-poppins font-bold mb-6">
              Join the Donadee Family
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Experience education where determination truly leads to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button className="btn-hero">
                  Apply for Admission
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;