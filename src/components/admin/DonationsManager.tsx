import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { DollarSign, Eye, Calendar, CreditCard, Target, TrendingUp } from 'lucide-react';

const DonationsManager = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockDonations = [
    {
      id: 'DON001',
      donorName: 'Anonymous',
      email: 'donor1@email.com',
      amount: 500,
      currency: 'GHS',
      purpose: 'Library Development',
      paymentMethod: 'Mobile Money',
      status: 'completed',
      donationDate: '2024-01-20',
      transactionId: 'TXN789012345'
    },
    {
      id: 'DON002',
      donorName: 'John Kwame Asante',
      email: 'john.asante@email.com',
      amount: 1200,
      currency: 'GHS',
      purpose: 'Scholarship Fund',
      paymentMethod: 'Bank Transfer',
      status: 'completed',
      donationDate: '2024-01-18',
      transactionId: 'TXN789012346'
    },
    {
      id: 'DON003',
      donorName: 'Mary Osei Foundation',
      email: 'info@maryosei.org',
      amount: 2500,
      currency: 'GHS',
      purpose: 'Sports Equipment',
      paymentMethod: 'Credit Card',
      status: 'pending',
      donationDate: '2024-01-21',
      transactionId: 'TXN789012347'
    },
    {
      id: 'DON004',
      donorName: 'Alumni Association',
      email: 'alumni@donadee.edu.gh',
      amount: 5000,
      currency: 'GHS',
      purpose: 'Infrastructure Development',
      paymentMethod: 'Bank Transfer',
      status: 'completed',
      donationDate: '2024-01-15',
      transactionId: 'TXN789012348'
    }
  ];

  const donationGoals = [
    {
      purpose: 'Library Development',
      target: 10000,
      raised: 3500,
      percentage: 35
    },
    {
      purpose: 'Scholarship Fund',
      target: 25000,
      raised: 8200,
      percentage: 33
    },
    {
      purpose: 'Sports Equipment',
      target: 15000,
      raised: 7500,
      percentage: 50
    },
    {
      purpose: 'Infrastructure Development',
      target: 50000,
      raised: 15000,
      percentage: 30
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredDonations = mockDonations.filter(donation =>
    donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRaised = mockDonations
    .filter(d => d.status === 'completed')
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Donations Management</h2>
          <p className="text-muted-foreground">Track and manage school donations</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search donations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Donation Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Raised</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">₵{totalRaised.toLocaleString()}</div>
            <Badge variant="secondary" className="mt-1">This Year</Badge>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{mockDonations.length}</div>
            <Badge variant="secondary" className="mt-1">All Time</Badge>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₵9,200</div>
            <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
              <TrendingUp className="w-3 h-3" />
              +15%
            </div>
          </CardContent>
        </Card>
        <Card className="hover-scale">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{donationGoals.length}</div>
            <Badge variant="secondary" className="mt-1">Campaigns</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Donation Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Donation Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {donationGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{goal.purpose}</span>
                  <span className="text-sm text-muted-foreground">
                    ₵{goal.raised.toLocaleString()} / ₵{goal.target.toLocaleString()}
                  </span>
                </div>
                <Progress value={goal.percentage} className="h-2" />
                <div className="text-right text-sm text-muted-foreground">
                  {goal.percentage}% Complete
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Donations Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Donations ({filteredDonations.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Donor</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDonations.map((donation) => (
                <TableRow key={donation.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div>
                      <p className="font-medium">{donation.donorName}</p>
                      <p className="text-sm text-muted-foreground">{donation.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{donation.currency} {donation.amount.toLocaleString()}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{donation.purpose}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <CreditCard className="w-4 h-4 text-muted-foreground" />
                      {donation.paymentMethod}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {donation.donationDate}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(donation.status)}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Donation Details - {donation.donorName}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">Donor Name</label>
                              <p className="text-sm text-muted-foreground">{donation.donorName}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Email</label>
                              <p className="text-sm text-muted-foreground">{donation.email}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Amount</label>
                              <p className="text-sm text-muted-foreground">
                                {donation.currency} {donation.amount.toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Purpose</label>
                              <p className="text-sm text-muted-foreground">{donation.purpose}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Payment Method</label>
                              <p className="text-sm text-muted-foreground">{donation.paymentMethod}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Transaction ID</label>
                              <p className="text-sm text-muted-foreground">{donation.transactionId}</p>
                            </div>
                          </div>
                          <div className="flex gap-2 pt-4">
                            <Button className="bg-primary hover:bg-primary/90">
                              Send Thank You Email
                            </Button>
                            <Button variant="outline">
                              Download Receipt
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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

export default DonationsManager;