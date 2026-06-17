import "./Programs.css";
import programImage from "../assets/programs.png";
function Programs() {
  return (
  
     <section className="programs_section">

  <h1>Our Programs</h1>

  <div className="programs_grid">

    <div className="program_card">
      <h2>Education</h2>
      <p>
        Providing free education to underprivileged children and
        helping them overcome barriers to education.
      </p>
    </div>

    <div className="program_card">
      <h2>Healthcare</h2>
      <p>
        Offering healthcare services to those in need, including
        free medical assistance and awareness campaigns.
      </p>
    </div>

    <div className="program_card">
      <h2>Food and Sanitation</h2>
      <p>
        Distributing food and sanitary products to those in need,
        including food not only to underprivileged communities but
        also to stray animals.
      </p>
    </div>

    <div className="program_card">
      <h2>Clothing and Support</h2>
      <p>
        Providing clothing to poor families and offering support
        during times of crisis.
      </p>
    </div>

    <div className="program_card">
      <h2>Internships</h2>
      <p>
        Offering internships to train and support underprivileged
        individuals, helping them build practical skills while
        staying connected to purpose-driven initiatives.
      </p>
    </div>

  </div>

</section>
  );
}

export default Programs;