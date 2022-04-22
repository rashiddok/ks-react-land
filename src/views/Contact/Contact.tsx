import React from "react";
import "./Contact.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import Socials from "../../components/UI/Socials/Socials";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="contact__description">
          <h3 className="description-header">Свяжитесь со мной</h3>
          <p className="description-text">
            Как фрилансер, я всегда открыта для новых проектов и сотрудничества
          </p>
        </div>
        <ContactForm></ContactForm>
      </div>
      <div className="contact__socials">
        <Socials iconSize="2x" />
      </div>
    </div>
  );
};

export default Contact;
