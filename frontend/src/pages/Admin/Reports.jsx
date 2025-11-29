import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Filter, Calendar, TrendingUp, Users, Activity, AlertCircle } from 'lucide-react';

const Reports = () => {
  const [dateRange, setDateRange] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('overview');

  // Mock data for FoodAid metrics
  const foodAidData = [
    { week: 'W1', distributed: 2.4, donors: 12, recipients: 45 },
    { week: 'W2', distributed: 3.1, donors: 15, recipients: 58 },
    { week: 'W3', distributed: 2.8, donors: 18, recipients: 62 },
    { week: 'W4', distributed: 4.2, donors: 22, recipients: 85 },
  ];

  // Mock data for FinGrow metrics
  const finGrowData = [
    { month: 'Jan', loansIssued: 5, repaymentRate: 85, activeUsers: 120 },
    { month: 'Feb', loansIssued: 8, repaymentRate: 88, activeUsers: 145 },
    { month: 'Mar', loansIssued: 12, repaymentRate: 90, activeUsers: 182 },
    { month: 'Apr', loansIssued: 15, repaymentRate: 92, activeUsers: 215 },
  ];

  // User engagement data
  const userEngagement = [
    { name: 'Active Users', value: 2840, color: '#1B5E20' },
    { name: 'Inactive', value: 1160, color: '#FFC107' },
    { name: 'Pending Verification', value: 342, color: '#E0E0E0' },
  ];

  // Community impact data
  const communityImpact = [
    { community: 'Mukuru', impact: 520, loans: 28, food: 5.2 },
    { community: 'Mathare', impact: 380, loans: 18, food: 3.8 },
    { community: 'Kibera', impact: 310, loans: 15, food: 3.1 },
    { community: 'Korogocho', impact: 245, loans: 12, food: 2.5 },
  ];

  const StatCard = ({ icon: Icon, label, value, trend, color }) => (
    <div className="bg-white rounded-lg p-6 shadow-md border-l-4" style={{ borderColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-1">{label}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
          {trend && (
            <p className={`text-xs mt-2 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% this month
            </p>
          )}
        </div>
        <Icon size={32} color={color} className="opacity-70" />
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Reports & Analytics</h1>
        <p className="text-gray-600">Real-time insights into Komunify's impact across FoodAid & FinGrow</p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm flex flex-wrap gap-4 items-center">
        <button className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100">
          <Calendar size={18} />
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-transparent outline-none text-sm font-medium"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700">
          <Filter size={18} />
          <span>Filter</span>
        </button>
        <button className="ml-auto flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600">
          <Download size={18} />
          <span>Export Report</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={Users} label="Total Users" value="4,342" trend={12} color="#1B5E20" />
        <StatCard icon={Activity} label="Food Distributed" value="12.1T" trend={8} color="#FFC107" />
        <StatCard icon={TrendingUp} label="Micro-Loans Issued" value="50" trend={15} color="#4CAF50" />
        <StatCard icon={AlertCircle} label="Repayment Rate" value="89.2%" trend={5} color="#00BCD4" />
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 bg-white rounded-lg p-2 w-fit">
        {['overview', 'foodaid', 'fingrow', 'community', 'users'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedMetric(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedMetric === tab
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Charts Section */}
      {selectedMetric === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* User Engagement Pie */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">User Engagement Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={userEngagement} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={80} fill="#8884d8" dataKey="value">
                  {userEngagement.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Community Impact Bar */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Top Communities by Impact</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={communityImpact}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="community" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="impact" fill="#1B5E20" />
                <Bar dataKey="loans" fill="#FFC107" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {selectedMetric === 'foodaid' && (
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">FoodAid Engine Performance</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={foodAidData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="distributed" stroke="#1B5E20" strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="recipients" stroke="#FFC107" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {selectedMetric === 'fingrow' && (
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">FinGrow Engine Metrics</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={finGrowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="loansIssued" fill="#4CAF50" />
              <Bar dataKey="repaymentRate" fill="#00BCD4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800">Detailed Activity Log</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Activity</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Impact</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: '2024-01-15', activity: 'Food Donation', type: 'FoodAid', impact: '5.2T', status: 'Completed' },
                { date: '2024-01-14', activity: 'Loan Disbursement', type: 'FinGrow', impact: 'KES 25,000', status: 'Completed' },
                { date: '2024-01-13', activity: 'User Verification', type: 'Admin', impact: '12 Users', status: 'Pending' },
                { date: '2024-01-12', activity: 'Community Signup', type: 'Community', impact: '1 Community', status: 'Completed' },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.activity}</td>
                  <td className="px-6 py-4 text-sm"><span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">{row.type}</span></td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{row.impact}</td>
                  <td className="px-6 py-4 text-sm"><span className={`px-3 py-1 rounded-full text-xs ${row.status === 'Completed' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
