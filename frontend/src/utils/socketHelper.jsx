import io from 'socket.io-client';


const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';

class SocketHelper {
    constructor() {
        this.socket = null;
        this.listeners = {};
    }

    /**
     * Initialize socket connection
     * @param {string} userId - Current user ID from auth context
     * @param {string} userRole - User role (normal, donor, developer, admin)
     */
    connect(userId, userRole) {
        if (this.socket?.connected) return;

        this.socket = io(SOCKET_URL, {
            auth: {
                userId,
                userRole,
            },
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            reconnectionAttempts: 5,
        });

        this.setupDefaultListeners();
    }

    /**
     * Setup default socket event listeners
     */
    setupDefaultListeners() {
        this.socket.on('connect', () => {
            console.log('✅ Socket connected:', this.socket.id);
            this.emit('user:online', { timestamp: new Date() });
        });

        this.socket.on('disconnect', () => {
            console.log('❌ Socket disconnected');
        });

        this.socket.on('error', (error) => {
            console.error('🚨 Socket error:', error);
        });
    }

    /**
     * Subscribe to real-time notifications
     * Used for: food matches, loan approvals, mentorship bookings, etc.
     */
    onNotification(callback) {
        this.socket.on('notification:received', (data) => {
            callback(data);
        });
    }

    /**
     * FoodAid Engine: Listen for food donation matches
     */
    onFoodMatch(callback) {
        this.socket.on('foodaid:match-found', (data) => {
            console.log('🥗 New food match:', data);
            callback(data);
        });
    }

    /**
     * FoodAid Engine: Listen for pickup status updates
     */
    onPickupUpdate(callback) {
        this.socket.on('foodaid:pickup-update', (data) => {
            console.log('📍 Pickup update:', data);
            callback(data);
        });
    }

    /**
     * FinGrow Engine: Listen for loan status changes
     */
    onLoanStatusUpdate(callback) {
        this.socket.on('fingrow:loan-status', (data) => {
            console.log('💸 Loan status update:', data);
            callback(data);
        });
    }

    /**
     * FinGrow Engine: Listen for repayment reminders
     */
    onRepaymentReminder(callback) {
        this.socket.on('fingrow:repayment-reminder', (data) => {
            console.log('⏰ Repayment reminder:', data);
            callback(data);
        });
    }

    /**
     * MentorLink Hub: Listen for mentor session updates
     */
    onMentorSessionUpdate(callback) {
        this.socket.on('mentorlink:session-update', (data) => {
            console.log('🎓 Mentor session update:', data);
            callback(data);
        });
    }

    /**
     * ComChat: Join a chat channel or community
     * @param {string} channelId - Channel or community ID
     */
    joinChannel(channelId) {
        this.socket.emit('chat:join-channel', { channelId });
    }

    /**
     * ComChat: Listen for incoming messages
     */
    onMessage(callback) {
        this.socket.on('chat:message-received', (message) => {
            callback(message);
        });
    }

    /**
     * ComChat: Send a message to channel
     * @param {string} channelId - Channel ID
     * @param {string} message - Message text
     * @param {object} metadata - Optional file, mention, or emoji data
     */
    sendMessage(channelId, message, metadata = {}) {
        this.socket.emit('chat:send-message', {
            channelId,
            message,
            timestamp: new Date(),
            ...metadata,
        });
    }

    /**
     * ComChat: Listen for typing indicators
     */
    onTyping(callback) {
        this.socket.on('chat:user-typing', (data) => {
            callback(data);
        });
    }

    /**
     * ComChat: Broadcast typing indicator
     * @param {string} channelId - Channel ID
     */
    broadcastTyping(channelId) {
        this.socket.emit('chat:typing', { channelId });
    }

    /**
     * Project Workspace: Listen for task board updates (Kanban)
     */
    onTaskUpdate(callback) {
        this.socket.on('workspace:task-update', (data) => {
            console.log('📋 Task updated:', data);
            callback(data);
        });
    }

    /**
     * Project Workspace: Listen for team member activity
     */
    onTeamActivity(callback) {
        this.socket.on('workspace:team-activity', (data) => {
            callback(data);
        });
    }

    /**
     * Community Discovery: Listen for trending updates
     */
    onTrendingUpdate(callback) {
        this.socket.on('community:trending-update', (data) => {
            callback(data);
        });
    }

    /**
     * Impact Profile: Listen for achievement badges/milestones
     */
    onAchievementUnlocked(callback) {
        this.socket.on('profile:achievement-unlocked', (data) => {
            console.log('🏆 Achievement unlocked:', data);
            callback(data);
        });
    }

    /**
     * Admin Panel: Broadcast system announcements
     */
    onAdminAnnouncement(callback) {
        this.socket.on('admin:announcement', (data) => {
            console.log('📢 Admin announcement:', data);
            callback(data);
        });
    }

    /**
     * Generic emit for custom events
     * @param {string} event - Event name
     * @param {object} data - Event data
     */
    emit(event, data) {
        if (this.socket?.connected) {
            this.socket.emit(event, data);
        } else {
            console.warn('⚠️ Socket not connected. Event queued:', event);
        }
    }

    /**
     * Remove specific event listener
     * @param {string} event - Event name
     */
    off(event) {
        if (this.socket) {
            this.socket.off(event);
        }
    }

    /**
     * Disconnect socket and cleanup
     */
    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    /**
     * Check if socket is connected
     */
    isConnected() {
        return this.socket?.connected || false;
    }

    /**
     * Get socket ID
     */
    getSocketId() {
        return this.socket?.id || null;
    }
}

export default new SocketHelper();