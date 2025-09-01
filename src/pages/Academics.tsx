import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Microscope, Globe, Calculator, Palette, Music, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';
import studentsLearning from '@/assets/students-learning.jpg';

const Academics = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "English & Literature",
      description: "Comprehensive language arts program developing communication and critical thinking skills.",
      level: "Foundation - Advanced",
      color: "primary"
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "From basic numeracy to advanced calculus, building strong analytical foundations.",
      level: "Foundation - Advanced",
      color: "secondary"
    },
    {
      icon: Microscope,
      title: "Sciences",
      description: "Biology, Chemistry, Physics with hands-on laboratory experiences.",
      level: "Foundation - Advanced",
      color: "primary"
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "Geography, History, and Civic Education fostering global awareness.",
      level: "Foundation - Advanced",
      color: "secondary"
    },
    {
      icon: Palette,
      title: "Visual Arts",
      description: "Creative expression through drawing, painting, sculpture, and digital arts.",
      level: "All Levels",
      color: "primary"
    },
    {
      icon: Music,
      title: "Performing Arts",
      description: "Music, drama, and dance programs nurturing artistic talents.",
      level: "All Levels",
      color: "secondary"
    },
    {
      icon: Dumbbell,
      title: "Physical Education",
      description: "Sports and fitness programs promoting health and teamwork.",
      level: "All Levels",
      color: "primary"
    },
    {
      icon: Globe,
      title: "Foreign Languages",
      description: "French, Spanish, and local language programs for global communication.",
      level: "Intermediate - Advanced",
      color: "secondary"
    }
  ];

  const curriculum = [
    {
      level: "Foundation (Ages 3-6)",
      description: "Early childhood development with play-based learning and fundamental skills.",
      subjects: ["Pre-literacy", "Pre-numeracy", "Creative Arts", "Physical Development", "Social Skills"]
    },
    {
      level: "Primary (Ages 6-11)",
      description: "Building strong academic foundations with interactive and engaging methods.",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Arts", "Physical Education"]
    },
    {
      level: "Junior Secondary (Ages 11-14)",
      description: "Expanding knowledge base with introduction to specialized subjects.",
      subjects: ["Core Subjects", "Electives", "Technology", "Languages", "Research Skills"]
    },
    {
      level: "Senior Secondary (Ages 14-18)",
      description: "Advanced studies preparing for university and career pathways.",
      subjects: ["Advanced Sciences", "Mathematics", "Literature", "Business Studies", "University Prep"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={studentsLearning} 
            alt="Students Learning at Donadee International School" 
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
              Academic <span className="gradient-text-light">Excellence</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Our comprehensive curriculum combines international standards with local relevance, 
              ensuring students are prepared for global opportunities while staying connected to their roots.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-foreground mb-6">
              Our <span className="gradient-text">Curriculum</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A progressive educational journey from early childhood through senior secondary, 
              designed to develop critical thinking, creativity, and character.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {curriculum.map((level, index) => (
              <div key={index} className="school-card">
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-3">
                  {level.level}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {level.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {level.subjects.map((subject, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-foreground mb-6">
              Subject <span className="gradient-text">Areas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to develop well-rounded individuals with diverse skills and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={index}
                  className="school-card group text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    program.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary-dark'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <div className="inline-flex px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {program.level}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-poppins font-bold text-foreground mb-6">
                Special <span className="gradient-text">Programs</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="school-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-bold text-foreground mb-3">International Baccalaureate Prep</h3>
                <p className="text-muted-foreground text-sm">
                  Preparing students for IB certification with rigorous academic standards and global perspectives.
                </p>
              </div>
              
              <div className="school-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Microscope className="w-8 h-8 text-secondary-dark" />
                </div>
                <h3 className="font-poppins font-bold text-foreground mb-3">STEM Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced science, technology, engineering, and mathematics programs with modern laboratories.
                </p>
              </div>
              
              <div className="school-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-bold text-foreground mb-3">Creative Arts Academy</h3>
                <p className="text-muted-foreground text-sm">
                  Specialized programs for students with exceptional artistic talents and creative interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-4xl font-poppins font-bold mb-6">
              Ready to Excel Academically?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join our community of learners where determination leads to academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button className="btn-hero">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-secondary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;