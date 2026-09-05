import {
  FiTruck,
  FiShield,
  FiClock,
  FiCheckCircle,
  FiArrowRight
} from "react-icons/fi";

function Fleet() {
  const fleet = [
    {
      number: "01",
      title: "Container Trucks",
      icon: <FiTruck />,
      text: "Vehicles suitable for transportation of shipping containers between ports, warehouses, industrial locations and destinations."
    },
    {
      number: "02",
      title: "Heavy Duty Vehicles",
      icon: <FiShield />,
      text: "Reliable vehicles designed to support regular container transportation requirements and long-distance movement."
    },
    {
      number: "03",
      title: "Transportation Support",
      icon: <FiClock />,
      text: "Fleet operations planned around transportation requirements, pickup locations and delivery destinations."
    }
  ];

  return (
    <main>

      {/* HERO */}
      <section className="page-hero fleet-hero">
        <div className="container">

          <span>OUR FLEET</span>

          <h1>
            Vehicles Built
            <br />
            <strong>To Keep Moving.</strong>
          </h1>

          <p>
            A dependable transportation fleet supporting
            efficient container movement for businesses and industries.
          </p>

        </div>
      </section>


      {/* INTRO */}
      <section className="section fleet-intro">

        <div className="container fleet-intro-grid">

          <div>
            <span className="section-label">
              OUR TRANSPORTATION FLEET
            </span>

            <h2>
              Ready For
              <br />
              <span>Container Movement.</span>
            </h2>
          </div>

          <div className="fleet-intro-content">

            <p className="fleet-lead">
              Tejas Transport operates a transportation fleet
              focused on the movement of shipping containers.
            </p>

            <p>
              Our vehicles support transportation requirements
              between ports, warehouses, factories, industrial
              locations and other destinations.
            </p>

            <p>
              With a focus on dependable operations and timely
              movement, our fleet is an important part of the
              transportation service we provide.
            </p>

          </div>

        </div>

      </section>


      {/* FLEET FEATURES */}
      <section className="section fleet-services">

        <div className="container">

          <div className="section-heading">

            <div>
              <span className="section-label">
                FLEET CAPABILITIES
              </span>

              <h2>
                Transportation
                <br />
                <span>Made Reliable.</span>
              </h2>
            </div>

            <p>
              Our fleet is focused on supporting dependable
              container transportation operations.
            </p>

          </div>


          <div className="fleet-grid">

            {fleet.map((item) => (
              <article
                className="fleet-card"
                key={item.number}
              >

                <div className="fleet-card-top">

                  <span>
                    {item.number}
                  </span>

                  <div className="fleet-icon">
                    {item.icon}
                  </div>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <div className="fleet-line"></div>

                <span className="fleet-status">
                  <FiCheckCircle />
                  Transportation Ready
                </span>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* FLEET STATS */}
      <section className="fleet-stats">

        <div className="container fleet-stats-grid">

          <div>
            <strong>100+</strong>
            <span>Trucks</span>
          </div>

          <div>
            <strong>5,000+</strong>
            <span>Containers Moved</span>
          </div>

          <div>
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>50+</strong>
            <span>Clients</span>
          </div>

        </div>

      </section>


      {/* FLEET OPERATIONS */}
      <section className="section fleet-operations">

        <div className="container fleet-operation-grid">

          <div>

            <span className="section-label">
              FLEET OPERATIONS
            </span>

            <h2>
              Focused On
              <br />
              <span>Every Journey.</span>
            </h2>

          </div>


          <div className="fleet-operation-points">

            <div>
              <FiCheckCircle />

              <div>
                <h3>Container Focused</h3>

                <p>
                  Transportation operations designed around
                  shipping container movement.
                </p>
              </div>
            </div>


            <div>
              <FiCheckCircle />

              <div>
                <h3>Reliable Vehicles</h3>

                <p>
                  Fleet availability supports dependable
                  transportation requirements.
                </p>
              </div>
            </div>


            <div>
              <FiCheckCircle />

              <div>
                <h3>Timely Movement</h3>

                <p>
                  Transportation is planned around required
                  pickup and delivery locations.
                </p>
              </div>
            </div>


            <div>
              <FiCheckCircle />

              <div>
                <h3>Professional Operations</h3>

                <p>
                  Responsible fleet operations remain an
                  important part of our service approach.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="fleet-cta">

        <div className="container fleet-cta-inner">

          <div>

            <span>
              NEED CONTAINER TRANSPORTATION?
            </span>

            <h2>
              Let's Move
              <br />
              Your Containers.
            </h2>

          </div>

          <a
            href="/contact"
            className="btn btn-light"
          >
            Contact Us
            <FiArrowRight />
          </a>

        </div>

      </section>

    </main>
  );
}

export default Fleet;