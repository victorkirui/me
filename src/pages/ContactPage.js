import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";

import Title from "../components/Title";
import ContactRightItem from "../components/ContactRightItem";

import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9u42wva",
        "template_jcrzwmk",
        form.current,
        "HUXEr2qPeISPtpLmu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    setSuccess(true);
  };

  return (
    <MainLayout>
      <ContactWrapperMobile>
        <Title title="Contact" span="Contact" />
        <ContactContainer>
          <InnerLayout>
            <div className="contact-title">
              <h4>Get in Touch</h4>
            </div>
            <div className="Contact-section">
              <div className="left-content">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-field">
                    <label htmlFor="your_name" id="your_name">
                      Enter your name*
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      name="your_name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="your_email" id="your_email">
                      Enter your email*
                    </label>
                    <input
                      type="email"
                      id="your_email"
                      name="your_email"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="your_subject" id="your_subject">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="your_subject"
                      name="your_subject"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="your_message">Message*</label>
                    <textarea
                      type="textarea"
                      rows="5"
                      cols="30"
                      id="your_message"
                      name="your_message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-field">
                    <input
                      type="submit"
                      value="Send Message"
                      className="sumbmit-btn"
                    />
                  </div>
                </form>
                {success && (
                  <p className="successMessage">
                    Thank you for reaching out. Your message has been sent
                    successfully. I will get back to you shortly!
                  </p>
                )}
              </div>
              <div className="right-content">
                <ContactRightItem
                  icon={<BsTelephoneForward />}
                  title="Phone"
                  contact1="+254 712 973 969"
                  contact2=""
                />
                <ContactRightItem
                  icon={<AiOutlineWhatsApp />}
                  title="WhatsApp"
                  contact1="+254 712 973 969"
                  contact2=""
                />
                <ContactRightItem
                  icon={<AiOutlineMail />}
                  title="Email"
                  contact1="vkkiprop@gmail.com"
                  contact2=""
                />
              </div>
            </div>
          </InnerLayout>
        </ContactContainer>
      </ContactWrapperMobile>
    </MainLayout>
  );
}
const ContactWrapperMobile = styled.div`
  @media screen and (max-width: 768px) {
    max-width: 500px;
    margin: auto;
  }
`;

const ContactContainer = styled.section`
  .contact-title {
    h4 {
      color: var(--white-color);
      font-size: 1.8rem;
      font-weight: 300;
    }
  }
  .Contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;
    .successMessage {
      padding: 0.5rem;
      border-width: 5px;
      border-style: double;
      border-color: var(--primary-color);
    }
    form {
      width: 100%;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .form-field {
      width: 100%;
      position: relative;
      margin-bottom: 2rem;
      label {
        position: absolute;
        left: 10px;
        top: -16px;
        display: inline-block;
        background-color: var(--background-dark-color);
        padding: 0 0.5rem;
        color: inherit;
        font-size: 0.9rem;
      }
      input {
        border: 1px solid var(--border-color);
        width: 100%;
        background: transparent;
        outline: none;
        height: 50px;
        padding: 0.8rem 1rem;
        font-size: 1rem;
        color: inherit;
        &:focus,
        &:active {
          background: transparent;
        }
      }
      textarea {
        border: 1px solid var(--border-color);
        width: 100%;
        background: transparent;
        color: inherit;
        resize: none;
        outline: none;
        padding: 0.8rem 1rem;
      }
      .sumbmit-btn {
        background: var(--primary-color);
        padding: 0.7rem 2rem;
        color: var(--btn-color);
        cursor: pointer;
        text-transform: uppercase;
        display: block;
        position: relative;
        font-size: 0.9rem;

        &::after {
          content: "";
          width: 0;
          height: 0.2rem;
          position: absolute;
          left: 0;
          bottom: 0;
          transition: all 0.4s ease-in-out;
          opacity: 0.7;
        }
        &:hover::after {
          width: 100%;
          background: var(--white-color);
        }
      }
    }
  }
`;

export default ContactPage;
