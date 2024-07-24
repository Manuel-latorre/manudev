import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../app/globals.css'

type FormValues = {
  user_name: string;
  user_email: string;
  message: string;
};

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(
        "service_air3w4q",
        "template_dbcsors",
        form.current,
        "_CdUnxT0WVgK2pTat"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error.text);
      });
    }
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="field">
        <label htmlFor="user_name">user_name</label>
        <input type="text" name="user_name" id="user_name"/>
      </div>
      <div className="field">
        <label htmlFor="user_email">user_email</label>
        <input type="text" name="user_email" id="user_email"/>
      </div>
      <div className="field">
        <label htmlFor="message">message</label>
        <input type="text" name="message" id="message"/>
      </div>
      <input type="submit" id="button" value="Send Email"/>
    </form>
  );
};

export default Form;