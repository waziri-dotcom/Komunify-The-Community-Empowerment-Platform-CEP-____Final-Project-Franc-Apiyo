import React, { useState } from 'react';
import { Shield, Users, Lock, Edit3, Trash2, Plus, Search, Filter, ChevronDown } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Roles = () => {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: 'Super Admin',
      description: 'Full system access and governance',
      permissions: 23,
      users: 2,
      status: 'active',
      color: 'bg-green-100 text-green-800',
    },
    {
      id: 2,
      name: 'Community Manager',
      description: 'Manage communities and moderation',
      permissions: 15,
      users: 8,
      status: 'active',
      color: 'bg-blue-100 text-blue-800',
    },
    {
      id: 3,
      name: 'FoodAid Coordinator',
      description: 'Oversee food redistribution operations',
      permissions: 12,
      users: 5,
      status: 'active',
      color: 'bg-amber-100 text-amber-800',
    },
    {
      id: 4,
      name: 'FinGrow Officer',
      description: 'Manage loans and financial operations',
      permissions: 14,
      users: 4,
      status: 'active',
      color: 'bg-purple-100 text-purple-800',
    },
    {
      id: 5,
      name: 'Content Moderator',
      description: 'Monitor and moderate platform content',
      permissions: 8,
      users: 6,
      status: 'active',
      color: 'bg-red-100 text-red-800',
    },
    {
      id: 6,
      name: 'Support Agent',
      description: 'Provide user support and assistance',
      permissions: 6,
      users: 10,
      status: 'active',
      color: 'bg-cyan-100 text-cyan-800',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const filteredRoles = roles.filter((role) => {
    const matchesSearch = role.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || role.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const handleDeleteRole = (roleId) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      setRoles(roles.filter((r) => r.id !== roleId));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRole(null);
  };

  return (
    <PageWrapper>
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
              <Shield className="w-10 h-10 text-green-600" />
              Role Management
            </h1>
            <p className="text-gray-600 mt-2">
              Define and manage user roles and permissions across Komunify
            </p>
          </div>
          <Button
            onClick={() => setShowModal(true)}
            className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Role
          </Button>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center gap-2"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="p-6">
            <p className="text-sm font-medium text-gray-600">Total Roles</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{roles.length}</p>
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="p-6">
            <p className="text-sm font-medium text-gray-600">Active Roles</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {roles.filter((r) => r.status === 'active').length}
            </p>
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <div className="p-6">
            <p className="text-sm font-medium text-gray-600">Total Users</p>
            <p className="text-3xl font-bold text-amber-600 mt-2">
              {roles.reduce((sum, r) => sum + r.users, 0)}
            </p>
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="p-6">
            <p className="text-sm font-medium text-gray-600">Avg Permissions</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">
              {Math.round(roles.reduce((sum, r) => sum + r.permissions, 0) / roles.length)}
            </p>
          </div>
        </Card>
      </div>

      {/* Roles Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Description</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Permissions</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Users</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.map((role) => (
                <tr key={role.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${role.color}`}></div>
                      <span className="font-semibold text-gray-900">{role.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{role.description}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                      <Lock className="w-4 h-4" />
                      {role.permissions}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-sm font-medium text-blue-700">
                      <Users className="w-4 h-4" />
                      {role.users}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${role.color}`}>
                      {role.status.charAt(0).toUpperCase() + role.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditRole(role)}
                        className="p-2 hover:bg-blue-100 rounded-lg transition text-blue-600"
                        title="Edit role"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteRole(role.id)}
                        className="p-2 hover:bg-red-100 rounded-lg transition text-red-600"
                        title="Delete role"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal for Edit/Create */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedRole ? 'Edit Role' : 'Create New Role'}
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
                  <input
                    type="text"
                    defaultValue={selectedRole?.name || ''}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., Community Manager"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    defaultValue={selectedRole?.description || ''}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Describe the purpose of this role..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Permissions</label>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {[
                      'Manage Users',
                      'Manage Communities',
                      'Manage Projects',
                      'View Reports',
                      'Approve Loans',
                      'Manage Content',
                      'View Analytics',
                      'System Settings',
                    ].map((perm, idx) => (
                      <label key={idx} className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 rounded" defaultChecked={idx < 4} />
                        <span className="text-sm text-gray-700">{perm}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800"
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleCloseModal} className="flex-1 bg-green-600 hover:bg-green-700">
                    {selectedRole ? 'Update Role' : 'Create Role'}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      )}
    </PageWrapper>
  );
};

export default Roles;
