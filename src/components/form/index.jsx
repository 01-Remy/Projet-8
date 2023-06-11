import { React, useState } from "react";

function Form({ classname, id }) {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className={classname} id={id}>
      <label htmlFor="name">
        Nom
        <input type="text" name="name" value={name} placeholder="Nom" onChange={(e) => setName(e.target.value)}></input>
      </label>
      <label htmlFor="firstName">
        Prénom
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="Prénom"
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label htmlFor="subject">
        Sujet
        <input
          type="text"
          name="subject"
          value={subject}
          placeholder="Sujet"
          onChange={(e) => setSubject(e.target.value)}
        ></input>
      </label>
      <label htmlFor="message">
        Message
        <textarea
          name="message"
          value={message}
          placeholder="Votre message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </label>
      <button className="btn btn-full" type="submit" form="contact-form">
        <span className="btn-content">Envoyer</span>
      </button>
    </form>
  );
}

export default Form;
