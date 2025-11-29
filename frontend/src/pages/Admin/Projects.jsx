import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, Users, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

const AdminProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Mukuru Food Distribution Phase 1',
      status: 'active',
      progress: 75,
      team: 8,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      description: 'FoodAid Engine pilot in Mukuru informal settlement',
      category: 'FoodAid',
    },
    {
      id: 2,
      name: 'FinGrow Loan Disbursement Wave 1',
      status: 'active',
      progress: 60,
      team: 5,
      startDate: '2024-02-01',
      endDate: '2024-08-31',
      description: 'Micro-loan issuance and tracking for 50 entrepreneurs',
      category: 'FinGrow',
    },
    {
      id: 3,
      name: 'MentorLink Community Training',
      status: 'pending',
      progress: 30,
      team: 3,
      startDate: '2024-03-01',
      endDate: '2024-09-30',
      description: 'Mentorship program development and facilitation',
      category: 'Mentorship',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800';
  };

  const getCategoryColor = (category) => {
    const colors = {
      FoodAid: 'bg-emerald-100 text-emerald-800',
      FinGrow: 'bg-gold-100 text-gold-800',
      Mentorship: 'bg-blue-100 text-blue-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const filteredProjects = filterStatus === 'all' 
    ? projects 
    : projects.filter(p => p.status === filterStatus);

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <PageWrapper>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Projects</h1>
            <p className="text-gray-600 mt-1">Manage all Komunify projects and initiatives</p>
          </div>
          <Button 
            onClick={() => setShowModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2"
          >
            <Plus size={20} /> New Project
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          {['all', 'active', 'pending'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filterStatus === status
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <Card key={project.id} className="hover:shadow-lg transition">
              <div className="space-y-4">
                {/* Title & Status */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status === 'active' ? 'Active' : 'Pending'}
                  </Badge>
                </div>

                {/* Category */}
                <div>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Progress</span>
                    <span className="text-sm font-bold text-emerald-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-3 gap-4 py-3 border-t border-gray-200">
                  <div>
                    <span className="text-xs text-gray-600">Team Members</span>
                    <div className="flex items-center gap-1 mt-1">
                      <Users size={16} className="text-gray-700" />
                      <span className="font-bold text-gray-900">{project.team}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-600">Start Date</span>
                    <p className="text-sm font-semibold text-gray-900 mt-1">{project.startDate}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-600">End Date</span>
                    <p className="text-sm font-semibold text-gray-900 mt-1">{project.endDate}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-3 border-t border-gray-200">
                  <Button 
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm flex items-center justify-center gap-2"
                  >
                    <Edit2 size={16} /> Edit
                  </Button>
                  <Button 
                    onClick={() => {}}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-sm flex items-center justify-center gap-2"
                  >
                    <Eye size={16} /> View
                  </Button>
                  <Button 
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm flex items-center justify-center gap-2"
                  >
                    <Trash2 size={16} /> Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <Card className="text-center py-12">
            <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-bold text-gray-700">No projects found</h3>
            <p className="text-gray-600 mt-2">Create a new project to get started</p>
          </Card>
        )}
      </div>
    </PageWrapper>
  );
};

export default AdminProjects;
