import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-header text-center">
          <h2>Get In Touch</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Feel free to reach out if you want to collaborate with me, or simply have a chat.
          </p>
        </div>

        <div className="contact-cards">
          {/* Email Card */}
          <div className="contact-card">
            <div className="icon-box">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="info-text">
              <h3>Email Me</h3>
              <p>nasimhaidarsagor@gmail.com</p>
            </div>
          </div>

          {/* Location Card */}
          <div className="contact-card">
            <div className="icon-box">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="info-text">
              <h3>Location</h3>
              <p>
                79/C/2 Kuratoli, Kuril<br />
                Dhaka-1229, Bangladesh
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="contact-card">
            <div className="icon-box">
              <i className="fa fa-phone"></i>
            </div>
            <div className="info-text">
              <h3>Call Me</h3>
              <p>+8801746330309</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
