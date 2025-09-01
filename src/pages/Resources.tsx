import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  BookOpen, 
  Video, 
  FileText, 
  Image,
  Calendar,
  User,
  Tag
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', count: 48 },
    { id: 'academic', name: 'Academic Materials', count: 18 },
    { id: 'policy', name: 'Policies & Forms', count: 12 },
    { id: 'multimedia', name: 'Videos & Media', count: 8 },
    { id: 'newsletters', name: 'Newsletters', count: 6 },
    { id: 'calendar', name: 'Calendar & Events', count: 4 }
  ];

  const resources = [
    {
      id: 1,
      title: "Student Handbook 2024-2025",
      description: "Comprehensive guide to school policies, procedures, and expectations for all students.",
      category: 'policy',
      type: 'pdf',
      size: '2.3 MB',
      date: '2024-08-15',
      author: 'Academic Office',
      downloads: 245,
      featured: true
    },
    {
      id: 2,
      title: "Mathematics Curriculum Overview",
      description: "Detailed breakdown of our mathematics program from Foundation to Senior Secondary.",
      category: 'academic',
      type: 'pdf',
      size: '1.8 MB',
      date: '2024-08-10',
      author: 'Math Department',
      downloads: 156,
      featured: true
    },
    {
      id: 3,
      title: "Virtual Campus Tour 2024",
      description: "Take a comprehensive virtual tour of our beautiful Kpong Ahudjo campus facilities.",
      category: 'multimedia',
      type: 'video',
      size: '45.2 MB',
      date: '2024-07-28',
      author: 'Marketing Team',
      downloads: 89,
      featured: true
    },
    {
      id: 4,
      title: "Admission Application Form",
      description: "Official application form for new student admissions. Required for all applicants.",
      category: 'policy',
      type: 'pdf',
      size: '856 KB',
      date: '2024-08-01',
      author: 'Admissions Office',
      downloads: 312,
      featured: false
    },
    {
      id: 5,
      title: "Science Laboratory Safety Guidelines",
      description: "Essential safety protocols and procedures for all science laboratory activities.",
      category: 'academic',
      type: 'pdf',
      size: '1.2 MB',
      date: '2024-07-15',
      author: 'Science Department',
      downloads: 78,
      featured: false
    },
    {
      id: 6,
      title: "Monthly Newsletter - August 2024",
      description: "Latest news, achievements, and upcoming events from Donadee International School.",
      category: 'newsletters',
      type: 'pdf',
      size: '3.1 MB',
      date: '2024-08-01',
      author: 'Communications',
      downloads: 134,
      featured: false
    },
    {
      id: 7,
      title: "Academic Calendar 2024-2025",
      description: "Complete academic calendar with term dates, holidays, and important school events.",
      category: 'calendar',
      type: 'pdf',
      size: '945 KB',
      date: '2024-06-30',
      author: 'Academic Office',
      downloads: 298,
      featured: false
    },
    {
      id: 8,
      title: "Sports Day Highlights Video",
      description: "Highlights from our annual sports day featuring student competitions and achievements.",
      category: 'multimedia',
      type: 'video',
      size: '28.7 MB',
      date: '2024-07-20',
      author: 'Sports Department',
      downloads: 67,
      featured: false
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Video;
      case 'image':
        return Image;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'bg-secondary/10 text-secondary-dark';
      case 'image':
        return 'bg-primary/10 text-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(resource => resource.featured);

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
              Resources & <span className="gradient-text-light">Downloads</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Access important documents, academic materials, policies, and multimedia content 
              to support your educational journey at Donadee International School.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {selectedCategory === 'all' && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
                  Featured <span className="gradient-text">Resources</span>
                </h2>
                <p className="text-muted-foreground">
                  Most important and frequently accessed materials
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {featuredResources.map((resource) => {
                  const FileIcon = getFileIcon(resource.type);
                  return (
                    <Card key={resource.id} className="school-card group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getTypeColor(resource.type)}`}>
                            <FileIcon className="w-6 h-6" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            Featured
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {resource.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <span>{resource.size}</span>
                          <span>{resource.downloads} downloads</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="btn-hero flex-1">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Resources */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-poppins font-bold text-foreground">
                All Resources ({filteredResources.length})
              </h2>
            </div>

            <div className="space-y-4">
              {filteredResources.map((resource) => {
                const FileIcon = getFileIcon(resource.type);
                return (
                  <Card key={resource.id} className="school-card group hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getTypeColor(resource.type)}`}>
                          <FileIcon className="w-6 h-6" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {resource.title}
                            </h3>
                            {resource.featured && (
                              <Badge variant="secondary" className="text-xs ml-2">
                                Featured
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-muted-foreground mb-3 leading-relaxed">
                            {resource.description}
                          </p>
                          
                          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {resource.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(resource.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Tag className="w-4 h-4" />
                              {resource.size}
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              {resource.downloads} downloads
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm" className="btn-hero">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              Preview
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No resources found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search query or category filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
              Need Help Finding Something?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the resource you're looking for? Our support team is here to help.
            </p>
            <Link to="/contact">
              <Button className="btn-hero">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;