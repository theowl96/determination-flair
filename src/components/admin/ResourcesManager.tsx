import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FileText, Download, Eye, Plus, Edit, Trash2, Calendar, Upload, File } from 'lucide-react';

const resourceSchema = z.object({
  title: z.string().min(3, 'Resource title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.string().min(1, 'Please select a category'),
  targetAudience: z.string().min(1, 'Please select target audience'),
  accessLevel: z.string().min(1, 'Please select access level'),
  tags: z.string().optional(),
  authorName: z.string().min(2, 'Author name is required'),
  authorEmail: z.string().email('Invalid email address'),
  version: z.string().optional(),
  notes: z.string().optional(),
});

type ResourceForm = z.infer<typeof resourceSchema>;

const ResourcesManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<ResourceForm>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      targetAudience: '',
      accessLevel: '',
      tags: '',
      authorName: '',
      authorEmail: '',
      version: '',
      notes: '',
    },
  });

  const onSubmit = (data: ResourceForm) => {
    console.log('New resource uploaded:', { ...data, file: selectedFile });
    // Here you would typically upload the file and send the data to your backend
    setShowUploadDialog(false);
    form.reset();
    setSelectedFile(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const mockResources = [
    {
      id: 'RES001',
      title: 'Student Handbook 2024',
      description: 'Complete guide for students covering policies, procedures, and campus life',
      category: 'Handbook',
      fileType: 'PDF',
      fileSize: '2.4 MB',
      uploadDate: '2024-01-15',
      downloads: 156,
      status: 'published'
    },
    {
      id: 'RES002',
      title: 'Admission Requirements',
      description: 'Detailed requirements and procedures for new student admissions',
      category: 'Admissions',
      fileType: 'PDF',
      fileSize: '1.8 MB',
      uploadDate: '2024-01-10',
      downloads: 243,
      status: 'published'
    },
    {
      id: 'RES003',
      title: 'Academic Calendar 2024',
      description: 'Academic year schedule including terms, holidays, and important dates',
      category: 'Academic',
      fileType: 'PDF',
      fileSize: '0.9 MB',
      uploadDate: '2024-01-08',
      downloads: 189,
      status: 'published'
    },
    {
      id: 'RES004',
      title: 'Fee Structure 2024',
      description: 'Complete breakdown of tuition and other fees for the academic year',
      category: 'Financial',
      fileType: 'PDF',
      fileSize: '1.2 MB',
      uploadDate: '2024-01-12',
      downloads: 298,
      status: 'published'
    },
    {
      id: 'RES005',
      title: 'Mathematics Syllabus Grade 7-9',
      description: 'Comprehensive mathematics curriculum for junior high school',
      category: 'Curriculum',
      fileType: 'DOCX',
      fileSize: '3.1 MB',
      uploadDate: '2024-01-18',
      downloads: 67,
      status: 'draft'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Published</Badge>;
      case 'draft':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Draft</Badge>;
      case 'archived':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Archived</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || resource.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'handbook', 'admissions', 'academic', 'financial', 'curriculum'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Resources Management</h2>
          <p className="text-muted-foreground">Manage school documents and resources</p>
        </div>
        <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Upload Resource
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Upload New Resource</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer flex flex-col items-center space-y-2"
                    >
                      <Upload className="w-12 h-12 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Click to upload a file</p>
                        <p className="text-xs text-muted-foreground">
                          Supported formats: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT
                        </p>
                      </div>
                    </label>
                    {selectedFile && (
                      <div className="mt-4 flex items-center justify-center space-x-2 text-sm">
                        <File className="w-4 h-4" />
                        <span>{selectedFile.name}</span>
                        <Badge variant="secondary">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</Badge>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resource Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter resource title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Handbook">Handbook</SelectItem>
                            <SelectItem value="Admissions">Admissions</SelectItem>
                            <SelectItem value="Academic">Academic</SelectItem>
                            <SelectItem value="Financial">Financial</SelectItem>
                            <SelectItem value="Curriculum">Curriculum</SelectItem>
                            <SelectItem value="Policies">Policies</SelectItem>
                            <SelectItem value="Forms">Forms</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="targetAudience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Audience</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select audience" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Students">Students</SelectItem>
                            <SelectItem value="Parents">Parents</SelectItem>
                            <SelectItem value="Staff">Staff</SelectItem>
                            <SelectItem value="Public">Public</SelectItem>
                            <SelectItem value="Prospective Students">Prospective Students</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accessLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Access Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select access level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Public">Public</SelectItem>
                            <SelectItem value="Students Only">Students Only</SelectItem>
                            <SelectItem value="Staff Only">Staff Only</SelectItem>
                            <SelectItem value="Restricted">Restricted</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe the resource and its purpose" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Author Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="authorName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Author Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Document author" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="authorEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Author Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="author@school.edu" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="version"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Version (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="v1.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="tags"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tags (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Tag1, Tag2, Tag3" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any additional information about this resource" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={!selectedFile}>
                    Upload Resource
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowUploadDialog(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={categoryFilter === category ? 'default' : 'outline'}
              onClick={() => setCategoryFilter(category)}
              className="capitalize"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Resources Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{mockResources.length}</div>
            <Badge variant="secondary" className="mt-1">Documents</Badge>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Published</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {mockResources.filter(r => r.status === 'published').length}
            </div>
            <Badge variant="secondary" className="mt-1">Live</Badge>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Downloads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">
              {mockResources.reduce((sum, r) => sum + r.downloads, 0).toLocaleString()}
            </div>
            <Badge variant="secondary" className="mt-1">All Time</Badge>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {mockResources.filter(r => r.status === 'draft').length}
            </div>
            <Badge variant="secondary" className="mt-1">Pending</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Resources Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Resources ({filteredResources.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Resource</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>File Info</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResources.map((resource) => (
                <TableRow key={resource.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{resource.title}</p>
                        <p className="text-sm text-muted-foreground truncate max-w-xs">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{resource.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p className="font-medium">{resource.fileType}</p>
                      <p className="text-muted-foreground">{resource.fileSize}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {resource.uploadDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Download className="w-4 h-4 text-muted-foreground" />
                      {resource.downloads}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(resource.status)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Edit Resource - {resource.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Title</label>
                                <Input defaultValue={resource.title} />
                              </div>
                              <div>
                                <label className="text-sm font-medium">Category</label>
                                <Input defaultValue={resource.category} />
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Description</label>
                              <Input defaultValue={resource.description} />
                            </div>
                            <div className="flex gap-2 pt-4">
                              <Button className="bg-primary hover:bg-primary/90">
                                Save Changes
                              </Button>
                              <Button variant="outline">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourcesManager;