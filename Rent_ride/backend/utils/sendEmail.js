const nodemailer = require("nodemailer");

const sendVerificationEmail = async (email, code) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "driftyweb69@gmail.com",
      pass: "fqqz eotq rzgd yxsi", 
    },
  });

  const mailOptions = {
    from: "Drifty driftyweb69@gmail.com",
    to: email,
    subject: "Your Drifty Verification Code",
    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
        <h2>Welcome to Drifty!</h2>
        <p>Your verification code is:</p>
        <h1 style="color: #2ecc71; font-size: 24px;">${code}</h1>
        <p>Please enter this code on the verification page to complete your signup.</p>
        <p>If you didn’t request this, please ignore this email.</p>
        <p><strong>Thank you</strong></p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendVerificationEmail;
