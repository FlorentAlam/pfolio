import React, { useContext, useEffect, useState } from 'react';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';
import './Contact.scss';
import Selector from './Selector';

const Contact = () => {
    const langage = useContext(LangContext);

    const [subject, setSubject] = useState(0);
    const [destinataire, setDestinataire] = useState(0);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nom, setNom] = useState('');

    useEffect(() => {
        document.title = "Florent Alamachere - Contact";
    }, []);

    return (
        <main className="page" id="contact">
            <h1>Contact</h1>
            <p>
                { lang.contact.salut[langage.langage]}
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
        </main>
)};

export default Contact;