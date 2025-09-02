import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Eye, CheckCircle, XCircle, Clock, Plus } from 'lucide-react';

const AdmissionsManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const mockApplications = [
    {
      id: 'APP001',
      studentName: 'Kwame Asante',
      email: 'kwame.asante@email.com',
      phone: '+233 24 123 4567',
      class: 'Grade 7',
      status: 'pending',
      appliedDate: '2024-01-15',
      documents: ['Birth Certificate', 'Previous School Report', 'Medical Records']
    },
    {
      id: 'APP002',
      studentName: 'Ama Osei',
      email: 'ama.osei@email.com',
      phone: '+233 20 987 6543',
      class: 'Grade 9',
      status: 'approved',
      appliedDate: '2024-01-12',
      documents: ['Birth Certificate', 'Previous School Report']
    },
    {
      id: 'APP003',
      studentName: 'Kofi Mensah',
      email: 'kofi.mensah@email.com',
      phone: '+233 26 555 7890',
      class: 'Grade 11',
      status: 'rejected',
      appliedDate: '2024-01-10',
      documents: ['Birth Certificate']
    },
    {
      id: 'APP004',
      studentName: 'Akosua Boateng',
      email: 'akosua.boateng@email.com',
      phone: '+233 23 444 5678',
      class: 'Grade 6',
      status: 'pending',
      appliedDate: '2024-01-18',
      documents: ['Birth Certificate', 'Previous School Report', 'Medical Records', 'Passport Photo']
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredApplications = mockApplications.filter(app => {
    const matchesSearch = app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Admissions Management</h2>
          <p className="text-muted-foreground">Review and manage student applications</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          New Application
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'pending', 'approved', 'rejected'].map((status) => (
            <Button
              key={status}
              variant={statusFilter === status ? 'default' : 'outline'}
              onClick={() => setStatusFilter(status)}
              className="capitalize"
            >
              {status}
            </Button>
          ))}
        </div>
      </div>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Applications ({filteredApplications.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Application ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((application) => (
                <TableRow key={application.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{application.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{application.studentName}</p>
                      <p className="text-sm text-muted-foreground">{application.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{application.phone}</TableCell>
                  <TableCell>{application.class}</TableCell>
                  <TableCell>{getStatusBadge(application.status)}</TableCell>
                  <TableCell>{application.appliedDate}</TableCell>
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
                            <DialogTitle>Application Details - {application.studentName}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Student Name</label>
                                <p className="text-sm text-muted-foreground">{application.studentName}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Email</label>
                                <p className="text-sm text-muted-foreground">{application.email}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Phone</label>
                                <p className="text-sm text-muted-foreground">{application.phone}</p>
                              </div>
                              <div>
                                <label className="text-sm font-medium">Class</label>
                                <p className="text-sm text-muted-foreground">{application.class}</p>
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Submitted Documents</label>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {application.documents.map((doc, index) => (
                                  <Badge key={index} variant="outline">{doc}</Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-2 pt-4">
                              <Button className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Approve
                              </Button>
                              <Button variant="destructive">
                                <XCircle className="w-4 h-4 mr-2" />
                                Reject
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

export default AdmissionsManager;