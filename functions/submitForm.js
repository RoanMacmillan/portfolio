const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  const YOUR_EMAIL = process.env.YOUR_EMAIL;
  const YOUR_EMAIL_PASSWORD = process.env.YOUR_EMAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    service: "hotmail", // Use your email service here
    auth: {
      user: YOUR_EMAIL,
      pass: YOUR_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: YOUR_EMAIL,
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    console.log('Sending email:', mailOptions); // Add this line
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: "Message sent successfully",
    };
  } catch (error) {
    console.error('Error sending email:', error); // Add this line
    return {
      statusCode: 500,
      body: "Error sending message",
    };
  }
};
