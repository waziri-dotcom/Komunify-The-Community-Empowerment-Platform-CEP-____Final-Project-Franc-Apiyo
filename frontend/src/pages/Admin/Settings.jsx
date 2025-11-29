import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Lock, Users, Palette, Database, Mail, Shield, LogOut, Save, X } from 'lucide-react';
import PageWrapper from '../../components/layout/PageWrapper';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    platformName: 'Komunify',
    platformEmail: 'admin@komunify.com',
    maintenanceMode: false,
    emailNotifications: true,
    smsNotifications: false,
    dataBackup: true,
    backupFrequency: 'weekly',
    maxUploadSize: 50,
    allowNewRegistrations: true,
    requireEmailVerification: true,
    requirePhoneVerification: false,
    defaultTheme: 'light',
    primaryColor: '#1B5E20',
    secondaryColor: '#FFB300',
    accentColor: '#00BFA5',
  });

  const [savedMessage, setSavedMessage] = useState('');
  const [editingField, setEditingField] = useState(null);

  const handleSave = () => {
    setSavedMessage('✓ Settings saved successfully');
    setTimeout(() => setSavedMessage(''), 3000);
  };

  const handleInputChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const tabs = [
    { id: 'general', label: 'General Settings', icon: SettingsIcon },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security & Access', icon: Lock },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'data', label: 'Data & Backup', icon: Database },
  ];

  return (
    <PageWrapper title="Admin Settings" description="Configure Komunify platform settings and preferences">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <Card className="p-0 overflow-hidden sticky top-20">
            <div className="bg-gradient-to-br from-[#1B5E20] to-[#0D3D12] p-6 text-white">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <SettingsIcon size={20} /> Settings
              </h3>
            </div>
            <nav className="p-4 space-y-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#1B5E20] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {savedMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
              {savedMessage}
            </div>
          )}

          {/* General Settings */}
          {activeTab === 'general' && (
            <Card>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-200">
                <SettingsIcon className="text-[#1B5E20]" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">General Settings</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Platform Name</label>
                  <input
                    type="text"
                    value={settings.platformName}
                    onChange={(e) => handleInputChange('platformName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Admin Email</label>
                  <input
                    type="email"
                    value={settings.platformEmail}
                    onChange={(e) => handleInputChange('platformEmail', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">Maintenance Mode</p>
                    <p className="text-sm text-gray-600">Temporarily disable user access for maintenance</p>
                  </div>
                  <button
                    onClick={() => handleToggle('maintenanceMode')}
                    className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                      settings.maintenanceMode ? 'bg-red-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        settings.maintenanceMode ? 'translate-x-9' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">Allow New Registrations</p>
                    <p className="text-sm text-gray-600">Enable or disable new user sign-ups</p>
                  </div>
                  <button
                    onClick={() => handleToggle('allowNewRegistrations')}
                    className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                      settings.allowNewRegistrations ? 'bg-[#1B5E20]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        settings.allowNewRegistrations ? 'translate-x-9' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </Card>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <Card>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-200">
                <Bell className="text-[#FFB300]" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Notification Settings</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">Email Notifications</p>
                    <p className="text-sm text-gray-600">Send system alerts via email</p>
                  </div>
                  <button
                    onClick={() => handleToggle('emailNotifications')}
                    className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                      settings.emailNotifications ? 'bg-[#1B5E20]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        settings.emailNotifications ? 'translate-x-9' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">SMS Notifications</p>
                    <p className="text-sm text-gray-600">Send critical alerts via SMS</p>
                  </div>
                  <button
                    onClick={() => handleToggle('smsNotifications')}
                    className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                      settings.smsNotifications ? 'bg-[#1B5E20]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        settings.smsNotifications ? 'translate-x-9' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </Card>
          )}

          {/* Security & Access */}
          {activeTab === 'security' && (
            <Card>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-200">
                <Lock className="text-red-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Security & Access Control</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">Require Email Verification</p>
                    <p className="text-sm text-gray-600">Users must verify email before accessing platform</p>
                  </div>
                  <button
                    onClick={() => handleToggle('requireEmailVerification')}
                    className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                      settings.requireEmailVerification ? 'bg-[#1B5E20]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        settings.requireEmailVerification ? 'translate-x-9' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">Require Phone Verification</p>
                    <p className="text-sm text-gray-600">Users must verify phone number before accessing platform</p>
                  </div>
                  <button
                    onClick={() => handleToggle('requirePhoneVerification')}
                    className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                      settings.requirePhoneVerification ? 'bg-[#1B5E20]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        settings.requirePhoneVerification ? 'translate-x-9' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </Card>
          )}

          {/* User Management */}
          {activeTab === 'users' && (
            <Card>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-200">
                <Users className="text-[#00BFA5]" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-sm">Manage user roles, permissions, and access levels through the dedicated Admin Panel.</p>
                <Button variant="primary" className="w-full">
                  Go to User Management
                </Button>
              </div>
            </Card>
          )}

          {/* Appearance */}
          {activeTab === 'appearance' && (
            <Card>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-200">
                <Palette className="text-[#FFB300]" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Appearance Settings</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Default Theme</label>
                  <select
                    value={settings.defaultTheme}
                    onChange={(e) => handleInputChange('defaultTheme', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20]"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto (System)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={settings.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                      className="h-12 w-20 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={settings.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Secondary Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={settings.secondaryColor}
                      onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                      className="h-12 w-20 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={settings.secondaryColor}
                      onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Data & Backup */}
          {activeTab === 'data' && (
            <Card>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-200">
                <Database className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Data & Backup</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-800">Automatic Backups</p>
                    <p className="text-sm text-gray-600">Enable automatic database backups</p>
                  </div>
                  <button
                    onClick={() => handleToggle('dataBackup')}
                    className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                      settings.dataBackup ? 'bg-[#1B5E20]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        settings.dataBackup ? 'translate-x-9' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Backup Frequency</label>
                  <select
                    value={settings.backupFrequency}
                    onChange={(e) => handleInputChange('backupFrequency', e.target.value)}
                    disabled={!settings.dataBackup}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] disabled:bg-gray-100"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Max Upload Size (MB)</label>
                  <input
                    type="number"
                    value={settings.maxUploadSize}
                    onChange={(e) => handleInputChange('maxUploadSize', parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20]"
                  />
                </div>
              </div>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={handleSave}
              variant="primary"
              className="flex-1 gap-2"
            >
              <Save size={18} /> Save Changes
            </Button>
            <Button
              variant="secondary"
              className="flex-1 gap-2"
            >
              <X size={18} /> Cancel
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
