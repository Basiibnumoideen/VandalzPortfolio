require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// 1. Initialize Express app FIRST
const app = express();

// 2. Middleware setup
app.use(express.json());
app.use(cors());

// 3. Define routes AFTER app is initialized
app.get('/', (req, res) => {
  res.send('Server is running. Use the React app for the contact form.');
});

app.get('/project', (req, res) => {
  res.send('This is the project route.');
});

// Email setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Handle form submission
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, phone, company, message, service } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name} (${service})`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));