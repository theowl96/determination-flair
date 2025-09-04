import Navigation from '@/components/Navigation';
import FeaturesSection from '@/components/FeaturesSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Users, Calendar, Trophy, Camera, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroCampus from '@/assets/hero-campus.jpg';
import galleryClassroom from '@/assets/gallery-classroom.jpg';
import galleryScienceLab from '@/assets/gallery-science-lab.jpg';
import galleryArtsPerformance from '@/assets/gallery-arts-performance.jpg';
import gallerySportsField from '@/assets/gallery-sports-field.jpg';
import galleryLibrary from '@/assets/gallery-library.jpg';
import galleryGraduation from '@/assets/gallery-graduation.jpg';

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

      {/* School History Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold text-foreground mb-6">
                Our <span className="gradient-text">History</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From humble beginnings to educational excellence - discover the journey that shaped Donadee International School
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full hidden lg:block"></div>
              
              <div className="space-y-12">
                {/* 2008 - Foundation */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2 lg:pr-12 text-right">
                    <div className="school-card">
                      <div className="flex items-center justify-end gap-2 mb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold gradient-text">2008</span>
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Foundation Year</h3>
                      <p className="text-muted-foreground">
                        Donadee International School was established with a vision to provide world-class education 
                        in Ghana, starting with just 50 students and 8 dedicated teachers.
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  <div className="lg:w-1/2 lg:pl-12"></div>
                </div>

                {/* 2012 - Campus Expansion */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2 lg:pr-12"></div>
                  <div className="hidden lg:flex w-4 h-4 bg-secondary rounded-full border-4 border-background z-10"></div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="school-card">
                      <div className="flex items-start gap-2 mb-4">
                        <span className="text-2xl font-bold gradient-text">2012</span>
                        <Award className="w-5 h-5 text-secondary mt-1" />
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Campus Expansion</h3>
                      <p className="text-muted-foreground">
                        Major expansion of the Kpong Ahudjo campus with new science laboratories, library, 
                        and sports facilities to accommodate our growing student body of 200+ students.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2016 - International Accreditation */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2 lg:pr-12 text-right">
                    <div className="school-card">
                      <div className="flex items-center justify-end gap-2 mb-4">
                        <Trophy className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold gradient-text">2016</span>
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-3">International Recognition</h3>
                      <p className="text-muted-foreground">
                        Achieved international accreditation and launched our Cambridge International programme, 
                        establishing partnerships with universities worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  <div className="lg:w-1/2 lg:pl-12"></div>
                </div>

                {/* 2020 - Digital Innovation */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2 lg:pr-12"></div>
                  <div className="hidden lg:flex w-4 h-4 bg-secondary rounded-full border-4 border-background z-10"></div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="school-card">
                      <div className="flex items-start gap-2 mb-4">
                        <span className="text-2xl font-bold gradient-text">2020</span>
                        <Calendar className="w-5 h-5 text-secondary mt-1" />
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Digital Innovation</h3>
                      <p className="text-muted-foreground">
                        Successfully transitioned to hybrid learning during global challenges, implementing 
                        cutting-edge technology and maintaining educational excellence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2023 - Present */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2 lg:pr-12 text-right">
                    <div className="school-card">
                      <div className="flex items-center justify-end gap-2 mb-4">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold gradient-text">2023</span>
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-3">Thriving Community</h3>
                      <p className="text-muted-foreground">
                        Today, we proudly serve 500+ students with 60+ dedicated staff members, maintaining 
                        our commitment to excellence and preparing students for global success.
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  <div className="lg:w-1/2 lg:pl-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold text-foreground mb-6">
                Campus <span className="gradient-text">Gallery</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Take a visual journey through our vibrant campus life and discover the spaces where learning comes alive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Classroom */}
              <div className="group relative overflow-hidden rounded-xl hover-scale animate-fade-in">
                <img 
                  src={galleryClassroom} 
                  alt="Students collaborating in modern classroom" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm font-medium">Classroom</span>
                    </div>
                    <p className="text-sm">Interactive Learning Spaces</p>
                  </div>
                </div>
              </div>

              {/* Science Lab */}
              <div className="group relative overflow-hidden rounded-xl hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <img 
                  src={galleryScienceLab} 
                  alt="Students conducting science experiments" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm font-medium">Science Lab</span>
                    </div>
                    <p className="text-sm">Hands-on Experiments</p>
                  </div>
                </div>
              </div>

              {/* Arts Performance */}
              <div className="group relative overflow-hidden rounded-xl hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <img 
                  src={galleryArtsPerformance} 
                  alt="Students performing cultural arts on stage" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm font-medium">Arts & Culture</span>
                    </div>
                    <p className="text-sm">Creative Expression</p>
                  </div>
                </div>
              </div>

              {/* Sports Field */}
              <div className="group relative overflow-hidden rounded-xl hover-scale animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src={gallerySportsField} 
                  alt="Students playing soccer on school field" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm font-medium">Sports</span>
                    </div>
                    <p className="text-sm">Athletic Excellence</p>
                  </div>
                </div>
              </div>

              {/* Library */}
              <div className="group relative overflow-hidden rounded-xl hover-scale animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <img 
                  src={galleryLibrary} 
                  alt="Students studying in modern library" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm font-medium">Library</span>
                    </div>
                    <p className="text-sm">Knowledge Center</p>
                  </div>
                </div>
              </div>

              {/* Graduation */}
              <div className="group relative overflow-hidden rounded-xl hover-scale animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <img 
                  src={galleryGraduation} 
                  alt="Graduation ceremony with students and families" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm font-medium">Graduation</span>
                    </div>
                    <p className="text-sm">Celebrating Success</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button className="btn-hero">
                  Schedule a Campus Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Staff Page */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
              Meet Our <span className="gradient-text">Dedicated Staff</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get to know our passionate educators who bring years of experience and unwavering commitment to nurturing young minds
            </p>
            <Link to="/staff">
              <Button className="btn-hero">
                Meet Our Faculty
              </Button>
            </Link>
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