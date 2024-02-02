const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const validateFormData = require('./logic')

const app = express();
const port = 3001;

app.use(express.json());

//app.use(cors());

const allowedOrigins = ['http://localhost:3000']; 

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

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


