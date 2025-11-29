import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Users, MapPin, TrendingUp, Plus, Eye } from 'lucide-react';
import PageWrapper from '../../components/layout/PageWrapper';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

export default function Communities() {
  const [communities, setCommunities] = useState([]);
  const [filteredCommunities, setFilteredCommunities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Mock data - replace with API call
  const mockCommunities = [
    {
      id: 1,
      name: 'Mukuru Food Relief Initiative',
      description: 'Connecting surplus food donors with vulnerable families in Mukuru informal settlement.',
      category: 'FoodAid',
      region: 'Nairobi',
      members: 245,
      impactScore: 4.8,
      foodSaved: 850,
      housesSupported: 150,
      image: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop',
      verified: true,
    },
    {
      id: 2,
      name: 'Women Entrepreneurs FinGrow Hub',
      description: 'Micro-loans and business mentorship for women in informal settlements.',
      category: 'FinGrow',
      region: 'Nairobi',
      members: 187,
      impactScore: 4.6,
      loansIssued: 42,
      housesSupported: 120,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      verified: true,
    },
    {
      id: 3,
      name: 'Youth Skills & Mentorship Network',
      description: 'Connecting youth with professional mentors for skills development and career growth.',
      category: 'Mentorship',
      region: 'Kisumu',
      members: 312,
      impactScore: 4.9,
      mentorshipHours: 1200,
      housesSupported: 89,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      verified: true,
    },
    {
      id: 4,
      name: 'Community Green Projects Initiative',
      description: 'Environmental and sustainable living projects for community development.',
      category: 'Projects',
      region: 'Mombasa',
      members: 156,
      impactScore: 4.5,
      projectsCompleted: 8,
      housesSupported: 200,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      verified: false,
    },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCommunities(mockCommunities);
      setFilteredCommunities(mockCommunities);
      setLoading(false);
    }, 500);
  }, []);

  // Handle search and filter
  useEffect(() => {
    let filtered = communities;

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedFilter !== 'all') {
      filtered = filtered.filter((c) => c.category === selectedFilter);
    }

    setFilteredCommunities(filtered);
  }, [searchTerm, selectedFilter, communities]);

  const categories = ['all', 'FoodAid', 'FinGrow', 'Mentorship', 'Projects'];

  const CommunityCard = ({ community }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-50 overflow-hidden">
        <img
          src={community.image}
          alt={community.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {community.verified && (
          <div className="absolute top-3 right-3">
            <Badge variant="success" className="bg-green-500 text-white flex items-center gap-1">
              ✓ Verified
            </Badge>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{community.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{community.description}</p>

        {/* Category & Region */}
        <div className="flex gap-2 mb-4">
          <Badge variant="outline" className="text-xs border-green-300 text-green-700">
            {community.category}
          </Badge>
          <Badge variant="outline" className="text-xs border-amber-300 text-amber-700 flex items-center gap-1">
            <MapPin size={12} /> {community.region}
          </Badge>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4 py-3 border-y border-gray-200">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-green-600" />
            <div>
              <p className="text-xs text-gray-500">Members</p>
              <p className="font-bold text-gray-800">{community.members}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-amber-500 fill-amber-500" />
            <div>
              <p className="text-xs text-gray-500">Impact</p>
              <p className="font-bold text-gray-800">{community.impactScore}</p>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-green-50 rounded-lg p-3 mb-4">
          {community.foodSaved && (
            <p className="text-xs text-gray-700">
              <span className="font-bold text-green-700">{community.foodSaved}</span> kg food saved
            </p>
          )}
          {community.loansIssued && (
            <p className="text-xs text-gray-700">
              <span className="font-bold text-green-700">{community.loansIssued}</span> micro-loans issued
            </p>
          )}
          {community.mentorshipHours && (
            <p className="text-xs text-gray-700">
              <span className="font-bold text-green-700">{community.mentorshipHours}</span> mentorship hours
            </p>
          )}
          {community.projectsCompleted && (
            <p className="text-xs text-gray-700">
              <span className="font-bold text-green-700">{community.projectsCompleted}</span> projects completed
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="primary" size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
            <Eye size={14} className="mr-1" />
            View
          </Button>
          <Button variant="outline" size="sm" className="flex-1 border-green-300 text-green-700 hover:bg-green-50">
            Join
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <PageWrapper>
      <div className="space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Communities</h1>
          <p className="text-gray-600 max-w-2xl">
            Discover and join communities making real impact through food redistribution, microfinance, and mentorship.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search communities by name or cause..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                variant={selectedFilter === cat ? 'primary' : 'outline'}
                size="sm"
                className={`capitalize ${
                  selectedFilter === cat
                    ? 'bg-green-600 text-white border-green-600'
                    : 'border-green-300 text-green-700 hover:bg-green-50'
                }`}
              >
                {cat === 'all' ? 'All Communities' : cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between">
          <div className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredCommunities.length}</span> communities found
          </div>
          <Button variant="primary" size="sm" className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
            <Plus size={16} />
            Create Community
          </Button>
        </div>

        {/* Communities Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            <p className="text-gray-600 mt-4">Loading communities...</p>
          </div>
        ) : filteredCommunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommunities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12 border-dashed">
            <p className="text-gray-500 text-lg">No communities found matching your search.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search terms.</p>
          </Card>
        )}
      </div>
    </PageWrapper>
  );
}
