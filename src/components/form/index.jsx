import { React, useState, useRef } from "react";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { MdSend } from "react-icons/md";

function Form({ classname, id }) {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.subject || !inputs.message) {
      setMessage("Merci de renseigner tous les champs obligatoires* !");
    } else if (!validator.isEmail(inputs.email)) {
      setMessage("Veuillez renseigner une adresse email valide !");
    } else {
      setMessage("Message envoyé !");

      emailjs.sendForm("service_nqtlvdp", "template_stqx1ui", form.current, "HWaNG0Yj6nMbKAgWP").then(
        (result) => {
          console.log("Message envoyé !", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <form className={classname} id={id} onSubmit={handleSubmit} ref={form}>
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
      <div className="submit-container">
        <label htmlFor="submit" className="btn btn-full" id="submit">
          <input type="submit" name="submit" value={"Envoyer"}></input>
          <MdSend />
        </label>
        <span className="submit-message">{message}</span>
      </div>
    </form>
  );
}

export default Form;
