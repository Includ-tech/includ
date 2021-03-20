import React, { useState } from "react";
import Head from "next/head";
import * as styles from "../styles/contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Input from "../components/Input";
import axios from "axios";

export default function About() {
  const { contact, bannerHeading, form, cards, card, addressCard } = styles;
  const data = {
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },

    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your Email",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    phone: {
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "Your Phone Number",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    subject: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Subject",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    message: {
      elementType: "textarea",
      elementConfig: {
        type: "textarea",
        placeholder: "E.g.: Your idea, timeline, budget.",
      },
      value: "",
      validation: {
        required: false,
      },
      valid: false,
      touched: false,
    },
  };

  const [orderForm, setOrderForm] = useState(data);
  const [formIsValid, setFormIsValid] = useState(false);
  const formElementsArray = [];
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    });
  }

  const axiosInstance = axios.create({
    baseURL: "https://includ-61b8a.firebaseio.com/",
  });
  const orderHandler = (event) => {
    event.preventDefault();
    //     alert("continue");

    const formData = {};
    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    }
    console.log("formData", formData);
    axiosInstance
      .post("/inquiries.json", formData)
      .then((response) => {
        console.log("success", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = { ...orderForm };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    setOrderForm(updatedOrderForm);
    setFormIsValid(formIsValid);
  };

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
          Schedule a free consultation by filling the form below.
          </p>
        </div>
        <hr />
        <div style={{ paddingBottom: "2rem" }}>
          <h4>Tell us about yourself</h4>
          <span>By filling in the form, you agree to our Privacy Policy.</span>
        </div>
        {/* <form>
          <div className={form}>
            <div>
              <h6>FULL NAME</h6>
              <input type="text" minLength="3" maxLength="50" required />
            </div>
            <div>
              <h6>EMAIL ADDRESS</h6>
              <input type="email" maxLength="50" required />
            </div>
          </div>

          <div className={form}>
            <div>
              <h6>MOBILE NO</h6>
              <input type="number" minLength="6" maxLength="20" required />
            </div>
            <div>
              <h6>SUBJECT</h6>
              <input type="email" minLength="10" maxLength="100" required />
            </div>
          </div>
          <hr />
          <div style={{ paddingTop: "2rem" }}>
            <h4>How can we help?</h4>
            <span>E.g.: Your idea, timeline, budget.</span>
          </div>
          <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            <h6>PROJECT DESCRIPTION</h6>
            <textarea maxLength="200"></textarea>
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
        </form> */}
        <form onSubmit={orderHandler}>
          {formElementsArray.map((formElement) => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) => inputChangedHandler(event, formElement.id)}
            />
          ))}
          <button
            className="linkButton"
            disabled={!formIsValid}
            onClick={orderHandler}
          >
            Send
          </button>
        </form>
        <div className={cards}>
          <div className={card}>
            <span>NEW BUSINESS</span>
            <h4 className="pt-3">Hinal Shah</h4>
            <div>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <h4 className="d-inline ml-2">
                <a href="tel:9664500956" className="text-white">
                  +919664500956
                </a>
              </h4>
            </div>
            <a
              href="https://www.linkedin.com/in/shah-hinal/"
              className="text-white"
              target="_blank"
            >
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
                <a href="tel:9773504437" className="text-white">
                  +919773504437
                </a>
              </h4>
            </div>
            <a
              href="https://www.linkedin.com/in/thakkar-dipesh/"
              className="text-white"
              target="_blank"
            >
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
                Ghatkopar(W), Mumbai-86
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
