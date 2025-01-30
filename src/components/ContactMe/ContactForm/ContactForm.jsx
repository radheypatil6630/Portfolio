import React, { useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  console.log(process.env.REACT_APP_SERVICE_ID);
    
  const sendEmail = (e) => {
    e.preventDefault();

  

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_DATA
      )
      .then(
        () => {
          alert('Email sent successfully!');
          console.log('SUCCESS!');
        },
        (error) => {
          alert('Failed to send email. Please try again later.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='contact-form-content'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='name-container'>
          <input type='text' name="user_name" placeholder='First Name' required />
        </div>
        <input type='email' placeholder='email' name="user_email" required />
        <textarea type="text" name="message" placeholder='Message' rows={3} required />
        <button type="submit" value="Send">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;