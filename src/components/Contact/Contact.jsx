import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1>GET IN TOUCH</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let’s Connect</h2>
          <p>
            I’m an IT student and aspiring frontend developer currently looking
            for internship opportunities. If you’re interested in working
            together or have any opportunities, feel free to reach out.
          </p>

          <div>📧 sashergrg602@gmail.com</div>
          <div>📞 9806618711</div>
          <div>📍 Pokhara (Chhinedanda)</div>
        </div>
        <div className="contact-form">
          <p>Your Name</p>
          <input type="text" placeholder="Enter your name" />

          <p>Your Email</p>
          <input type="email" placeholder="Enter your email" />

          <p>Your Message</p>
          <textarea placeholder="Enter your message"></textarea>

          <button>Send Message</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
