const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const validateFormData = require('./logic')

require('dotenv').config();

const gm_user = process.env.GM_USER;
const gm_pw = process.env.GM_PW;
const gm_target = process.env.GM_TARGET;
const cors_domain1 = process.env.CORS_DOMAIN1;
const cors_domain2 = process.env.CORS_DOMAIN2;
const cors_domain3 = process.env.CORS_DOMAIN3;
const cors_domain4 = process.env.CORS_DOMAIN4;
const cors_domain5 = process.env.CORS_DOMAIN5;
const cors_domain6 = process.env.CORS_DOMAIN6;

const app = express();
const port = 3001;

app.use(express.json());

app.use(cors());

/* const options = {
  allowedHeaders: [
      'X-ACCESS_TOKEN',
      'Access-Control-Allow-Origin',
      'Authorization',
      'Origin',
      'x-requested-with',
      'Content-Type',
      'Content-Range',
      'Content-Disposition',
      'Content-Description',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: [
      `${cors_domain1}`,
      `${cors_domain2}`,
      `${cors_domain3}`,
      `${cors_domain4}`,
      `${cors_domain5}`,
  ],
  preflightContinue: false,
};

const corsOpts = cors(options);

app.use(corsOpts);  */

app.post('/send-email', (req, res) => {
  const { name, time, date, phoneNumber, email } = req.body;


  const validationErrors = validateFormData(name, date, time , phoneNumber, email);

  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }else{

 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: `${gm_user}`,
        pass: `${gm_pw}`,
      },
    });

    const mailOptions = {
      from: `${gm_user}`,
      to: `${gm_target}`,
      subject: 'Booking Request',
      text: `Name: ${name}\nDate: ${date}\n Time: ${time}\nPhone Number: ${phoneNumber}\nEmail: ${email}`,
    };
   
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
      }

      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');


    });

  }


});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


