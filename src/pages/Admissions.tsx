import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, CheckCircle, Upload, User, GraduationCap, FileText, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    
    // Academic History
    previousSchool: '',
    gradeApplying: '',
    academicYear: '',
    subjects: '',
    achievements: '',
    
    // Documents
    documents: []
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
  };

  const stepIcons = [User, GraduationCap, FileText, Send];
  const stepTitles = [
    'Personal Information',
    'Academic History', 
    'Document Upload',
    'Review & Submit'
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
              Admission <span className="gradient-text-light">Application</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Start your journey to academic excellence at Donadee International School. 
              Complete our simple application process to join our community.
            </p>
            
            <div className="text-secondary-light font-medium">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {stepIcons.map((Icon, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      index + 1 <= currentStep 
                        ? 'bg-primary text-white' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {index + 1 < currentStep ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <div className={`text-sm mt-2 font-medium ${
                      index + 1 <= currentStep ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {stepTitles[index]}
                    </div>
                  </div>
                ))}
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <Card className="school-card animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-6 h-6 text-primary" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>
                      Please provide basic information about the student and parent/guardian.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Enter first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Enter last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <Select onValueChange={(value) => handleInputChange('gender', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nationality">Nationality *</Label>
                        <Input
                          id="nationality"
                          value={formData.nationality}
                          onChange={(e) => handleInputChange('nationality', e.target.value)}
                          placeholder="Enter nationality"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-foreground">Parent/Guardian Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="parentName">Full Name *</Label>
                          <Input
                            id="parentName"
                            value={formData.parentName}
                            onChange={(e) => handleInputChange('parentName', e.target.value)}
                            placeholder="Parent/Guardian name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="parentPhone">Phone Number *</Label>
                          <Input
                            id="parentPhone"
                            value={formData.parentPhone}
                            onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                            placeholder="+233 123 456 789"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="parentEmail">Email Address *</Label>
                        <Input
                          id="parentEmail"
                          type="email"
                          value={formData.parentEmail}
                          onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                          placeholder="parent@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Home Address *</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="Enter complete address"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Academic History */}
              {currentStep === 2 && (
                <Card className="school-card animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-primary" />
                      Academic History
                    </CardTitle>
                    <CardDescription>
                      Tell us about the student's educational background and the grade they're applying for.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="gradeApplying">Grade Applying For *</Label>
                        <Select onValueChange={(value) => handleInputChange('gradeApplying', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="foundation">Foundation (Ages 3-6)</SelectItem>
                            <SelectItem value="primary1">Primary 1</SelectItem>
                            <SelectItem value="primary2">Primary 2</SelectItem>
                            <SelectItem value="primary3">Primary 3</SelectItem>
                            <SelectItem value="primary4">Primary 4</SelectItem>
                            <SelectItem value="primary5">Primary 5</SelectItem>
                            <SelectItem value="primary6">Primary 6</SelectItem>
                            <SelectItem value="jhs1">JHS 1</SelectItem>
                            <SelectItem value="jhs2">JHS 2</SelectItem>
                            <SelectItem value="jhs3">JHS 3</SelectItem>
                            <SelectItem value="shs1">SHS 1</SelectItem>
                            <SelectItem value="shs2">SHS 2</SelectItem>
                            <SelectItem value="shs3">SHS 3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="academicYear">Academic Year *</Label>
                        <Select onValueChange={(value) => handleInputChange('academicYear', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select academic year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024-2025">2024-2025</SelectItem>
                            <SelectItem value="2025-2026">2025-2026</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="previousSchool">Previous School</Label>
                      <Input
                        id="previousSchool"
                        value={formData.previousSchool}
                        onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                        placeholder="Name of previous school (if applicable)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subjects">Preferred Subjects/Interests</Label>
                      <Textarea
                        id="subjects"
                        value={formData.subjects}
                        onChange={(e) => handleInputChange('subjects', e.target.value)}
                        placeholder="What subjects or activities is the student most interested in?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="achievements">Achievements & Awards</Label>
                      <Textarea
                        id="achievements"
                        value={formData.achievements}
                        onChange={(e) => handleInputChange('achievements', e.target.value)}
                        placeholder="Any academic, sports, or other achievements (optional)"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Document Upload */}
              {currentStep === 3 && (
                <Card className="school-card animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-primary" />
                      Document Upload
                    </CardTitle>
                    <CardDescription>
                      Please upload the required documents. All documents should be in PDF format.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      
                      {/* Document Upload Cards */}
                      {[
                        { title: "Birth Certificate", required: true },
                        { title: "Previous School Report", required: false },
                        { title: "Passport Photo", required: true },
                        { title: "Medical Records", required: false },
                        { title: "Parent/Guardian ID", required: true },
                        { title: "Proof of Address", required: false }
                      ].map((doc, index) => (
                        <div key={index} className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <div className="font-medium text-foreground mb-1">
                            {doc.title} {doc.required && <span className="text-destructive">*</span>}
                          </div>
                          <div className="text-sm text-muted-foreground mb-3">
                            {doc.required ? 'Required' : 'Optional'}
                          </div>
                          <Button variant="outline" size="sm">
                            Choose File
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Document Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• All documents must be in PDF format</li>
                        <li>• Maximum file size: 5MB per document</li>
                        <li>• Documents should be clear and legible</li>
                        <li>• Ensure all information is visible and complete</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <Card className="school-card animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="w-6 h-6 text-primary" />
                      Review & Submit
                    </CardTitle>
                    <CardDescription>
                      Please review your application before submitting. You can go back to make any changes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Personal Information</h4>
                        <div className="space-y-2 text-sm">
                          <div><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</div>
                          <div><span className="font-medium">Date of Birth:</span> {formData.dateOfBirth}</div>
                          <div><span className="font-medium">Gender:</span> {formData.gender}</div>
                          <div><span className="font-medium">Nationality:</span> {formData.nationality}</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Parent/Guardian</h4>
                        <div className="space-y-2 text-sm">
                          <div><span className="font-medium">Name:</span> {formData.parentName}</div>
                          <div><span className="font-medium">Email:</span> {formData.parentEmail}</div>
                          <div><span className="font-medium">Phone:</span> {formData.parentPhone}</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Academic Information</h4>
                        <div className="space-y-2 text-sm">
                          <div><span className="font-medium">Grade Applying:</span> {formData.gradeApplying}</div>
                          <div><span className="font-medium">Academic Year:</span> {formData.academicYear}</div>
                          <div><span className="font-medium">Previous School:</span> {formData.previousSchool || 'N/A'}</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Documents</h4>
                        <div className="text-sm text-muted-foreground">
                          Documents uploaded: {formData.documents.length} files
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-foreground mb-2">Next Steps</h4>
                      <p className="text-sm text-muted-foreground">
                        After submitting your application, you will receive a confirmation email. 
                        Our admissions team will review your application and contact you within 5-7 business days 
                        to schedule an interview and campus visit.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="btn-hero flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="btn-hero flex items-center gap-2"
                  >
                    Submit Application
                    <Send className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;