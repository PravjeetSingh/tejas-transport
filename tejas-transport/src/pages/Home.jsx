import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiTruck,
  FiShield,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="container hero-container">

          <div className="hero-content">

            <div className="hero-label">
              <span></span>
              CONTAINER TRANSPORTATION
            </div>

            <h1>
              Moving Containers.
              <br />
              <span>Moving Business.</span>
            </h1>

            <p>
              Reliable and efficient container transportation
              solutions for ports, warehouses, industries and
              businesses.
            </p>

            <div className="hero-buttons">

              <Link to="/contact" className="btn btn-primary">
                Get In Touch
                <FiArrowRight />
              </Link>

              <Link to="/services" className="btn btn-light">
                Explore Services
              </Link>

            </div>

          </div>


          <div className="hero-info">

            <div className="hero-info-icon">
              <FiTruck />
            </div>

            <h3>
              Reliable Container
              <br />
              Transportation
            </h3>

            <p>
              Safe movement of containers from port
              to destination.
            </p>

            <Link to="/contact">
              Enquire Now <FiArrowRight />
            </Link>

          </div>

        </div>

<div className="hero-bottom">
  <div className="container hero-stats">

    <div>
      <strong>5+</strong>
      <span>Years Experience</span>
    </div>

    <div>
      <strong>5K+</strong>
      <span>Containers Moved</span>
    </div>

    <div>
      <strong>100+</strong>
      <span>Trucks</span>
    </div>

    <div>
      <strong>50+</strong>
      <span>Happy Clients</span>
    </div>

  </div>
</div>

      </section>


      {/* INTRODUCTION */}
      <section className="intro section">

        <div className="container intro-grid">

          <div className="section-number">
            <span>01</span>
            <div></div>
            <p>ABOUT TEJAS TRANSPORT</p>
          </div>

          <div className="intro-content">

            <h2>
              Transportation You Can
              <br />
              <span>Count On.</span>
            </h2>

            <p className="intro-lead">
              Tejas Transport is focused on providing dependable
              container transportation solutions for businesses
              that need their cargo moved safely and efficiently.
            </p>

            <p>
              Our focus is simple — reliable vehicles, responsible
              transportation and timely service. Whether containers
              need to move from a port to a warehouse, factory or
              another destination, we aim to make the process
              smooth and dependable.
            </p>

            <Link to="/about" className="arrow-link">
              More About Us <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="services section">

        <div className="container">

          <div className="section-heading">

            <div>
              <span className="section-label">
                WHAT WE DO
              </span>

              <h2>
                Transportation
                <br />
                <span>Services</span>
              </h2>
            </div>

            <Link to="/services" className="arrow-link">
              View All Services <FiArrowRight />
            </Link>

          </div>


          <div className="service-grid">

            <article className="service-card">

              <div className="service-number">01</div>

              <FiTruck className="service-icon" />

              <h3>Container Transportation</h3>

              <p>
                Dependable transportation for shipping containers
                between ports, warehouses, factories and destinations.
              </p>

              <Link to="/services">
                Learn More <FiArrowRight />
              </Link>

            </article>


            <article className="service-card">

              <div className="service-number">02</div>

              <FiMapPin className="service-icon" />

              <h3>Port To Destination</h3>

              <p>
                Efficient movement of containers from ports to
                warehouses, factories and other locations.
              </p>

              <Link to="/services">
                Learn More <FiArrowRight />
              </Link>

            </article>


            <article className="service-card">

              <div className="service-number">03</div>

              <FiClock className="service-icon" />

              <h3>Timely Delivery</h3>

              <p>
                Transportation planned around dependable schedules
                and efficient container movement.
              </p>

              <Link to="/services">
                Learn More <FiArrowRight />
              </Link>

            </article>

          </div>

        </div>

      </section>


{/* OPERATIONS */}
<section className="operations section">

  <div className="container">

    <div className="operations-header">

      <div>
        <span className="section-label">
          OUR OPERATIONS
        </span>

        <h2>
          From Port
          <br />
          <span>To Destination.</span>
        </h2>
      </div>

      <p>
        We focus on dependable container movement across
        ports, warehouses, industrial locations and
        customer destinations.
      </p>

    </div>


    <div className="operations-flow">

      <div className="operation-step">

        <div className="operation-icon">
          <FiMapPin />
        </div>

        <span>01</span>

        <h3>Port</h3>

        <p>
          Container pickup from the required port location.
        </p>

      </div>


      <div className="operation-line"></div>


      <div className="operation-step">

        <div className="operation-icon">
          <FiTruck />
        </div>

        <span>02</span>

        <h3>Transportation</h3>

        <p>
          Safe and efficient movement towards the destination.
        </p>

      </div>


      <div className="operation-line"></div>


      <div className="operation-step">

        <div className="operation-icon">
          <FiMapPin />
        </div>

        <span>03</span>

        <h3>Destination</h3>

        <p>
          Container delivered to the required location.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* WHY US */}
      <section className="why-us section">

        <div className="container">

          <div className="why-heading">

            <span className="section-label">
              WHY TEJAS TRANSPORT
            </span>

            <h2>
              Built Around
              <br />
              <span>Reliability.</span>
            </h2>

          </div>


          <div className="why-grid">

            <div className="why-card">
              <FiShield />

              <h3>Safe Transportation</h3>

              <p>
                Responsible handling and transportation
                of containers.
              </p>
            </div>


            <div className="why-card">
              <FiClock />

              <h3>Timely Service</h3>

              <p>
                Focused on efficient movement and
                dependable schedules.
              </p>
            </div>


            <div className="why-card">
              <FiTruck />

              <h3>Reliable Fleet</h3>

              <p>
                Dependable vehicles for container
                transportation requirements.
              </p>
            </div>


            <div className="why-card">
              <FiMapPin />

              <h3>Flexible Operations</h3>

              <p>
                Transportation solutions designed
                around your requirements.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="cta">

        <div className="container cta-container">

         
          <div>
            <span>NEED CONTAINER TRANSPORTATION?</span>

            <h2>
              Let's Move Your
              <br />
              Containers.
            </h2>
          </div>

          <Link to="/contact" className="btn btn-primary">
            Contact Us
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;