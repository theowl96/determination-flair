import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Eye, Mail, Phone, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const ContactManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const mockContacts = [
    {
      id: 'CON001',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+233 24 789 0123',
      subject: 'Admission Inquiry',
      message: 'I would like to know more about the admission process for Grade 8 students.',
      type: 'inquiry',
      status: 'pending',
      submittedDate: '2024-01-20',
      priority: 'medium'
    },
    {
      id: 'CON002',
      name: 'Michael Agyei',
      email: 'michael.agyei@email.com',
      phone: '+233 20 456 7890',
      subject: 'Fee Payment Issue',
      message: 'I am having trouble with the online fee payment system. Please assist.',
      type: 'support',
      status: 'resolved',
      submittedDate: '2024-01-18',
      priority: 'high'
    },
    {
      id: 'CON003',
      name: 'Grace Mensah',
      email: 'grace.mensah@email.com',
      phone: '+233 26 234 5678',
      subject: 'Event Information',
      message: 'Could you provide more details about the upcoming Science Fair?',
      type: 'inquiry',
      status: 'pending',
      submittedDate: '2024-01-19',
      priority: 'low'
    },
    {
      id: 'CON004',
      name: 'David Osei',
      email: 'david.osei@email.com',
      phone: '+233 23 345 6789',
      subject: 'Transport Service',
      message: 'I need information about the school bus service for the Accra route.',
      type: 'inquiry',
      status: 'in-progress',
      submittedDate: '2024-01-21',
      priority: 'medium'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200"><CheckCircle className="w-3 h-3 mr-1" />Resolved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200"><MessageSquare className="w-3 h-3 mr-1" />In Progress</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Low</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  const filteredContacts = mockContacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Contact Management</h2>
          <p className="text-muted-foreground">Manage inquiries and support requests</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search by name, email, or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'pending', 'in-progress', 'resolved'].map((status) => (
            <Button
              key={status}
              variant={statusFilter === status ? 'default' : 'outline'}
              onClick={() => setStatusFilter(status)}
              className="capitalize"
              size="sm"
            >
              {status === 'in-progress' ? 'In Progress' : status}
            </Button>
          ))}
        </div>
      </div>

      {/* Contact Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{mockContacts.length}</div>
            <Badge variant="secondary" className="mt-1">All Time</Badge>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {mockContacts.filter(c => c.status === 'pending').length}
            </div>
            <Badge variant="secondary" className="mt-1">Needs Response</Badge>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Resolved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {mockContacts.filter(c => c.status === 'resolved').length}
            </div>
            <Badge variant="secondary" className="mt-1">Completed</Badge>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {mockContacts.filter(c => c.priority === 'high').length}
            </div>
            <Badge variant="secondary" className="mt-1">Urgent</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Contacts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Messages ({filteredContacts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact Info</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.map((contact) => (
                <TableRow key={contact.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        {contact.email}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        {contact.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="font-medium">{contact.subject}</p>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">{contact.type}</Badge>
                  </TableCell>
                  <TableCell>{getPriorityBadge(contact.priority)}</TableCell>
                  <TableCell>{getStatusBadge(contact.status)}</TableCell>
                  <TableCell>{contact.submittedDate}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Contact Message - {contact.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Name</label>
                                <p className="text-sm text-muted-foreground">{contact.name}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Email</label>
                                <p className="text-sm text-muted-foreground">{contact.email}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Phone</label>
                                <p className="text-sm text-muted-foreground">{contact.phone}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Subject</label>
                                <p className="text-sm text-muted-foreground">{contact.subject}</p>
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Message</label>
                              <p className="text-sm text-muted-foreground mt-1 p-3 bg-muted rounded">
                                {contact.message}
                              </p>
                            </div>
                            <div className="flex gap-2 pt-4">
                              <Button className="bg-primary hover:bg-primary/90">
                                <Mail className="w-4 h-4 mr-2" />
                                Reply
                              </Button>
                              <Button variant="outline">
                                Mark as Resolved
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
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

export default ContactManager;