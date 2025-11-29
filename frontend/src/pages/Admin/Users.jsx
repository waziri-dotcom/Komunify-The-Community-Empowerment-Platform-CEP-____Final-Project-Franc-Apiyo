import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Search, Filter, UserPlus, Shield, Ban, CheckCircle, AlertCircle, Download, Eye, MoreVertical } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Users = () => {
  const { user: clerkUser, isLoaded } = useUser();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRole, setFilterRole] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [actionModal, setActionModal] = useState(null);

  // Fetch users from backend
  useEffect(() => {
    if (isLoaded && clerkUser) {
      fetchUsers();
    }
  }, [isLoaded, clerkUser]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/users', {
        headers: {
          Authorization: `Bearer ${await clerkUser.getIdToken()}`,
        },
      });
      const data = await response.json();
      setUsers(data.users || []);
      setFilteredUsers(data.users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter users based on search and filters
  useEffect(() => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter(
        (u) =>
          u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (u.fullName && u.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter((u) => u.status === filterStatus);
    }

    if (filterRole !== 'all') {
      filtered = filtered.filter((u) => u.role === filterRole);
    }

    setFilteredUsers(filtered);
  }, [searchTerm, filterStatus, filterRole, users]);

  const handleSelectUser = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    setSelectedUsers(selectedUsers.length === filteredUsers.length ? [] : filteredUsers.map((u) => u._id));
  };

  const handleUserAction = async (action, userId) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}/${action}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${await clerkUser.getIdToken()}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        fetchUsers();
        setActionModal(null);
      }
    } catch (error) {
      console.error(`Error performing ${action}:`, error);
    }
  };

  const handleBulkAction = async (action) => {
    try {
      await Promise.all(
        selectedUsers.map(async (userId) =>
          fetch(`/api/admin/users/${userId}/${action}`, {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${await clerkUser.getIdToken()}`,
            },
          })
        )
      );
      fetchUsers();
      setSelectedUsers([]);
    } catch (error) {
      console.error('Error performing bulk action:', error);
    }
  };

  const handleExportUsers = () => {
    const csv = [
      ['Email', 'Full Name', 'Role', 'Status', 'Joined Date'],
      ...filteredUsers.map((u) => [u.email, u.fullName || 'N/A', u.role, u.status, new Date(u.createdAt).toLocaleDateString()]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'komunify-users-export.csv';
    a.click();
  };

  if (!isLoaded) {
    return <PageWrapper><div className="text-center py-12">Loading authentication...</div></PageWrapper>;
  }

  return (
    <PageWrapper>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600 mt-1">Manage, verify, and oversee all Komunify users</p>
          </div>
          <Button onClick={handleExportUsers} variant="outline" className="flex items-center gap-2">
            <Download size={18} /> Export CSV
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="p-6">
              <div className="text-sm font-semibold text-green-700">Total Users</div>
              <div className="text-3xl font-bold text-green-900 mt-2">{users.length}</div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="p-6">
              <div className="text-sm font-semibold text-blue-700">Active</div>
              <div className="text-3xl font-bold text-blue-900 mt-2">
                {users.filter((u) => u.status === 'active').length}
              </div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
            <div className="p-6">
              <div className="text-sm font-semibold text-yellow-700">Pending Verification</div>
              <div className="text-3xl font-bold text-yellow-900 mt-2">
                {users.filter((u) => u.status === 'pending').length}
              </div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
            <div className="p-6">
              <div className="text-sm font-semibold text-red-700">Suspended</div>
              <div className="text-3xl font-bold text-red-900 mt-2">
                {users.filter((u) => u.status === 'suspended').length}
              </div>
            </div>
          </Card>
        </div>

        {/* Filters & Search */}
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by email or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="suspended">Suspended</option>
            </select>

            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="donor">Donor</option>
              <option value="recipient">Recipient</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="mentor">Mentor</option>
            </select>

            <Button onClick={handleExportUsers} variant="outline" className="w-full flex items-center justify-center gap-2">
              <Filter size={18} /> Filters
            </Button>
          </div>

          {/* Bulk Actions */}
          {selectedUsers.length > 0 && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg flex justify-between items-center">
              <span className="text-blue-900 font-medium">{selectedUsers.length} users selected</span>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleBulkAction('approve')}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle size={16} /> Approve
                </Button>
                <Button
                  onClick={() => handleBulkAction('suspend')}
                  size="sm"
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Ban size={16} /> Suspend
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Users Table */}
        <Card className="overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-gray-600">Loading users...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                        onChange={handleSelectAll}
                        className="rounded border-gray-300"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Joined</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <tr key={user._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            checked={selectedUsers.includes(user._id)}
                            onChange={() => handleSelectUser(user._id)}
                            className="rounded border-gray-300"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{user.fullName || 'N/A'}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium capitalize">
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex items-center gap-2">
                            {user.status === 'active' && (
                              <>
                                <CheckCircle size={16} className="text-green-600" />
                                <span className="text-green-700 font-medium">Active</span>
                              </>
                            )}
                            {user.status === 'pending' && (
                              <>
                                <AlertCircle size={16} className="text-yellow-600" />
                                <span className="text-yellow-700 font-medium">Pending</span>
                              </>
                            )}
                            {user.status === 'suspended' && (
                              <>
                                <Ban size={16} className="text-red-600" />
                                <span className="text-red-700 font-medium">Suspended</span>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex gap-2">
                            <button
                              onClick={() => setActionModal(user._id)}
                              className="p-2 hover:bg-gray-100 rounded-lg transition"
                            >
                              <MoreVertical size={18} className="text-gray-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="px-6 py-12 text-center text-gray-600">
                        No users found matching your filters
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </PageWrapper>
  );
};

export default Users;
