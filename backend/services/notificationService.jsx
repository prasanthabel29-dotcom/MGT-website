import nodemailer from "nodemailer";

export const sendNotification = async (contact) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",
      pass: "your_app_password",
    },
  });

  await transporter.sendMail({
    from: contact.email,
    to: "your_email@gmail.com",
    subject: "🚀 New Contact Form Submission",
    html: `
      <h3>New Lead</h3>
      <p><b>Name:</b> ${contact.name}</p>
      <p><b>Email:</b> ${contact.email}</p>
      <p><b>Phone:</b> ${contact.phone}</p>
      <p><b>Message:</b> ${contact.message}</p>
    `,
  });
};