import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Comp_css/FanFeedback.css";

function FanFeedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tc110rx", // EmailJS_SERVICE_ID
        "template_r5n9dwr", // EmailJS_TEMPLATE_ID
        formData,
        "pO3t9oimS0fDnmwo0" // EmailJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Feedback sent successfully 🚀");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Something went wrong 😢");
          console.log(error);
        }
      );
  };

  return (
    <div className="contact-container">
      <section className="four-hero">
        <h1 className="contact-title">Fan Feedback</h1>
        <h4 className="contact-subtitle">
          Your voice helps us improve the Marvel experience 🦸‍♂️
        </h4>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Feedback..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default FanFeedback;
