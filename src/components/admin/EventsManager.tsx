import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, Clock, MapPin, Users, Plus, Edit, Trash2 } from 'lucide-react';

const EventsManager = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockEvents = [
    {
      id: 'EVT001',
      title: 'Academic Excellence Awards',
      description: 'Annual ceremony to recognize outstanding academic achievements',
      date: '2024-03-15',
      time: '10:00 AM',
      location: 'Main Auditorium',
      attendees: 250,
      status: 'upcoming',
      category: 'Academic'
    },
    {
      id: 'EVT002',
      title: 'Inter-House Sports Competition',
      description: 'Annual sports competition between school houses',
      date: '2024-02-28',
      time: '8:00 AM',
      location: 'Sports Complex',
      attendees: 400,
      status: 'completed',
      category: 'Sports'
    },
    {
      id: 'EVT003',
      title: 'Science Fair 2024',
      description: 'Students showcase their scientific projects and innovations',
      date: '2024-04-10',
      time: '9:00 AM',
      location: 'Science Laboratory Block',
      attendees: 180,
      status: 'upcoming',
      category: 'Academic'
    },
    {
      id: 'EVT004',
      title: 'Cultural Day Celebration',
      description: 'Celebrating Ghanaian culture with traditional performances',
      date: '2024-03-06',
      time: '2:00 PM',
      location: 'School Grounds',
      attendees: 500,
      status: 'upcoming',
      category: 'Cultural'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Upcoming</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredEvents = mockEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Events Management</h2>
          <p className="text-muted-foreground">Organize and manage school events</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Events Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">3</div>
            <Badge variant="secondary" className="mt-1">This Month</Badge>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Attendees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">1,330</div>
            <Badge variant="secondary" className="mt-1">Expected</Badge>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Events Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">1</div>
            <Badge variant="secondary" className="mt-1">This Month</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Events Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Events ({filteredEvents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Title</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Attendees</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground truncate max-w-xs">
                        {event.description}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      {event.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{event.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      {event.attendees}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(event.status)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Edit Event - {event.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium">Event Title</label>
                                <Input defaultValue={event.title} />
                              </div>
                              <div>
                                <label className="text-sm font-medium">Category</label>
                                <Input defaultValue={event.category} />
                              </div>
                              <div>
                                <label className="text-sm font-medium">Date</label>
                                <Input type="date" defaultValue={event.date} />
                              </div>
                              <div>
                                <label className="text-sm font-medium">Time</label>
                                <Input type="time" defaultValue="10:00" />
                              </div>
                              <div>
                                <label className="text-sm font-medium">Location</label>
                                <Input defaultValue={event.location} />
                              </div>
                              <div>
                                <label className="text-sm font-medium">Expected Attendees</label>
                                <Input type="number" defaultValue={event.attendees} />
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Description</label>
                              <Input defaultValue={event.description} />
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

export default EventsManager;