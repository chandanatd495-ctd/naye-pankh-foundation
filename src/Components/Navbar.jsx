import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="Logo" className="logo" />
     <Link to="/">
      <h2>NayePankh Foundation</h2>
       </Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;