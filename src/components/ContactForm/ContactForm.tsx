import React, { useState } from "react";
import "./ContactForm.scss";
import Button from "../UI/Button/Button";
import { EmailMessage } from "../../utils/models/EmailMessage";
import ContactService from "../../services/contact.service";
import Input from "../UI/Input/Input";

const ContactForm = () => {
  const [message, setMessage] = useState<EmailMessage>(
    new EmailMessage("", "")
  );

  const onFieldChange = (e: any, field: string) =>
    setMessage({ ...message, [field]: e.target.value });

  function hasFormError(): boolean {
    if (message.message.length === 0 || message.email.length === 0) {
      return true;
    }
    return false;
  }

  function emailKeypress(event: any) {
    const key: string = event.key;
    return /[A-Za-z0-9@._-]/.test(key);
  }

  async function sendForm(e: any) {
    e.preventDefault();
    await ContactService.sendEmail(message);
    setMessage(new EmailMessage("", ""));
  }

  return (
    <form className="contact__form">
      <Input controlName="Email">
        <input
          type="email"
          onKeyPress={(e) => emailKeypress(e)}
          onChange={(e) => onFieldChange(e, "email")}
          value={message.email}
          name="email"
          id="email"
        />
      </Input>
      <Input controlName="Сообщение">
        <textarea
          name="message"
          id="message"
          onChange={(e) => onFieldChange(e, "message")}
          value={message.message}
          cols={30}
          rows={6}
        />
      </Input>
      <Button onClick={sendForm} disabled={hasFormError()}>
        Отправить
      </Button>
    </form>
  );
};

export default ContactForm;
