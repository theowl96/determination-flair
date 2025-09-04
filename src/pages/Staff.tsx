import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Linkedin, Twitter, Mail, MapPin, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroCampus from '@/assets/hero-campus.jpg';
import staffPrincipal from '@/assets/staff-principal.jpg';
import staffTeacher1 from '@/assets/staff-teacher1.jpg';
import staffTeacher2 from '@/assets/staff-teacher2.jpg';
import staffLibrarian from '@/assets/staff-librarian.jpg';
import staffCoach from '@/assets/staff-coach.jpg';
import staffArts from '@/assets/staff-arts.jpg';

const Staff = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Dr. Elizabeth Mensah",
      position: "Principal & Academic Director",
      image: staffPrincipal,
      credentials: "Ph.D. Educational Leadership, M.Ed. Curriculum Development",
      bio: "With over 20 years in international education, Dr. Mensah leads our school with vision and dedication to academic excellence.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/elizabeth-mensah",
        twitter: "https://twitter.com/drmensah_edu",
        email: "e.mensah@donadeeintl.edu.gh"
      },
      specialties: ["Educational Leadership", "Curriculum Development", "International Programs"]
    },
    {
      id: 2,
      name: "Mr. James Osei",
      position: "Head of Mathematics Department",
      image: staffTeacher1,
      credentials: "M.Sc. Mathematics, B.Ed. Mathematics Education",
      bio: "A passionate educator who makes complex mathematical concepts accessible and engaging for all students.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/james-osei",
        twitter: "https://twitter.com/james_math",
        email: "j.osei@donadeeintl.edu.gh"
      },
      specialties: ["Advanced Mathematics", "Problem Solving", "STEM Education"]
    },
    {
      id: 3,
      name: "Ms. Sarah Adjei",
      position: "English & Literature Teacher",
      image: staffTeacher2,
      credentials: "M.A. English Literature, B.A. English Language Arts",
      bio: "Inspiring students to discover the power of language and literature through creative and critical thinking.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/sarah-adjei",
        twitter: "https://twitter.com/sarah_english",
        email: "s.adjei@donadeeintl.edu.gh"
      },
      specialties: ["Creative Writing", "Literary Analysis", "Public Speaking"]
    },
    {
      id: 4,
      name: "Mrs. Grace Asante",
      position: "Head Librarian & Research Coordinator",
      image: staffLibrarian,
      credentials: "M.L.I.S. Library Science, B.A. Information Studies",
      bio: "Fostering a love for reading and research while maintaining our comprehensive digital and physical library resources.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/grace-asante",
        email: "g.asante@donadeeintl.edu.gh"
      },
      specialties: ["Information Literacy", "Research Methods", "Digital Resources"]
    },
    {
      id: 5,
      name: "Coach Michael Boateng",
      position: "Physical Education & Sports Director",
      image: staffCoach,
      credentials: "B.Sc. Sports Science, Certified Athletics Coach",
      bio: "Building character, teamwork, and physical fitness through comprehensive sports and wellness programs.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/michael-boateng",
        twitter: "https://twitter.com/coach_mike",
        email: "m.boateng@donadeeintl.edu.gh"
      },
      specialties: ["Athletic Development", "Team Sports", "Health & Wellness"]
    },
    {
      id: 6,
      name: "Ms. Akosua Darko",
      position: "Arts & Creative Director",
      image: staffArts,
      credentials: "M.F.A. Visual Arts, B.A. Fine Arts Education",
      bio: "Nurturing creative expression and artistic talents while celebrating cultural heritage through various art forms.",
      socialMedia: {
        linkedin: "https://linkedin.com/in/akosua-darko",
        twitter: "https://twitter.com/akosua_arts",
        email: "a.darko@donadeeintl.edu.gh"
      },
      specialties: ["Visual Arts", "Cultural Studies", "Creative Expression"]
    }
  ];

  const departments = [
    { name: "Academic Leadership", count: 5, icon: Award },
    { name: "Mathematics & Sciences", count: 12, icon: Users },
    { name: "Languages & Humanities", count: 10, icon: Users },
    { name: "Arts & Culture", count: 8, icon: Users },
    { name: "Sports & Wellness", count: 6, icon: Users },
    { name: "Support Services", count: 15, icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCampus} 
            alt="Donadee International School Faculty" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/80 to-secondary/70"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/about" className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>
            
            <h1 className="text-hero font-poppins mb-6 animate-text-reveal">
              Our <span className="gradient-text-light">Dedicated Staff</span>
            </h1>
            
            <p className="text-motto text-secondary-light mb-8 animate-fade-in">
              Meet the passionate educators who shape young minds and inspire excellence
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">60+ Dedicated Professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
                Our <span className="gradient-text">Departments</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Expertise across all areas of education and student development
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {departments.map((dept, index) => (
                <div key={index} className="text-center group hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <dept.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-1">{dept.count}</div>
                  <div className="text-sm text-muted-foreground font-medium">{dept.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Staff Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold text-foreground mb-6">
                Meet Our <span className="gradient-text">Leadership Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get to know the exceptional educators who lead our departments and inspire our students every day
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {staffMembers.map((staff) => (
                  <CarouselItem key={staff.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group h-full overflow-hidden hover-scale animate-fade-in border-0 school-card">
                      <div className="relative overflow-hidden">
                        <img 
                          src={staff.image} 
                          alt={`${staff.name} - ${staff.position}`}
                          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {staff.socialMedia.linkedin && (
                            <a 
                              href={staff.socialMedia.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                              <Linkedin className="w-4 h-4 text-white" />
                            </a>
                          )}
                          {staff.socialMedia.twitter && (
                            <a 
                              href={staff.socialMedia.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                              <Twitter className="w-4 h-4 text-white" />
                            </a>
                          )}
                          <a 
                            href={`mailto:${staff.socialMedia.email}`}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <Mail className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-xl font-poppins font-bold text-foreground mb-2">{staff.name}</h3>
                        <p className="text-primary font-medium mb-3">{staff.position}</p>
                        <p className="text-sm text-muted-foreground mb-4 italic">{staff.credentials}</p>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{staff.bio}</p>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-foreground">Specialties:</h4>
                          <div className="flex flex-wrap gap-2">
                            {staff.specialties.map((specialty, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 hover:bg-primary hover:text-white hover:border-primary" />
              <CarouselNext className="hidden md:flex -right-12 hover:bg-primary hover:text-white hover:border-primary" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-poppins font-bold text-white mb-6">
              Join Our <span className="text-secondary">Teaching Family</span>
            </h2>
            <p className="text-xl text-secondary-light mb-8">
              Are you passionate about education and ready to make a difference? 
              We're always looking for dedicated educators to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8"
              >
                View Open Positions
              </Button>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary px-8"
                >
                  Contact HR Department
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;