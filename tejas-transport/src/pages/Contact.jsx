import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiCheckCircle
} from "react-icons/fi";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError("");

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      pickup: formData.get("pickup"),
      delivery: formData.get("delivery"),
      container: formData.get("container"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const rawText = await response.text();
      let result = {};

      if (rawText) {
        try {
          result = JSON.parse(rawText);
        } catch {
          throw new Error(
            rawText.slice(0, 180) ||
              "Unable to send enquiry. Please try again."
          );
        }
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to send enquiry."
        );
      }

      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      console.error(err);

      setError(
        err.message ||
        "Unable to send enquiry. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main>

      {/* HERO */}
      <section className="page-hero contact-hero">
        <div className="container">
          <span>CONTACT US</span>

          <h1>
            Let's Move Your
            <br />
            <strong>Containers.</strong>
          </h1>

          <p>
            Have a transportation requirement?
            Get in touch with Tejas Transport.
          </p>
        </div>
      </section>


      {/* CONTACT INFORMATION */}
      <section className="section contact-main">

        <div className="container contact-grid">

          <div className="contact-information">

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              We're Ready
              <br />
              <span>To Help.</span>
            </h2>

            <p className="contact-lead">
              Tell us about your container transportation
              requirement and our team can discuss the
              suitable transportation solution with you.
            </p>


            <div className="contact-details">

              <a
                href="tel:+919725105062"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <FiPhone />
                </div>

                <div>
                  <span>CALL US</span>
                  <strong>+91 9725105062</strong>
                </div>
              </a>


              <a
                href="tel:+918178600098"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <FiPhone />
                </div>

                <div>
                  <span>ALTERNATE NUMBER</span>
                  <strong>+91 8178600098</strong>
                </div>
              </a>


              <a
                href="mailto:sujit@tejcontainercare.in"
                className="contact-detail"
              >
                <div className="contact-icon">
                  <FiMail />
                </div>

                <div>
                  <span>EMAIL</span>
                  <strong>
                    sujit@tejcontainercare.in
                  </strong>
                </div>
              </a>


              <div className="contact-detail">
                <div className="contact-icon">
                  <FiMapPin />
                </div>

                <div>
                  <span>OFFICE</span>
                  <strong>
                    DADRI, Gautam Buddha Nagar,
                    Uttar Pradesh - 203207
                  </strong>
                </div>
              </div>

            </div>

          </div>


          {/* FORM */}
          <div className="contact-form-wrapper">

            <div className="contact-form-heading">
              <span>TRANSPORTATION ENQUIRY</span>

              <h3>
                Tell Us What
                <br />
                You Need.
              </h3>
            </div>


            {submitted ? (

              <div className="form-success">

                <FiCheckCircle />

                <h3>Thank You!</h3>

                <p>
                  Your enquiry has been sent successfully.
                  Our team will contact you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                  className="form-reset"
                >
                  Submit Another Enquiry
                </button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <div className="form-group">
                    <label>YOUR NAME</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>


                  <div className="form-group">
                    <label>PHONE NUMBER</label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91"
                      required
                    />
                  </div>

                </div>


                <div className="form-group">
                  <label>EMAIL ADDRESS</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>


                <div className="form-row">

                  <div className="form-group">
                    <label>PICKUP LOCATION</label>

                    <input
                      type="text"
                      name="pickup"
                      placeholder="Pickup location"
                      required
                    />
                  </div>


                  <div className="form-group">
                    <label>DELIVERY LOCATION</label>

                    <input
                      type="text"
                      name="delivery"
                      placeholder="Delivery location"
                      required
                    />
                  </div>

                </div>


                <div className="form-group">
                  <label>CONTAINER REQUIREMENT</label>

                  <select
                    name="container"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select container type
                    </option>

                    <option value="20ft">
                      20 FT Container
                    </option>

                    <option value="40ft">
                      40 FT Container
                    </option>

                    <option value="multiple">
                      Multiple Containers
                    </option>

                    <option value="other">
                      Other Requirement
                    </option>
                  </select>
                </div>


                <div className="form-group">
                  <label>MESSAGE</label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your transportation requirement"
                  />
                </div>


                {error && (
                  <p className="form-error">
                    {error}
                  </p>
                )}


                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={sending}
                >
                  {sending
                    ? "Sending..."
                    : "Send Enquiry"
                  }

                  {!sending && <FiArrowRight />}
                </button>

              </form>

            )}

          </div>

        </div>

      </section>


      {/* QUICK CONTACT */}
      <section className="contact-strip">

        <div className="container contact-strip-grid">

          <div>
            <FiClock />

            <div>
              <strong>Transportation Support</strong>

              <span>
                Discuss your container movement requirement
              </span>
            </div>
          </div>


          <a href="tel:+919725105062">

            <FiPhone />

            <div>
              <strong>Call Tejas Transport</strong>
              <span>+91 9725105062</span>
            </div>

          </a>


          <a href="mailto:sujit@tejcontainercare.in">

            <FiMail />

            <div>
              <strong>Send An Email</strong>
              <span>
                sujit@tejcontainercare.in
              </span>
            </div>

          </a>

        </div>

      </section>


      {/* LOCATION */}
      <section className="section contact-location">

        <div className="container location-grid">

          <div>

            <span className="section-label">
              OUR LOCATION
            </span>

            <h2>
              Based In
              <br />
              <span>Dadri.</span>
            </h2>

            <p>
              Tejas Transport is based in Dadri,
              Gautam Buddha Nagar, Uttar Pradesh.
            </p>

            <div className="location-address">
              <FiMapPin />

              <span>
                DADRI,
                <br />
                Gautam Buddha Nagar,
                <br />
                Uttar Pradesh - 203207
              </span>
            </div>

          </div>


          <div className="map-placeholder">

            <FiMapPin />

            <span>TEJAS TRANSPORT</span>

            <strong>
              Dadri, Uttar Pradesh
            </strong>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Dadri%2C%20Gautam%20Buddha%20Nagar%2C%20Uttar%20Pradesh%20203207"
              target="_blank"
              rel="noreferrer"
            >
              Open Location
              <FiArrowRight />
            </a>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="contact-cta">

        <div className="container contact-cta-inner">

          <div>
            <span>
              CONTAINER TRANSPORTATION
            </span>

            <h2>
              Need A Reliable
              <br />
              Transport Partner?
            </h2>
          </div>

          <a
            href="tel:+919725105062"
            className="btn btn-light"
          >
            <FiPhone />
            Call Now
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;