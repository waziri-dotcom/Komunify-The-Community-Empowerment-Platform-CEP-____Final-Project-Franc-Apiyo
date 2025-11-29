// src/services/notificationService.js
const nodemailer = require("nodemailer");
const Notification = require("../models/Notification");
const User = require("../models/user.model");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Create a DB notification and optionally send email.
 * options: { userId, type, message, sendEmail (bool), subject }
 */
async function createNotification({ userId, type = "system", message, sendEmail = false, subject = "Komunify Notification" }) {
  try {
    const notif = await Notification.create({
      user: userId,
      type,
      message,
    });

    if (sendEmail) {
      const user = await User.findById(userId);
      if (user?.email) {
        await sendEmailNotification(user.email, subject, message);
      }
    }

    return notif;
  } catch (err) {
    console.error("createNotification error:", err);
    throw err;
  }
}

/**
 * Send email using configured SMTP transporter.
 */
async function sendEmailNotification(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: `"Komunify" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html: `<div style="font-family: sans-serif; line-height:1.4">${html}</div>`,
    });

    return info;
  } catch (err) {
    console.error("sendEmailNotification error:", err);
    throw err;
  }
}

module.exports = {
  createNotification,
  sendEmailNotification,
};
