import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Users, 
  GraduationCap, 
  TrendingUp, 
  Calendar,
  FileText,
  DollarSign,
  Globe,
  Target
} from 'lucide-react';

const Analytics = () => {
  const monthlyData = [
    { month: 'Jan', applications: 45, events: 3, donations: 2500 },
    { month: 'Feb', applications: 52, events: 2, donations: 3200 },
    { month: 'Mar', applications: 38, events: 4, donations: 2800 },
    { month: 'Apr', applications: 61, events: 5, donations: 4100 },
    { month: 'May', applications: 55, events: 3, donations: 3600 },
    { month: 'Jun', applications: 67, events: 6, donations: 5200 }
  ];

  const applicationsByGrade = [
    { grade: 'Grade 7', count: 45, color: '#32CD32' },
    { grade: 'Grade 8', count: 38, color: '#9ACD32' },
    { grade: 'Grade 9', count: 52, color: '#FFD700' },
    { grade: 'Grade 10', count: 29, color: '#FFFF00' },
    { grade: 'Grade 11', count: 34, color: '#228B22' },
    { grade: 'Grade 12', count: 27, color: '#ADFF2F' }
  ];

  const donationPurposes = [
    { name: 'Library Development', value: 35, color: '#32CD32' },
    { name: 'Scholarship Fund', value: 30, color: '#9ACD32' },
    { name: 'Sports Equipment', value: 20, color: '#FFD700' },
    { name: 'Infrastructure', value: 15, color: '#228B22' }
  ];

  const websiteStats = [
    { metric: 'Page Views', value: '12,450', change: '+8%', trend: 'up' },
    { metric: 'Unique Visitors', value: '3,280', change: '+12%', trend: 'up' },
    { metric: 'Bounce Rate', value: '24%', change: '-3%', trend: 'down' },
    { metric: 'Avg. Session', value: '4:32', change: '+15%', trend: 'up' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Analytics Dashboard</h2>
        <p className="text-muted-foreground">Comprehensive insights into school operations</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,247</div>
            <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
              <TrendingUp className="w-3 h-3" />
              +5.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Applications This Month
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">67</div>
            <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
              <TrendingUp className="w-3 h-3" />
              +22% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₵45,200</div>
            <div className="flex items-center gap-1 text-sm text-green-600 mt-1">
              <TrendingUp className="w-3 h-3" />
              +18% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Events
            </CardTitle>
            <Calendar className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8</div>
            <Badge variant="secondary" className="mt-1">This Month</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Applications Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="applications" 
                  stroke="#32CD32" 
                  strokeWidth={3}
                  dot={{ fill: '#32CD32' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Applications by Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={applicationsByGrade}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="grade" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#32CD32" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Donation Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={donationPurposes}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {donationPurposes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Website Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {websiteStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{stat.metric}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className={`w-3 h-3 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goal Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Academic Year Goals Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Student Enrollment Target</span>
                  <span className="text-sm text-muted-foreground">1,247 / 1,500</span>
                </div>
                <Progress value={83} className="h-2" />
                <p className="text-sm text-muted-foreground mt-1">83% Complete</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Donation Goal</span>
                  <span className="text-sm text-muted-foreground">₵34,200 / ₵100,000</span>
                </div>
                <Progress value={34} className="h-2" />
                <p className="text-sm text-muted-foreground mt-1">34% Complete</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Events Completed</span>
                  <span className="text-sm text-muted-foreground">15 / 25</span>
                </div>
                <Progress value={60} className="h-2" />
                <p className="text-sm text-muted-foreground mt-1">60% Complete</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Resource Library</span>
                  <span className="text-sm text-muted-foreground">156 / 200</span>
                </div>
                <Progress value={78} className="h-2" />
                <p className="text-sm text-muted-foreground mt-1">78% Complete</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;