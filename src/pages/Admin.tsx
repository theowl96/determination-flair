import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, Calendar, FileText, DollarSign, Settings, BarChart3 } from 'lucide-react';
import AdmissionsManager from '@/components/admin/AdmissionsManager';
import EventsManager from '@/components/admin/EventsManager';
import ResourcesManager from '@/components/admin/ResourcesManager';
import ContactManager from '@/components/admin/ContactManager';
import DonationsManager from '@/components/admin/DonationsManager';
import Analytics from '@/components/admin/Analytics';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('analytics');

  const stats = [
    {
      title: 'Total Applications',
      value: '247',
      icon: Users,
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Upcoming Events',
      value: '8',
      icon: Calendar,
      change: '+2',
      changeType: 'positive'
    },
    {
      title: 'Resources',
      value: '156',
      icon: FileText,
      change: '+5',
      changeType: 'positive'
    },
    {
      title: 'Donations This Month',
      value: '₵12,450',
      icon: DollarSign,
      change: '+18%',
      changeType: 'positive'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            Donadee International School
          </h1>
          <p className="text-xl text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Admin Dashboard - Kpong Ahudjo Campus
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <Badge 
                  variant="secondary" 
                  className={`mt-1 ${stat.changeType === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                >
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              School Management System
            </CardTitle>
            <CardDescription>
              Manage all aspects of Donadee International School operations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-6 mb-6">
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="admissions" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Admissions
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Events
                </TabsTrigger>
                <TabsTrigger value="resources" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Resources
                </TabsTrigger>
                <TabsTrigger value="contacts" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Contacts
                </TabsTrigger>
                <TabsTrigger value="donations" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Donations
                </TabsTrigger>
              </TabsList>

              <TabsContent value="analytics" className="space-y-6">
                <Analytics />
              </TabsContent>

              <TabsContent value="admissions" className="space-y-6">
                <AdmissionsManager />
              </TabsContent>

              <TabsContent value="events" className="space-y-6">
                <EventsManager />
              </TabsContent>

              <TabsContent value="resources" className="space-y-6">
                <ResourcesManager />
              </TabsContent>

              <TabsContent value="contacts" className="space-y-6">
                <ContactManager />
              </TabsContent>

              <TabsContent value="donations" className="space-y-6">
                <DonationsManager />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;