import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Star, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin', href: '/signin' },
  ];

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-medium' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          {/* Top Bar - Contact Info */}
          <div className={`flex items-center justify-between py-2 text-sm border-b border-border/20 transition-opacity duration-300 ${
            isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
          }`}>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+233 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@donadee-school.edu.gh</span>
              </div>
            </div>
            <div className="text-white/80">
              Kpong Ahudjo Campus • Excellence in Education
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-glow">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className={`font-poppins font-bold text-lg transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}>
                  Donadee International
                </div>
                <div className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/80'
                }`}>
                  School
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-secondary'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link to="/admissions">
                <Button className="hidden sm:inline-flex btn-hero">
                  Apply Now
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-foreground hover:bg-accent' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg"></div>
        <div className="relative h-full flex flex-col">
          <div className="flex-1 pt-24 px-6">
            <nav className="space-y-6">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen ? 'cta-slide-up 0.6s var(--animation-spring) forwards' : 'none',
                    opacity: isMobileMenuOpen ? 1 : 0
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-12 space-y-4">
              <Link to="/admissions">
                <Button className="btn-hero w-full" size="lg">
                  Apply for Admission
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-secondary w-full" size="lg">
                  Schedule Visit
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="p-6 border-t border-border">
            <div className="text-center space-y-2">
              <div className="font-semibold text-foreground">Contact Us</div>
              <div className="text-sm text-muted-foreground">
                <div>+233 123 456 789</div>
                <div>info@donadee-school.edu.gh</div>
                <div className="mt-2">Kpong Ahudjo Campus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;