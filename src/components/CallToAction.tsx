import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, FileText, Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              Ready to Join Our
              <br />
              <span className="text-secondary">Excellence Community?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Take the first step toward your child's bright future at Donadee International School. 
              Experience education where determination truly leads to success.
            </p>
            <div className="text-lg text-secondary font-medium">
              "Determination Leads to Success" - Our commitment to every student
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <Button 
              size="lg" 
              className="btn-hero h-auto py-6 px-8 flex-col space-y-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            >
              <FileText className="w-6 h-6" />
              <span className="font-semibold">Apply Now</span>
              <span className="text-sm opacity-80">Start Your Journey</span>
            </Button>
            
            <Button 
              size="lg" 
              className="btn-hero h-auto py-6 px-8 flex-col space-y-2 bg-secondary hover:bg-secondary-dark text-primary-dark"
            >
              <Calendar className="w-6 h-6" />
              <span className="font-semibold">Schedule Visit</span>
              <span className="text-sm opacity-80">See Our Campus</span>
            </Button>
            
            <Button 
              size="lg" 
              className="btn-hero h-auto py-6 px-8 flex-col space-y-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
            >
              <Phone className="w-6 h-6" />
              <span className="font-semibold">Contact Us</span>
              <span className="text-sm opacity-80">Get Information</span>
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-secondary font-semibold mb-2">Call Us</div>
              <div className="text-white/90">+233 123 456 789</div>
            </div>
            <div>
              <div className="text-secondary font-semibold mb-2">Email Us</div>
              <div className="text-white/90">admissions@donadee-school.edu.gh</div>
            </div>
            <div>
              <div className="text-secondary font-semibold mb-2">Visit Us</div>
              <div className="text-white/90">Kpong Ahudjo Campus</div>
            </div>
          </div>

          {/* Motto Footer */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-2xl font-poppins italic text-secondary">
              "Where Determination Leads to Success"
            </p>
            <p className="text-white/70 mt-2">
              Donadee International School - Kpong Ahudjo Campus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;