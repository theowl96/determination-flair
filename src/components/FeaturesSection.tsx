import { 
  GraduationCap, 
  Users, 
  Globe, 
  Trophy, 
  BookOpen, 
  Microscope,
  Music,
  Palette,
  Heart,
  Shield,
  Star,
  Target
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "International curriculum with personalized learning paths tailored to each student's potential.",
      color: "primary"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for success in an interconnected world through multicultural education.",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 20 students per class ensuring individual attention and meaningful teacher-student relationships.",
      color: "primary"
    },
    {
      icon: Trophy,
      title: "Championship Sports",
      description: "State-of-the-art facilities supporting various sports with professional coaching and competitive teams.",
      color: "secondary"
    },
    {
      icon: Microscope,
      title: "STEM Innovation",
      description: "Cutting-edge science labs and technology programs fostering innovation and critical thinking.",
      color: "primary"
    },
    {
      icon: Music,
      title: "Arts & Culture",
      description: "Rich arts programs including music, drama, and visual arts to nurture creative expression.",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Character Building",
      description: "Values-based education developing integrity, leadership, and social responsibility.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure campus with 24/7 monitoring and comprehensive student welfare programs.",
      color: "secondary"
    }
  ];

  const achievements = [
    {
      icon: Star,
      number: "98%",
      label: "University Acceptance Rate",
      description: "Our graduates gain admission to top universities worldwide"
    },
    {
      icon: Trophy,
      number: "25+",
      label: "Awards This Year",
      description: "Recognition in academics, sports, and extracurricular activities"
    },
    {
      icon: Target,
      number: "15:1",
      label: "Student-Teacher Ratio",
      description: "Ensuring personalized attention for every student"
    },
    {
      icon: Globe,
      number: "30+",
      label: "Nationalities",
      description: "Diverse international community fostering global citizenship"
    }
  ];

  return (
    <section className="py-24 bg-muted/30" id="about">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            <Star className="w-4 h-4" />
            Why Choose Donadee International School
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Where <span className="gradient-text">Determination</span> Meets Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At our Kpong Ahudjo campus, we provide world-class education that nurtures academic achievement, 
            character development, and global citizenship, preparing students for success in an ever-changing world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="school-card group cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                  feature.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary-dark'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-hero-gradient rounded-3xl opacity-5"></div>
          <div className="relative p-12 rounded-3xl border border-primary/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
                Proven Track Record of <span className="gradient-text">Success</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence is reflected in our students' achievements and the recognition we receive.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold gradient-text mb-2">
                      {achievement.number}
                    </div>
                    <div className="font-semibold text-foreground mb-2">
                      {achievement.label}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;