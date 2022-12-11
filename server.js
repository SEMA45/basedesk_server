const express = require("express");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

//Sending Emails ====================
app.post("/send", (req, res) => {
  //Transporter =====
  let transporter = nodemailer.createTransport({
    host: `${req.body.host}`,
    port: `${req.body.port}`,
    secure: true,
    auth: {
      user: `${req.body.from}`,
      pass: `${req.body.password}`,
    },
  });
  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
  });
  let mailOptions = {
    from: `"${req.body.company}" <${req.body.from}>`,
    to: `${req.body.to ?? req.body.email}`,
    cc: req.body.cc?.length >= 1 ? req.body.cc : "",
    subject: `${req.body.subject}`,
    html: `${req.body.email_body}`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: err,
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

//Notify Email ===============
app.post("/acounts_notify", (req, res) => {
  //Transporter =====
  let transporter = nodemailer.createTransport({
    host: `${req.body.host}`,
    port: `${req.body.port}`,
    secure: true,
    auth: {
      user: `${req.body.from}`,
      pass: "s4u3374fddd';pd-=addjncnnf",
    },
  });
  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
  });
  let mailOptions = {
    from: `"${req.body.company}" <${req.body.from}>`,
    to: `${req.body.email}`,
    subject: `${req.body.subject}`,
    html: `${req.body.email_body}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: err,
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

//initialize Firebase ==============
admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    private_key_id: process.env.FIREBASE_KEY_ID,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URL,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_PROVIDER,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // replace `\` and `n` character pairs w/ single `\n` character
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
});

//Create New User ================
app.post("/create", (req, res) => {
  admin
    .auth()
    .createUser({
      email: `${req.body.email}`,
      emailVerified: false,
      password: `${req.body.password}`,
      displayName: `${req.body.name}`,
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/dial-n-dine-help-desk.appspot.com/o/faviLight.png?alt=media&token=156086e8-01a6-4d23-8d26-8856a53ea74c",
      disabled: false,
    })
    .then(() => {
      res.json({
        status: "Success",
        msg: "User Created Successfully",
      });
    })
    .catch((err) => {
      console.log("== This is Error : ==" + err);
      res.json({
        status: err,
        message: err,
      });
    });
});

//Delete User ===================
app.post("/delete", (req, res) => {
  admin
    .auth()
    .deleteUser(`${req.body.uid}`)
    .then(() => {
      res.json({ "'status'": "Successfully deleted user" });
    })
    .catch((error) => {
      res.json({ status: error });
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
