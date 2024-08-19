require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [

'http://localhost:4200', 
'https://peperj.es',
  'https://www.peperj.es'
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'");
  next();
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

app.post('/send-email', (req, res) => {
  const { nombre, email, asunto, mensaje } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_CLIENTE,
    subject: asunto,
    text: `Nombre: ${nombre}\nCorreo: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).json({ message: 'Correo enviado correctamente' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});