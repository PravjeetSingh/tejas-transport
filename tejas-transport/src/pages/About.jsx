import {
  FiCheckCircle,
  FiTarget,
  FiShield,
  FiTruck
} from "react-icons/fi";

function About() {
  return (
    <main>

      <section className="page-hero">
        <div className="container">
          <span>ABOUT US</span>
          <h1>
            Moving With
            <br />
            <strong>Purpose.</strong>
          </h1>
          <p>
            Reliable container transportation built around
            safety, efficiency and dependable service.
          </p>
        </div>
      </section>


      <section className="section about-main">
        <div className="container about-grid">

          <div className="about-title">
            <span className="section-label">WHO WE ARE</span>
            <h2>
              Your Reliable
              <br />
              <span>Transport Partner.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              Tejas Transport is a container transportation
              company focused on providing dependable movement
              of shipping containers for businesses and industries.
            </p>

            <p>
              We understand that transportation is an important
              part of the supply chain. Our objective is to provide
              safe, efficient and timely container movement while
              maintaining professional service at every stage.
            </p>

            <p>
              From port transportation to warehouse and industrial
              destinations, our operations are built around
              reliability and responsible transportation.
            </p>
          </div>

        </div>
      </section>

<section className="about-stats">

  <div className="container about-stats-grid">

    <div className="about-stat">
      <strong>5+</strong>
      <span>Years Experience</span>
    </div>

    <div className="about-stat">
      <strong>5,000+</strong>
      <span>Containers Moved</span>
    </div>

    <div className="about-stat">
      <strong>100+</strong>
      <span>Trucks</span>
    </div>

    <div className="about-stat">
      <strong>50+</strong>
      <span>Clients</span>
    </div>

  </div>

</section>

      <section className="about-values section">

        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">
                OUR APPROACH
              </span>

              <h2>
                Simple Principles.
                <br />
                <span>Strong Service.</span>
              </h2>
            </div>
          </div>


          <div className="values-grid">

            <div className="value-card">
              <FiTarget />
              <h3>Our Mission</h3>
              <p>
                To provide dependable container transportation
                solutions that help businesses move their cargo
                efficiently.
              </p>
            </div>

            <div className="value-card">
              <FiShield />
              <h3>Safety First</h3>
              <p>
                Safety and responsible transportation remain
                important parts of our operations.
              </p>
            </div>

            <div className="value-card">
              <FiTruck />
              <h3>Reliable Operations</h3>
              <p>
                We focus on dependable vehicles, professional
                operations and efficient movement.
              </p>
            </div>

          </div>

        </div>

      </section>


      <section className="about-points section">

        <div className="container points-grid">

          <div>
            <span className="section-label">
              WHY WORK WITH US
            </span>

            <h2>
              Transportation
              <br />
              <span>Without Uncertainty.</span>
            </h2>
          </div>

          <div className="points-list">

            <div>
              <FiCheckCircle />
              <span>Dependable container transportation</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Focus on timely movement</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Professional service approach</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Flexible transportation solutions</span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;