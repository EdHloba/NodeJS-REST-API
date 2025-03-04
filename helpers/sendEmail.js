import nodemailer from "nodemailer";
import "dotenv/config";

const {META_EMAIL,META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user:META_EMAIL,
    pass:META_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = (data) => {
  const email = { ...data, from:META_EMAIL };
  return transport.sendMail(email);
};

export default sendEmail;
