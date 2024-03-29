'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';

// Email JS
import emailjs from '@emailjs/browser';

// Static image
import { images } from '@/constants';

// Component Wrapper
import { AppWrap, MotionWrap } from '@/wrapper';

// Utils
import { validateEmail, Notify } from '@/utils';

// Sanity Client
import { client, urlFor } from '@/sanity-client/client';

// Type
import { Contact, ContactForm } from '@/models/Portfolio.type';

// Style
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [contact, setContact] = useState<Contact | null>(null);

  const fetchContactSection = async () => {

    // A single document (an object is returned, not an array)
    const contactQuery: string = `*[_type == "contact"][0]{
      email,
      emailLogo,
      phoneNumber,
      phoneLogo
    }`;

    const contactResponse = await client.fetch<Contact>(contactQuery);

    setContact(contactResponse);
  };

  useEffect(() => {
    fetchContactSection();
  }, []);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // If any field is missing
    if (!formData.name || !formData.email || !formData.message) {
      setIsLoading(false);
      Notify('Please fill all the fields', 'error');
      return;
    }

    // Check email is valid
    if (validateEmail(formData.email) === false) {
      setIsLoading(false);
      Notify('Email is not valid', 'error');
      return;
    }

    // Send Email using EmailJS
    try {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
          formData,
          process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string
        )
        .then(
          function () {
            setIsLoading(false);
            setIsFormSubmitted(true);
            Notify('Form is successfully submitted', 'success');
            return;
          },
          function () {
            setIsLoading(false);
            Notify('Some error occured', 'error');
            return;
          }
        );
    } catch (error) {
      setIsLoading(false);
      Notify('Some error occured', 'error');
      return;
    }
  };

  return (
    <>
      <h2 className="head-text">
        Take a <span>coffee</span> & <span>chat</span> with me
      </h2>

      {/* Display contact cards when data is fetched */}
      {contact !== null && <div className="app__footer-cards">
        <div className="app__footer-card ">
          <Image width={100} height={100} src={urlFor(contact.emailLogo)} alt="email logo" />
          <a
            href={`mailto:${contact.email}`}
            className="p-text-dark"
          >
            {contact.email}
          </a>
        </div>
        <div className="app__footer-card">
          <Image width={100} height={100} src={urlFor(contact.phoneLogo)} alt="phone logo" />
          <a
            href={`tel:${contact.phoneNumber}`}
            className="p-text-dark"
          >
            {contact.phoneNumber}
          </a>
        </div>
      </div>}

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              autoComplete="off"
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
              autoComplete="off"
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
