const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'build')));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/email', (req, res) => {
    const { reason, destinataire, to, phone } = req.body;

    const mailData = {
        from: 'youremail@gmail.com',  // sender address
        to: 'florentalamachere@yahoo.fr',   // list of receivers
        subject: 'Nouveau message depuis portfolio',
        html: `Salut Florent, je te contacte parce que j'aimerais ${reason} pour ${destinataire}.
        Tu peux me joindre à l'adresse suivante ${to} ou à ce numéro ${phone}. `
    };
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
});

app.listen(process.env.PORT || 8080, () => {
    console.log("open localhost 3000");
});