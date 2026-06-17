import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
   <footer className="footer">

  <div className="footer-container">

    <div className="footer-about">

      <img src={logo} alt="NayePankh Logo" />

      <h2>NayePankh Foundation</h2>

      <p>
        Creating impact through compassion,
        education, healthcare and community service.
      </p>

    </div>

    <div className="footer-links">

      <h3>Quick Links</h3>

      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/programs">Programs</a>
      <a href="/volunteer">Volunteer</a>
      <a href="/donate">Donate</a>

    </div>

    <div className="footer-contact">

      <h3>Contact Us</h3>

      <p>📧 contact@nayepankh.com</p>

      <p>📞 +91 8318500748</p>

      <p>📍 Kanpur, India</p>

    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 NayePankh Foundation. All Rights Reserved.</p>
  </div>

</footer>
  );
}

export default Footer;