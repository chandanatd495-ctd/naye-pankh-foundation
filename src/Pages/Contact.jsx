import contactImg from "../assets/ngo1.png";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="page-hero">
        <h1>Get In Touch</h1>

        <p>
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-section">

        <div className="contact-info">

          <img
            src={contactImg}
            alt="Contact"
          />

          <h2>Contact Information</h2>

          <p>📧 contact@nayepankh.com</p>

          <p>📞 +91 8318500748</p>

          <p>📍 Kanpur, India</p>

          <p>
            Together, we can create a brighter future
            for every child.
          </p>

        </div>

        <div className="contact-form">

          <h2>Send Us A Message</h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button className="btn">
            Send Message
          </button>

        </div>

      </section>

      <section className="contact-quote">

        <h2>
          "Every conversation is the beginning of change."
        </h2>

      </section>

    </>
  );
}

export default Contact;