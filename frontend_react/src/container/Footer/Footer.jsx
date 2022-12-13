import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { validateEmail, Notify } from "../../utils";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [contact, setContact] = useState(null);

  const fetchContactSection = async () => {
    const contactQuery = '*[_type == "contact"][0]'; // a single document (an object is returned, not an array)

    const contactResponse = await client.fetch(contactQuery);
    setContact(contactResponse);
  };

  useEffect(() => {
    fetchContactSection();
  }, []);

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // If any field is missing
    if (!formData.name || !formData.email || !formData.message) {
      setIsLoading(false);
      return Notify("Please fill all the fields", "warn");
    }

    // Check email is valid
    if (validateEmail(formData.email) === false) {
      setIsLoading(false);
      return Notify("Email is not valid", "warn");
    }

    // Send Email using EmailJS
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        function (response) {
          setIsLoading(false);
          return setIsFormSubmitted(true);
        },
        function (error) {
          setIsLoading(false);
          return Notify("Some error occured", "error");
        }
      );
  };

  return (
    <>
      <h2 className="head-text">
        Take a <span>coffee</span> & <span>chat</span> with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a
            href={`mailto:${contact !== null ? contact.email : ""}`}
            className="p-text"
          >
            {contact !== null ? contact.email : ""}
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a
            href={`tel:${contact !== null ? contact.phoneNumber : ""}`}
            className="p-text"
          >
            {contact !== null ? contact.phoneNumber : ""}
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={formData.message}
              name="message"
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <button
            type="button"
            className="p-text"
            disabled={!isLoading ? false : true}
            onClick={handleSubmit}
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
