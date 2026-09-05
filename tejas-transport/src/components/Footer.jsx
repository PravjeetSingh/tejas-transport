import { Link } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUpRight
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">

              <div className="brand-mark">
                T
              </div>

              <div className="brand-text">
                <strong>TEJAS</strong>
                <span>TRANSPORT</span>
              </div>

            </Link>

            <p>
              Reliable container transportation solutions
              focused on safe, efficient and timely movement
              of shipping containers.
            </p>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-links">

            <h4>QUICK LINKS</h4>

            <Link to="/">
              Home
              <FiArrowUpRight />
            </Link>

            <Link to="/about">
              About Us
              <FiArrowUpRight />
            </Link>

            <Link to="/services">
              Services
              <FiArrowUpRight />
            </Link>

            <Link to="/fleet">
              Fleet
              <FiArrowUpRight />
            </Link>

            <Link to="/contact">
              Contact
              <FiArrowUpRight />
            </Link>

          </div>


          {/* SERVICES */}
          <div className="footer-links">

            <h4>SERVICES</h4>

            <Link to="/services">
              Container Transportation
            </Link>

            <Link to="/services">
              Port Transportation
            </Link>

            <Link to="/services">
              Import & Export Movement
            </Link>

            <Link to="/services">
              Empty Container Movement
            </Link>

            <Link to="/services">
              Industrial Transportation
            </Link>

          </div>


          {/* CONTACT */}
          <div className="footer-contact">

            <h4>CONTACT</h4>

            <a href="tel:+919725105062">
              <FiPhone />
              <span>+91 9725105062</span>
            </a>

            <a href="tel:+918178600098">
              <FiPhone />
              <span>+91 8178600098</span>
            </a>

            <a href="mailto:sujit@tejcontainercare.in">
              <FiMail />
              <span>sujit@tejcontainercare.in</span>
            </a>

            <div className="footer-address">
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

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Tejas Transport.
            All Rights Reserved.
          </span>

          <span>
            Container Transportation & Logistics
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;