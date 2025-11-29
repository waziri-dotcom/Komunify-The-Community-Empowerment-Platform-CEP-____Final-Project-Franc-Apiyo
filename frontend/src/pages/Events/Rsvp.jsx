import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Bell, Download, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const RSVP = () => {
    const [rsvpList, setRsvpList] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [rsvpStatus, setRsvpStatus] = useState('pending');
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    // Fetch user's RSVP events
    useEffect(() => {
        fetchUserRSVPs();
    }, []);

    const fetchUserRSVPs = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/events/rsvps', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setRsvpList(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching RSVPs:', error);
            setLoading(false);
        }
    };

    const handleRSVP = async (eventId, status) => {
        try {
            const response = await axios.post(
                `/api/events/${eventId}/rsvp`,
                { status },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            setRsvpStatus(status);
            fetchUserRSVPs();
        } catch (error) {
            console.error('Error updating RSVP:', error);
        }
    };

    const handleSetReminder = async (eventId, reminderTime) => {
        try {
            await axios.post(
                `/api/events/${eventId}/reminder`,
                { reminderTime },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            setReminders([...reminders, { eventId, reminderTime }]);
        } catch (error) {
            console.error('Error setting reminder:', error);
        }
    };

    const handleAddToCalendar = (event) => {
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            event.title
        )}&dates=${event.startDate.replace(/-/g, '')}/${event.endDate.replace(/-/g, '')}&details=${encodeURIComponent(
            event.description
        )}&location=${encodeURIComponent(event.location)}`;
        window.open(googleCalendarUrl, '_blank');
    };

    const filteredRSVPs = rsvpList.filter((event) => {
        if (filter === 'all') return true;
        if (filter === 'attending') return event.rsvpStatus === 'attending';
        if (filter === 'interested') return event.rsvpStatus === 'interested';
        if (filter === 'not-attending') return event.rsvpStatus === 'not-attending';
        return true;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-green-700 to-emerald-600 rounded-lg shadow-lg p-8 mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">📅 Event RSVPs & Reminders</h1>
                    <p className="text-green-100">
                        Manage your event attendance and set reminders for upcoming activities
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-4 mb-8 flex-wrap">
                    {['all', 'attending', 'interested', 'not-attending'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                                filter === status
                                    ? 'bg-green-700 text-white shadow-lg'
                                    : 'bg-white text-gray-700 border-2 border-green-700 hover:bg-green-50'
                            }`}
                        >
                            {status === 'all'
                                ? `All Events (${rsvpList.length})`
                                : status === 'attending'
                                ? `Attending (${rsvpList.filter((e) => e.rsvpStatus === 'attending').length})`
                                : status === 'interested'
                                ? `Interested (${rsvpList.filter((e) => e.rsvpStatus === 'interested').length})`
                                : `Not Attending (${rsvpList.filter((e) => e.rsvpStatus === 'not-attending').length})`}
                        </button>
                    ))}
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
                        <p className="text-gray-600 mt-4">Loading your RSVPs...</p>
                    </div>
                )}

                {/* RSVP Events Grid */}
                {!loading && filteredRSVPs.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredRSVPs.map((event) => (
                            <div
                                key={event._id}
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-l-4 border-green-700"
                            >
                                {/* Event Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{event.title}</h3>
                                        <p className="text-gray-600 text-sm">{event.category}</p>
                                    </div>
                                    <div
                                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            event.rsvpStatus === 'attending'
                                                ? 'bg-green-100 text-green-800'
                                                : event.rsvpStatus === 'interested'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {event.rsvpStatus === 'attending'
                                            ? '✓ Attending'
                                            : event.rsvpStatus === 'interested'
                                            ? '◐ Interested'
                                            : '✗ Not Attending'}
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="space-y-3 mb-6 text-gray-700">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="text-green-700" size={20} />
                                        <span>{new Date(event.startDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="text-green-700" size={20} />
                                        <span>
                                            {new Date(event.startDate).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}{' '}
                                            -{' '}
                                            {new Date(event.endDate).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="text-green-700" size={20} />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="text-green-700" size={20} />
                                        <span>{event.attendees || 0} attendees</span>
                                    </div>
                                </div>

                                {/* Description */}
                                {event.description && (
                                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">{event.description}</p>
                                )}

                                {/* RSVP Buttons */}
                                <div className="grid grid-cols-3 gap-2 mb-6">
                                    <button
                                        onClick={() => handleRSVP(event._id, 'attending')}
                                        className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm ${
                                            event.rsvpStatus === 'attending'
                                                ? 'bg-green-700 text-white shadow-md'
                                                : 'bg-green-100 text-green-700 hover:bg-green-200'
                                        }`}
                                    >
                                        ✓ Attending
                                    </button>
                                    <button
                                        onClick={() => handleRSVP(event._id, 'interested')}
                                        className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm ${
                                            event.rsvpStatus === 'interested'
                                                ? 'bg-yellow-600 text-white shadow-md'
                                                : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                                        }`}
                                    >
                                        ◐ Interested
                                    </button>
                                    <button
                                        onClick={() => handleRSVP(event._id, 'not-attending')}
                                        className={`py-2 px-3 rounded-lg font-semibold transition-all text-sm ${
                                            event.rsvpStatus === 'not-attending'
                                                ? 'bg-red-700 text-white shadow-md'
                                                : 'bg-red-100 text-red-700 hover:bg-red-200'
                                        }`}
                                    >
                                        ✗ No
                                    </button>
                                </div>

                                {/* Reminder & Calendar Actions */}
                                <div className="grid grid-cols-2 gap-3 border-t pt-4">
                                    <button
                                        onClick={() => handleSetReminder(event._id, '1hour')}
                                        className="flex items-center justify-center gap-2 bg-blue-50 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-100 transition-all font-semibold text-sm"
                                    >
                                        <Bell size={18} />
                                        Set Reminder
                                    </button>
                                    <button
                                        onClick={() => handleAddToCalendar(event)}
                                        className="flex items-center justify-center gap-2 bg-gold-50 text-gold-700 py-2 px-4 rounded-lg hover:bg-gold-100 transition-all font-semibold text-sm"
                                    >
                                        <Download size={18} />
                                        Add to Calendar
                                    </button>
                                </div>

                                {/* Virtual Meeting Link */}
                                {event.virtualMeetingLink && (
                                    <a
                                        href={event.virtualMeetingLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 block w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition-all font-semibold text-center"
                                    >
                                        Join Virtual Meeting
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    !loading && (
                        <div className="text-center py-12 bg-white rounded-lg shadow">
                            <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-600 text-lg">No events found in this category</p>
                            <p className="text-gray-500">Check back soon for upcoming events!</p>
                        </div>
                    )
                )}

                {/* Reminders Summary */}
                {reminders.length > 0 && (
                    <div className="mt-8 bg-blue-50 border-l-4 border-blue-700 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <Bell size={20} /> Active Reminders ({reminders.length})
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {reminders.map((reminder, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg shadow">
                                    <p className="text-sm text-gray-600">
                                        You'll be reminded {reminder.reminderTime === '1hour' ? '1 hour' : '30 minutes'} before the event
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RSVP;