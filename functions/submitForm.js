const nodemailer = require("nodemailer");


const rateLimitWindow = 60 * 1000; // 60 seconds in milliseconds
const maxRequestsPerWindow = 5; // Max number of requests per IP in the rate limit window

const requestCounts = {}; // Store request counts per IP address

function isRateLimited(ip) {
  const currentTime = Date.now();
  const requests = requestCounts[ip] || [];

  // Remove requests older than the rate limit window
  while (requests.length > 0 && requests[0] < currentTime - rateLimitWindow) {
    requests.shift();
  }


  console.log(`IP: ${ip}, requests count: ${requests.length}`); // Log the number of requests from the IP address

  // If the number of remaining requests is less than the max allowed, record the new request and return false (not rate-limited)
  if (requests.length < maxRequestsPerWindow) {
    requests.push(currentTime);
    requestCounts[ip] = requests;
    console.log(`Not rate-limited: ${ip}`); // Log that the IP is not rate-limited
    return false;
  }

  // If the number of remaining requests is equal to or greater than the max allowed, return true (rate-limited)
  console.log(`Rate-limited: ${ip}`); // Log that the IP is rate-limited
  return true;
}

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }


  const clientIp = event.headers['client-ip'];

  if (isRateLimited(clientIp)) {
    return {
      statusCode: 429,
      body: "Too Many Requests",
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
    from: YOUR_EMAIL, // Use your own email address for the "from" field
    to: YOUR_EMAIL, // Set the "to" field directly to your email address
    subject: `New message from ${name}`,
    text: message,
    replyTo: email, // Add the "reply-to" field, set to the email address entered in the form
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
