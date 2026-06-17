import donateImg from "../assets/donate.png";
import programsImg from "../assets/programs.png";
import "./Donate.css";

function Donate() {
  return (
    <>
      <section className="page-hero">
        <h1>Support Our Mission</h1>

        <p>
          Every contribution creates change.
        </p>
      </section>

      <section className="donate-section">

        <div className="donate-image">
          <img
            src={donateImg}
            alt="Donate"
          />
        </div>

        <div className="donate-content">

          <h2>Why Your Donation Matters</h2>

          <p>
            Every donation helps us reach more children,
            support healthcare initiatives and strengthen
            communities in need.
          </p>

          <p>
            Together we can create opportunities,
            restore hope and build a brighter future.
          </p>

        </div>

      </section>

      <section className="donate-cards">

        <div className="donation-card">
          <h3>Education</h3>
          <p>Support learning programs.</p>
        </div>

        <div className="donation-card">
          <h3>Healthcare</h3>
          <p>Support health initiatives.</p>
        </div>

        <div className="donation-card">
          <h3>Community Development</h3>
          <p>Support local communities.</p>
        </div>

      </section>

      <section className="donate-quote">

        <h2>
          "A small act of kindness can change a life forever."
        </h2>

      </section>

      <section className="donate-cta">
        <div className="donate-text">
        <h2>
          Be the reason someone smiles today.
        </h2>
        <p> Every donation helps us reach more children,
      support healthcare initiatives and strengthen
      communities in need.</p>
        <button className="btn">
          Donate Now
        </button>
        </div>
         <img src={programsImg} alt="Donate" className="donate-cta-image" />
      </section>
    </>
  );
}

export default Donate;