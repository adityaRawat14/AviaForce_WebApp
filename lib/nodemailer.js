"use strict";
const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "utkarshojhalu@gmail.com",
    pass: "zkbvssygbaeyvmcc",
    // pass: "mypassutk",
  },
  tls: {
    rejectUnauthorized: true,
  },
});

export const mailOptions = {
  from: "utkarshojhalu@gmail.com",
  to: "uavadityaomar@gmail.com",
};
