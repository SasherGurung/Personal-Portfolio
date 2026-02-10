import React from "react";
import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a4f28b1f-ba8b-4f55-9959-c516cda8704d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Submitted!" : "Please try again.");
  };

  return (
    <section className="contact" id="contact">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        GET IN TOUCH
      </motion.h1>

      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="contact-info"
        >
          <h2>Let’s Connect</h2>
          <p>
            I’m an aspiring frontend developer currently looking for internship
            opportunities. If you’re interested in working together or have any
            opportunities, feel free to reach out.
          </p>

          <div>📧 sashergrg602@gmail.com</div>
          <div>📞 9806618711</div>
          <div>📍 Pokhara (Chhinedanda)</div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onSubmit={onSubmit}
          className="contact-form"
        >
          <p>Your Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <p>Your Email</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <p>Your Message</p>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>

          <p className="form-result">{result}</p>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
