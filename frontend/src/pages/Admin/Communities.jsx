import React, { useState, useEffect } from 'react';
import { useUser, useOrganization } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import {

Shield,
Users,
Building2,
BarChart3,
Settings,
LogOut,
AlertCircle,
CheckCircle2,
Clock,
TrendingUp,
} from 'lucide-react';

const AdminCommunities = () => {
const { user, isLoaded: userLoaded, isSignedIn } = useUser();
const { organization, isLoaded: orgLoaded } = useOrganization();
const navigate = useNavigate();

const [communities, setCommunities] = useState([]);
const [loading, setLoading] = useState(true);
const [selectedCommunity, setSelectedCommunity] = useState(null);
const [filterStatus, setFilterStatus] = useState('all');
const [searchTerm, setSearchTerm] = useState('');
const [adminStats, setAdminStats] = useState({
  totalCommunities: 0,
  activeCommunities: 0,
  pendingApprovals: 0,
  suspendedCommunities: 0,
});

// Check admin authorization
useEffect(() => {
  if (userLoaded && !isSignedIn) {
    navigate('/admin/login');
  }
}, [userLoaded, isSignedIn, navigate]);

// Fetch communities data
useEffect(() => {
  const fetchCommunities = async () => {
    try {
      setLoading(true);
      // Replace with actual API endpoint
      const response = await fetch('/api/admin/communities', {
        headers: {
          'Authorization': `Bearer ${await user?.getIdToken()}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch communities');

      const data = await response.json();
      setCommunities(data.communities || []);
      setAdminStats(data.stats || adminStats);
    } catch (error) {
      console.error('Error fetching communities:', error);
    } finally {
      setLoading(false);
    }
  };

  if (userLoaded && isSignedIn && user) {
    fetchCommunities();
  }
}, [user, userLoaded, isSignedIn]);

// Filter communities based on status and search
const filteredCommunities = communities.filter((community) => {
  const matchesStatus = filterStatus === 'all' || community.status === filterStatus;
  const matchesSearch =
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.leader.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesStatus && matchesSearch;
});

// Handle community status update
const handleStatusUpdate = async (communityId, newStatus) => {
  try {
    const response = await fetch(`/api/admin/communities/${communityId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${await user?.getIdToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    });

    if (!response.ok) throw new Error('Failed to update community status');

    // Update local state
    setCommunities(
      communities.map((c) =>
        c.id === communityId ? { ...c, status: newStatus } : c
      )
    );
  } catch (error) {
    console.error('Error updating community:', error);
  }
};

// Community status badge
const StatusBadge = ({ status }) => {
  const statusConfig = {
    active: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle2 },
    pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock },
    suspended: { bg: 'bg-red-100', text: 'text-red-800', icon: AlertCircle },
  };

  const config = statusConfig[status] || statusConfig.pending;
  const Icon = config.icon;

  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${config.bg}`}>
      <Icon size={16} className={config.text} />
      <span className={`text-sm font-medium ${config.text}`}>{status}</span>
    </div>
  );
};

if (!userLoaded || !orgLoaded) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        <p className="mt-4 text-gray-600">Loading admin panel...</p>
      </div>
    </div>
  );
}

return (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-green-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Community Moderation</h1>
            <p className="text-sm text-gray-600">Manage and oversee all communities</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
        >
          <LogOut size={20} />
          Back to Dashboard
        </button>
      </div>
    </header>

    {/* Admin Stats */}
    <section className="px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard
        title="Total Communities"
        value={adminStats.totalCommunities}
        icon={Building2}
        color="bg-blue-100"
        textColor="text-blue-600"
      />
      <StatCard
        title="Active"
        value={adminStats.activeCommunities}
        icon={CheckCircle2}
        color="bg-green-100"
        textColor="text-green-600"
      />
      <StatCard
        title="Pending Approval"
        value={adminStats.pendingApprovals}
        icon={Clock}
        color="bg-yellow-100"
        textColor="text-yellow-600"
      />
      <StatCard
        title="Suspended"
        value={adminStats.suspendedCommunities}
        icon={AlertCircle}
        color="bg-red-100"
        textColor="text-red-600"
      />
    </section>

    {/* Search & Filter */}
    <section className="px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search communities or leaders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="suspended">Suspended</option>
        </select>
      </div>
    </section>

    {/* Communities Table */}
    <section className="px-6 py-6">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      ) : filteredCommunities.length === 0 ? (
        <div className="bg-white rounded-lg p-12 text-center">
          <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No communities found</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Community Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Leader
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Members
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Region
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCommunities.map((community) => (
                  <CommunityRow
                    key={community.id}
                    community={community}
                    StatusBadge={StatusBadge}
                    onStatusUpdate={handleStatusUpdate}
                    onSelectCommunity={setSelectedCommunity}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>

    {/* Community Details Modal */}
    {selectedCommunity && (
      <CommunityDetailsModal
        community={selectedCommunity}
        onClose={() => setSelectedCommunity(null)}
        onStatusUpdate={handleStatusUpdate}
        StatusBadge={StatusBadge}
      />
    )}
  </div>
);
};

// Stat Card Component
const StatCard = ({ title, value, icon: Icon, color, textColor }) => (
<div className="bg-white rounded-lg p-6 border border-gray-200">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
    <div className={`${color} p-3 rounded-lg`}>
      <Icon className={`w-6 h-6 ${textColor}`} />
    </div>
  </div>
</div>
);

// Community Row Component
const CommunityRow = ({
community,
StatusBadge,
onStatusUpdate,
onSelectCommunity,
}) => (
<tr className="hover:bg-gray-50 transition">
  <td className="px-6 py-4 text-sm font-medium text-gray-900">{community.name}</td>
  <td className="px-6 py-4 text-sm text-gray-600">{community.leader}</td>
  <td className="px-6 py-4 text-sm text-gray-600">{community.members}</td>
  <td className="px-6 py-4">
    <StatusBadge status={community.status} />
  </td>
  <td className="px-6 py-4 text-sm text-gray-600">{community.region}</td>
  <td className="px-6 py-4">
    <div className="flex gap-2">
      <button
        onClick={() => onSelectCommunity(community)}
        className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition"
      >
        View
      </button>
      {community.status === 'pending' && (
        <button
          onClick={() => onStatusUpdate(community.id, 'active')}
          className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200 transition"
        >
          Approve
        </button>
      )}
    </div>
  </td>
</tr>
);

// Community Details Modal
const CommunityDetailsModal = ({
community,
onClose,
onStatusUpdate,
StatusBadge,
}) => (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
    <div className="sticky top-0 bg-gray-100 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-900">{community.name}</h2>
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700 text-2xl"
      >
        ×
      </button>
    </div>

    <div className="p-6 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Leader</p>
          <p className="text-lg font-semibold text-gray-900">{community.leader}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Members</p>
          <p className="text-lg font-semibold text-gray-900">{community.members}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Region</p>
          <p className="text-lg font-semibold text-gray-900">{community.region}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Status</p>
          <StatusBadge status={community.status} />
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600">Description</p>
        <p className="text-gray-900 mt-2">{community.description}</p>
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <button
          onClick={() => {
            onStatusUpdate(community.id, 'active');
            onClose();
          }}
          className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium"
        >
          Approve
        </button>
        <button
          onClick={() => {
            onStatusUpdate(community.id, 'suspended');
            onClose();
          }}
          className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-medium"
        >
          Suspend
        </button>
        <button
          onClick={onClose}
          className="flex-1 bg-gray-200 text-gray-900 py-2 rounded-lg hover:bg-gray-300 transition font-medium"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>
);

export default AdminCommunities;