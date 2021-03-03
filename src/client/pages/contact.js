import Head from "next/head";
import * as styles from "../styles/contact.module.scss";
import PreFooter from "../components/PreFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const { contact, bannerHeading, form, cards, card, addressCard } = styles;
  return (
    <div className={contact}>
      <Head>
        <title>Contact - Includ</title>
        <meta
          name="description"
          content="Providing website development, web app development, hybrid app development and web designing services"
        />
        <meta
          name="keywords"
          content="contact, contact us, Includ, website, web, website development, web development, app development, hybrid app development, mobile app development, web designing, web developer"
        />
        <meta name="author" content="Includ" />
      </Head>
      <div>
        <div className={bannerHeading}>
          <h3>
            We can help you turn your idea into reality, take over your existing
            project, or extend your current development team.
          </h3>
        </div>
        <div>
          <p>
            Schedule a free consultation at <a>hinal@includ.in</a> , or fill out
            the form and we will follow up with you shortly.
          </p>
        </div>
        <hr />
        <div style={{ paddingBottom: "2rem" }}>
          <h4>Tell us about yourself</h4>
          <span>By filling in the form, you agree to our Privacy Policy.</span>
        </div>
        <div className={form}>
          <div>
            <h6>FULL NAME</h6>
            <input type="text" />
          </div>
          <div>
            <h6>EMAIL ADDRESS</h6>
            <input type="email" />
          </div>
        </div>

        <div className={form}>
          <div>
            <h6>MOBILE NO</h6>
            <input type="text" />
          </div>
          <div>
            <h6>SUBJECT</h6>
            <input type="email" />
          </div>
        </div>
        <hr />
        <div style={{ paddingTop: "2rem" }}>
          <h4>How can we help?</h4>
          <span>E.g.: Your idea, timeline, budget.</span>
        </div>
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <h6>PROJECT DESCRIPTION</h6>
          <textarea></textarea>
          <div className="d-flex">
            <input
              type="checkbox"
              style={{ marginTop: "0.2rem", marginRight: "1rem" }}
            />
            <label style={{ fontSize: "1rem" }}>
              {" "}
              Keep me up-to-date on the latest web development trends and TMS
              special offers
            </label>
          </div>
        </div>
        <div
          className="text-center d-flex justify-content-center"
          style={{ paddingBottom: "3rem" }}
        >
          <h4>
            <a href="./" className="linkButton">
              Send Request
            </a>
          </h4>
        </div>
        <div className={cards}>
          <div className={card}>
            <span>NEW BUSINESS</span>
            <h4 className="pt-3">Hinal Shah</h4>
            <div>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <h4 className="d-inline ml-2">
                <a href="tel:9664500956" className="text-white">+919664500956</a>
              </h4>
            </div>
            <a href="https://www.linkedin.com/in/shah-hinal/" className="text-white" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            {/* <div className="pt-2">
              <img src="/assets/images/icons/envelope-solid.svg" />
              <h4 className="d-inline ml-2">kdkfk@gmail.com</h4>
            </div> */}
          </div>
          <div className={card}>
            <span>NEW BUSINESS</span>
            <h4 className="pt-3">Dipesh Thakkar</h4>
            <div>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <h4 className="d-inline ml-2">
                <a href="tel:9773504437" className="text-white">+919773504437</a>
              </h4>
            </div>
            <a href="https://www.linkedin.com/in/thakkar-dipesh/" className="text-white" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            {/* <div className="pt-2">
              <img src="/assets/images/icons/envelope-solid.svg" />
              <h4 className="d-inline ml-2">kdkfk@gmail.com</h4>
            </div> */}
          </div>
        </div>
        <div className={addressCard}>
          <div>
            <h5>Address</h5>
            <div className="d-flex justify-content-center">
              <address>
                9, Raj Rajeshwari apt., Narayan Nagar, L.B.S. marg,
                Ghatkopar(E), Mumbai-86
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
