/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

// Initialize Firebase Admin
admin.initializeApp();

// SendGrid API Key
const SENDGRID_API_KEY = 'YOUR_SENDGRID_API_KEY';
sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendBookingConfirmationEmail = functions.firestore
    .document('bookings/{bookingId}')
    .onCreate(async (snap, context) => {
        const bookingData = snap.data();

        const msg = {
            to: bookingData.email, // Client's email
            from: 'your-email@example.com', // Your verified SendGrid email
            subject: 'Booking Confirmation',
            text: `Hello ${bookingData.fullName},\n\nYour booking has been confirmed.\n\nDetails:\nCheck-in: ${bookingData.checkIn}\nCheck-out: ${bookingData.checkOut}\nTotal Cost: ${bookingData.totalCost}\n\nThank you for booking with us!`,
            html: `<strong>Hello ${bookingData.fullName},</strong><br><br>Your booking has been confirmed.<br><br>Details:<br>Check-in: ${bookingData.checkIn}<br>Check-out: ${bookingData.checkOut}<br>Total Cost: ${bookingData.totalCost}<br><br>Thank you for booking with us!`,
        };

        try {
            await sgMail.send(msg);
            console.log('Booking confirmation email sent to:', bookingData.email);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    });
