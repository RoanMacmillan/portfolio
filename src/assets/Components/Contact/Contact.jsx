import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import Mail from "../../Images/icon-mail.svg";
import { Link } from "react-router-dom";
import ContactLink from "../ContactLink/ContactLink";
import useIntersectionObserver from "../userInterSectionObserver/useInterSectionObserver";
import axios from "axios";
import Modal from "../FormModal/modal";

const Contact = () => {
  const [formWrapperRef, formWrapperVisible] = useIntersectionObserver();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const validateName = (name) => {
    if (name.trim() === "") {
      return "*";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email.match(emailRegex)) {
      return "*";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (message.trim() === "") {
      return "*";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const messageError = validateMessage(message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      return;
    }

    const data = {
      name,
      email,
      message,
    };

    try {
      const response = await axios.post("/.netlify/functions/submitForm", data);

      if (response.status === 200) {
        console.log("Message sent successfully");
        setErrors({});
        setFormSubmitted(true);
        // setIsMessageSent(true);
        setShowModal(true); // Show the modal
        setMessage("");
        setModalVisible(true);
      } else {
        console.error("Error sending message");
        setErrors({ form: "Error sending message. Please try again later." });
      }
    } catch (error) {
      console.error("Error sending message", error);
      setErrors({ form: "Error sending message. Please try again later." });
    }
  };

  return (
    <div className={styles.contact}>
      <h1>
        Let's<br></br> <strong>Talk</strong>
      </h1>
      <div className={styles.headingLine}></div>

      <div className={styles.contactContainer}>
        <div className={styles.contactText}>
          <h2>Contact form</h2>
          <p className={styles.contactP}>
            Got a project in mind? Find my contact info below or feel free to
            fill out the form below with your questions.
          </p>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div
            ref={formWrapperRef}
            className={`${styles.formWrapper} ${
              formWrapperVisible ? "fadeInLoad" : "hidden"
            }`}
          >
            <div className={styles.formTop}>
              <div className={styles.formGroup}>
                <label htmlFor="name">
                  Name
                  {errors.name && (
                    <div className={styles.error}>{errors.name}</div>
                  )}
                </label>

                <input
                  className={`${styles.formInput} ${
                    errors.name
                      ? styles.inputError
                      : validateName(name) === ""
                      ? styles.validInput
                      : ""
                  }`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Din Djarin"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address{" "}
                  {errors.email && (
                    <div className={styles.error}>{errors.email}</div>
                  )}
                </label>

                <input
                  className={`${styles.formInput} ${
                    errors.email
                      ? styles.inputError
                      : validateEmail(email) === ""
                      ? styles.validInput
                      : ""
                  }`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">
                Message{" "}
                {errors.message && (
                  <div className={styles.error}>{errors.message}</div>
                )}
              </label>

              <textarea
                className={`${styles.formInput} ${
                  errors.message
                    ? styles.inputError
                    : message.trim() !== ""
                    ? styles.validInput
                    : ""
                }`}
                id="message"
                name="message"
                rows="4"
                placeholder="How can I help?"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>
            <div className={styles.tyContainer}>
              <button className={styles.submitBtn} type="submit">
                Send Now
              </button>
              {isMessageSent && (
                <div className={styles.successMessage}>
                  Message sent successfully!
                </div>
              )}
            </div>
          </div>
        </form>
        <div className={styles.contactDetails}>
          <img src={Mail} alt={Mail} className={styles.mailIcon}></img>

          <h4>roanmacmillan@hotmail.com</h4>

          <p>Send me a message and I will reach out as soon as possible.</p>
        </div>
      </div>
      {showModal && (
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      )}

      <ContactLink
        h3Text="View"
        strongText="Portfolio"
        linkText="Portfolio"
        linkTo="/"
      />
    </div>
  );
};

export default Contact;
