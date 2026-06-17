import volunteerImg from "../assets/ngo2.png";
import "./Volunteer.css";
function Volunteer() {
  return (
    <>
      <section className="page-hero">

        <h1>Become A Volunteer</h1>

        <p>
          Join us and make a difference.
        </p>

      </section>
      <section className="volunteer-section">

  <div className="volunteer-image">
    <img src={volunteerImg} alt="Volunteer" />
  </div>

  <div className="volunteer-content">

    <h2>Why Volunteer With Us?</h2>

    <div className="benefit-card">
      <h3>Leadership</h3>
      <p>Develop leadership skills.</p>
    </div>

    <div className="benefit-card">
      <h3>Community Impact</h3>
      <p>Create meaningful change.</p>
    </div>

    <div className="benefit-card">
      <h3>Experience</h3>
      <p>Gain real-world experience.</p>
    </div>

  </div>

</section>

<section className="volunteer-form">

  <h2>Join Our Team</h2>

  <form>

    <input
      type="text"
      placeholder="Full Name"
    />

    <input
      type="email"
      placeholder="Email Address"
    />

    <input
      type="text"
      placeholder="Phone Number"
    />

    <textarea
      placeholder="Why do you want to volunteer?"
    ></textarea>

    <button className="btn">
      Submit Application
    </button>

  </form>

</section>
     
      
    </>
  );
}

export default Volunteer;