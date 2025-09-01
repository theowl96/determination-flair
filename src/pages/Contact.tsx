import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Users,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+233 123 456 789", "+233 987 654 321"],
      description: "Monday - Friday: 8:00 AM - 5:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@donadee-school.edu.gh", "admissions@donadee-school.edu.gh"],
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kpong Ahudjo Campus", "Eastern Region, Ghana"],
      description: "Open for campus tours by appointment"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      description: "Closed on Sundays and public holidays"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule Campus Visit",
      description: "Book a personalized tour of our facilities",
      action: "Schedule Visit"
    },
    {
      icon: Users,
      title: "Parent Meeting",
      description: "Meet with our academic counselors",
      action: "Book Meeting"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our admissions team",
      action: "Start Chat"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-hero font-poppins mb-6 animate-text-reveal">
              Contact <span className="gradient-text-light">Us</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team at Donadee International School. 
              We're here to answer your questions and help you join our community of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
                Quick <span className="gradient-text">Actions</span>
              </h2>
              <p className="text-muted-foreground">
                Choose the best way to connect with us
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Card key={index} className="school-card group text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                        {action.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {action.description}
                      </p>
                      <Button className="btn-hero w-full">
                        {action.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <Card className="school-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="w-6 h-6 text-primary" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+233 123 456 789"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select onValueChange={(value) => handleInputChange('inquiryType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admissions">Admissions</SelectItem>
                              <SelectItem value="academics">Academics</SelectItem>
                              <SelectItem value="fees">Fees & Payments</SelectItem>
                              <SelectItem value="facilities">Facilities</SelectItem>
                              <SelectItem value="events">Events</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          placeholder="Brief subject of your inquiry"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Please provide details about your inquiry..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="btn-hero w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
                    Get in <span className="gradient-text">Touch</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're here to help you with any questions about Donadee International School. 
                    Whether you're interested in admissions, academics, or just want to learn more 
                    about our community, we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                          <p className="text-sm text-muted-foreground/80 mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map Placeholder */}
                <Card className="school-card overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Kpong Ahudjo Campus</h3>
                      <p className="text-muted-foreground text-sm">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-muted-foreground">
                Quick answers to common questions about Donadee International School
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What are the admission requirements?",
                  answer: "We require completed application forms, academic transcripts, birth certificate, and passport photos. Additional requirements may vary by grade level."
                },
                {
                  question: "What is the student-teacher ratio?",
                  answer: "We maintain a 15:1 student-teacher ratio to ensure personalized attention and quality education for every student."
                },
                {
                  question: "Are there scholarship opportunities?",
                  answer: "Yes, we offer merit-based scholarships and financial aid programs. Contact our admissions office for more information."
                },
                {
                  question: "What extracurricular activities are available?",
                  answer: "We offer sports, arts, music, drama, debate, science clubs, and various other activities to support holistic development."
                }
              ].map((faq, index) => (
                <Card key={index} className="school-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <Star className="w-12 h-12 mx-auto mb-6 text-secondary" />
            <h2 className="text-4xl font-poppins font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Take the next step toward excellence in education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button className="btn-hero">
                  Apply for Admission
                </Button>
              </Link>
              <Button variant="outline" className="btn-secondary">
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;