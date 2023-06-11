import { React, useState } from "react";
import validator from "validator";

function Form({ classname, id }) {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputs.name || !inputs.firstName || !inputs.email || !inputs.subject || !inputs.message) {
      setMessage("Merci de renseigner tous les champs obligatoires* !");
    } else if (!validator.isEmail(inputs.email)) {
      setMessage("Veuillez renseigner une adresse email valide !");
    } else {
      setMessage("Message envoyé !");
      console.log(inputs);
    }
  };

  return (
    <form className={classname} id={id} onSubmit={handleSubmit}>
      <div className="name-inputs">
        <label htmlFor="name">
          Nom*
          <input type="text" name="name" value={inputs.name || ""} placeholder="Nom" onChange={handleChange}></input>
        </label>
        <label htmlFor="firstName">
          Prénom
          <input
            type="text"
            name="firstName"
            value={inputs.firstName || ""}
            placeholder="Prénom"
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <label htmlFor="email">
        Email*
        <input type="email" name="email" value={inputs.email || ""} placeholder="Email" onChange={handleChange}></input>
      </label>
      <label htmlFor="subject">
        Sujet*
        <input
          type="text"
          name="subject"
          value={inputs.subject || ""}
          placeholder="Sujet"
          onChange={handleChange}
        ></input>
      </label>
      <label htmlFor="message">
        Message*
        <textarea
          name="message"
          value={inputs.message || ""}
          placeholder="Votre message"
          onChange={handleChange}
        ></textarea>
      </label>
      <button className="btn btn-full" type="submit" form="contact-form">
        <span className="btn-content">Envoyer</span>
      </button>
      <span>{message}</span>
    </form>
  );
}

export default Form;
