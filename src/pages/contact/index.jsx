import { React } from "react";
import Form from "../../components/form";

function Contact() {
  return (
    <main className="remy-contact">
      <h1 className="page-title">Contact</h1>
      <section className="contact">
        <Form classname={"contact-form"} id={"contact-form"} />
      </section>
    </main>
  );
}

export default Contact;
