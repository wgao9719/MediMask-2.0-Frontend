// // pages/api/sendEmail.ts

// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     // Create a transporter using your email service configuration
//     const transporter = nodemailer.createTransport({
//       // For example, using Gmail:
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER, // Your Gmail address
//         pass: process.env.EMAIL_PASS, // Your Gmail password or App password
//       },
//     });

//     const mailOptions = {
//       from: email, // Sender address (user's email)
//       to: process.env.EMAIL_USER, // Your email address to receive the message
//       subject: `New message from ${name}`,
//       text: message,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Error sending email' });
//     }
//   } else {
//     // Handle any other HTTP method
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
