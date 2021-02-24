import React, { useContext, useEffect, useState } from 'react';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';
import './Contact.scss';
import Selector from './Selector';

const SELECTABLES = {
    subject: ["discuter d'un projet", "juste discuter"],
    destinataire: ["mon entreprise", "un client", "moi"]
}

const Contact = () => {
    const langage = useContext(LangContext);

    const [subject, setSubject] = useState(0);
    const [destinataire, setDestinataire] = useState(0);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nom, setNom] = useState('');
    const [error, setError] = useState({
        error: false,
        message: ''
    });
    const [success, setSuccess] = useState({
        success: false,
        message: ''
    });

    useEffect(() => {
        document.title = "Florent Alamachere - Contact";
    }, []);

    const checkInputs = () => {
        try{
            if(!nom.length) throw new Error(langage.langage === "fr" ? "On fais son timide ? C'est quoi votre petit nom ?" : "Oh, so you're shy ? What's your little name ?");
            if(!email.length && !phone.length) throw new Error(langage.langage === "fr" ? "Je vais avoir besoin d'un email ou d'un numéro de téléphone pour vous recontacter." : "I'm going to need an email or a phone number to get back to you.");
            if(phone.length > 20) throw new Error(langage.langage === "fr" ? "C'est vraiment un numéro de téléphone ça ?" : "Is that really a phone number ?");
            setError({error: false, message: ''});
            return true;
        } catch(e){
            setError({error: true, message: e.message});
            return false;
        }
    }

    const sendMail = () => {
        if(checkInputs()){

            const mailData = {
                reason: SELECTABLES.subject[subject],
                destinataire: SELECTABLES.destinataire[destinataire],
                to: email,
                phone,
                nom
            }

            fetch('/email', {
                method: 'post',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(mailData)
            }).then(res => {
                console.log("res: ", res);
                return res.json();
            }).then(data => {
                console.log("data: ", data);
                if(data.status === 200){
                    setError({
                        error: false,
                        message: ''
                    });
                    setSuccess({
                        success: true,
                        message: "Votre message a bien été envoyé, je reviens vers vous très vite."
                    });
                } else {
                    setSuccess({
                        success: false,
                        message: ''
                    })
                    setError({
                        error: true,
                        message: "Une erreur s'est produite sur le serveur, veuillez réessayer ultérieurement ou me contacter via florentalamachere@yahoo.fr."
                    })
                }
            });
        }
    }

    return (
        <main className="page" id="contact">
            <h1>Contact</h1>
            <p>
                { lang.contact.salut[langage.langage]}
            </p>
            <input value={nom} type="text" placeholder="Michel Dupont" onChange={e => setNom(e.target.value)}/>
            <p>
                { lang.contact.pourquoi[langage.langage]}
            </p>
            <Selector options={lang.contact.subject[langage.langage]} onChange={(index) => setSubject(index)} selectedOption={subject}/>
            <p>
                { lang.contact.for[langage.langage]}
            </p>
            <Selector options={lang.contact.destinataire[langage.langage]} onChange={(index) => setDestinataire(index)} selectedOption={destinataire}/>
            <p>
                .
                <br/>
                <br/>
                { lang.contact.joindre[langage.langage]}
                <input value={email} type="email" placeholder="bruce.wayne@manbat.com" onChange={e => setEmail(e.target.value)}/>
                { lang.contact.numero[langage.langage]}
                <input value={phone} type="phone" placeholder="0607080910" onChange={e => setPhone(e.target.value)}/>
            </p>
            <button data-content={lang.contact.send[langage.langage]} onClick={sendMail}>{lang.contact.send[langage.langage]}</button>
            {error.error && <p className="error">{error.message}</p>}
            {success.success && <p className="success">{success.message}</p>}
        </main>
)};

export default Contact;