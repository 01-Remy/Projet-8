import React from "react";
import Form from "../../components/form";

function Contact() {
  const inputList = [
    { type: "text", name: "name", content: "Nom" },
    { type: "text", name: "firstName", content: "Prénom" },
    { type: "email", name: "email", content: "Email" },
    { type: "text", name: "subject", content: "Sujet" },
    { type: "textarea", name: "message", content: "Votre message" },
  ];
  return (
    <main className="remy-contact">
      <h1 className="page-title">Contact</h1>
      <section className="contact">
        <Form inputList={inputList} classname={"contact-form"} id={"contact-form"} />
        <button className="btn btn-full" type="submit" form="contact-form">
          <span className="btn-content">Envoyer</span>
        </button>
      </section>
    </main>
  );
}

export default Contact;
