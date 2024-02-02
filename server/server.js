const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const validateFormData = require('./logic')

const app = express();
const port = 3001;

app.use(express.json());

//app.use(cors());

const options = {
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
      'http://localhost:3001',
      'http://localhost:3000',
  ],
  preflightContinue: false,
};

const corsOpts = cors(options);

app.use(corsOpts);

app.post('/send-email', (req, res) => {
  const { name, time, date, phoneNumber, email } = req.body;


  const validationErrors = validateFormData(name, date, time , phoneNumber, email);

  console.log("errors")
  console.log(validationErrors)

  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }else{

 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'quellbrunen@gmail.com',
        pass: 'znvi cfxs krhd sgda',
      },
    });


    const mailOptions = {
      from: 'quellbrunen@gmail.com',
      to: 'yannick.gogolin@gmail.com',
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


