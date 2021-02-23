const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const mailgun = require('mailgun-js');

const mg = mailgun({apiKey: process.env.MG_API_KEY, domain: process.env.MG_DOMAIN});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/email', async (req, res) => {
    const { reason, destinataire, to, phone, nom } = req.body;

    const mailData = {
        from: 'Visiteur <youremail@gmail.com>',
        to: 'florentalamachere@yahoo.fr',
        subject: 'Nouveau message depuis portfolio',
        text: `Salut Florent, je m'appelle ${nom} je te contacte parce que j'aimerais ${reason} pour ${destinataire}.
        Tu peux me joindre à l'adresse suivante ${to} ou à ce numéro ${phone}. `
    };
    await mg.messages().send(mailData, (err, body) => {
        if(err){
            res.send({test: "il y a une erreur"});
        } else res.send("voici le body:", body);
    });
});

app.listen(process.env.PORT || 8080, () => {
    console.log("open localhost 3000");
});