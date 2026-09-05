import {
  FiTruck,
  FiMapPin,
  FiClock,
  FiShield,
  FiPackage,
  FiNavigation,
  FiArrowRight,
  FiCheckCircle
} from "react-icons/fi";

function Services() {
  const services = [
    {
      number: "01",
      icon: <FiTruck />,
      title: "Container Transportation",
      text: "Reliable transportation of shipping containers between ports, warehouses, factories and required destinations."
    },
    {
      number: "02",
      icon: <FiMapPin />,
      title: "Port Transportation",
      text: "Efficient container movement from port locations to warehouses, industrial areas and customer destinations."
    },
    {
      number: "03",
      icon: <FiPackage />,
      title: "Import & Export Movement",
      text: "Transportation support for businesses requiring movement of import and export containers."
    },
    {
      number: "04",
      icon: <FiNavigation />,
      title: "Empty Container Movement",
      text: "Dependable movement of empty containers between required locations as part of transportation operations."
    },
    {
      number: "05",
      icon: <FiClock />,
      title: "Timely Transportation",
      text: "We focus on planned and efficient transportation to support smooth movement of containers."
    },
    {
      number: "06",
      icon: <FiShield />,
      title: "Safe & Responsible Movement",
      text: "Our operations focus on responsible handling and safe transportation throughout the journey."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Requirement",
      text: "Share your container transportation requirement with our team."
    },
    {
      number: "02",
      title: "Planning",
      text: "We understand the pickup, destination and transportation requirements."
    },
    {
      number: "03",
      title: "Movement",
      text: "The container is transported towards the required destination."
    },
    {
      number: "04",
      title: "Delivery",
      text: "Container movement is completed at the required delivery location."
    }
  ];

  return (
    <main>

      {/* PAGE HERO */}
      <section className="page-hero services-hero">
        <div className="container">
          <span>SERVICES</span>

          <h1>
            Transportation
            <br />
            <strong>That Moves Business.</strong>
          </h1>

          <p>
            Reliable container transportation solutions designed
            around safe, efficient and dependable movement.
          </p>
        </div>
      </section>


      {/* INTRO */}
      <section className="section services-intro">
        <div className="container services-intro-grid">

          <div>
            <span className="section-label">WHAT WE DO</span>

            <h2>
              Moving Containers
              <br />
              <span>With Confidence.</span>
            </h2>
          </div>

          <div className="services-intro-content">
            <p className="services-lead">
              Tejas Transport provides container transportation
              services for businesses requiring dependable
              movement of shipping containers.
            </p>

            <p>
              From port pickup to final destination, our focus is
              on organized transportation, responsible operations
              and timely movement.
            </p>

            <p>
              Our services are suitable for transportation between
              ports, warehouses, industrial locations and other
              required destinations.
            </p>
          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="section services-list">
        <div className="container">

          <div className="section-heading services-heading">
            <div>
              <span className="section-label">OUR SERVICES</span>

              <h2>
                Complete Container
                <br />
                <span>Transportation Solutions.</span>
              </h2>
            </div>

            <p>
              Flexible transportation support for different
              container movement requirements.
            </p>
          </div>


          <div className="services-grid">

            {services.map((service) => (
              <div className="service-detail-card" key={service.number}>

                <div className="service-detail-top">
                  <span>{service.number}</span>

                  <div className="service-detail-icon">
                    {service.icon}
                  </div>
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <div className="service-card-line"></div>

                <a href="/contact">
                  Discuss Requirement
                  <FiArrowRight />
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* OPERATING PROCESS */}
      <section className="section service-process">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-label">HOW WE WORK</span>

              <h2>
                Simple Process.
                <br />
                <span>Reliable Movement.</span>
              </h2>
            </div>

            <p>
              Our transportation process is focused on clear
              communication and organized container movement.
            </p>
          </div>


          <div className="process-grid">

            {process.map((item) => (
              <div className="process-card" key={item.number}>

                <span className="process-number">
                  {item.number}
                </span>

                <div className="process-arrow">
                  <FiArrowRight />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* WHY OUR SERVICES */}
      <section className="section service-benefits">
        <div className="container service-benefits-grid">

          <div className="service-benefits-title">
            <span className="section-label">WHY TEJAS TRANSPORT</span>

            <h2>
              Built Around
              <br />
              <span>Reliable Service.</span>
            </h2>

            <p>
              We understand that dependable transportation is an
              important part of keeping business operations moving.
            </p>
          </div>


          <div className="benefits-list">

            <div className="benefit-item">
              <FiCheckCircle />
              <div>
                <h3>Dependable Transportation</h3>
                <p>
                  Focused container transportation for business
                  and industrial requirements.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <FiCheckCircle />
              <div>
                <h3>Timely Movement</h3>
                <p>
                  Transportation planned around the required
                  pickup and delivery locations.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <FiCheckCircle />
              <div>
                <h3>Professional Approach</h3>
                <p>
                  Clear communication and responsible operations
                  throughout the transportation process.
                </p>
              </div>
            </div>

            <div className="benefit-item">
              <FiCheckCircle />
              <div>
                <h3>Flexible Solutions</h3>
                <p>
                  Transportation support adapted to different
                  container movement requirements.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* STATS */}
      <section className="services-stats">
        <div className="container services-stats-grid">

          <div className="services-stat">
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>

          <div className="services-stat">
            <strong>5,000+</strong>
            <span>Containers Moved</span>
          </div>

          <div className="services-stat">
            <strong>100+</strong>
            <span>Trucks</span>
          </div>

          <div className="services-stat">
            <strong>50+</strong>
            <span>Clients</span>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="service-cta">
        <div className="container service-cta-inner">

          <div>
            <span>CONTAINER TRANSPORTATION</span>

            <h2>
              Ready To Move
              <br />
              Your Containers?
            </h2>
          </div>

          <a href="/contact" className="btn btn-light">
            Get In Touch
            <FiArrowRight />
          </a>

        </div>
      </section>

    </main>
  );
}

export default Services;