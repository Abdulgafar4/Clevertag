import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const Service_ID = "service_ytorvgb";
  const Template_ID = "template_nfczlp8";
  const User_ID = "PbdWhIa8XpCN2engc";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(Service_ID, Template_ID, e.target, User_ID).then(
      (res) => {
        console.log(res);
        Swal.fire({
          icon: `success`,
          title: `Message Sent Successfully`,
        });
      },
      (err) => {
        console.log(err.text);
        Swal.fire({
          icon: `error`,
          title: `Oops, Something went wrong`,
          text: err.text,
        });
      }
    );

    setEmail("");
    setMessage("");
    setName("");
    setNumber("");
  };

  return (
    <div className="contactWrapper" id="contact">
      <h3>Message Me</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name </label>
        <input
          type="text"
          placeholder="John Doe"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="tel">Number </label>
        <input
          type="tel"
          id="tel"
          placeholder="+1 8XXXXXXXX"
          name="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <label htmlFor="message">Message </label>
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Type Your Message Here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
