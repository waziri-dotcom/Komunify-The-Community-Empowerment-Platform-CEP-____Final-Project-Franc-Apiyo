// src/services/notificationService.js
// Simple notification service wrapper. Extend to send emails, SMS, push notifications.

const nodemailer = require('nodemailer');

async function sendEmail({ to, subject, text, html }) {
  // For production, configure SMTP transport or a provider like SendGrid
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || ''
    }
  });

  const result = await transporter.sendMail({ from: process.env.SMTP_FROM || 'no-reply@komunify.org', to, subject, text, html });
  return result;
}

async function notifyUser(userId, { title, body, data }) {
  // TODO: implement push (FCM) or SMS via Twilio
  console.log(`notifyUser(${userId}): ${title} - ${body}`);
  return true;
}

module.exports = { sendEmail, notifyUser };
