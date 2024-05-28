import Image from "next/image";
import React, { useState, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import sendMessageImg from "../public/img/contact-me.svg";
// import axios from "axios";
import emailjs from "@emailjs/browser";
import Head from "next/head";

const CustomizeAlert = ({ messge }) => {
  return <div className="p-2 mb-4 bg-green-300 rounded">{messge}</div>;
};

const Contact = () => {
  const form = useRef();
  // const [message, setMessage] = useState("");
  // const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");

  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    // setLoading(true);

    emailjs
      .sendForm(
        "service_3x3yoer",
        "template_16o4827",
        form.current,
        "x5Pm5_4b8Cj91CbYb"
      )
      .then(
        (result) => {
          setMessageAlert("Send Successful!");
          // setEmail("");
          // setMessage("");
          setSuccess(true);
          // setLoading(false);
          setTimeout(() => setSuccess(false), 3000);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Contact with Vitamindev</title>
        <meta
          name="Contact with Vitamindev"
          content="Contact with Vitamindev"
        ></meta>
      </Head>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <div className="container mx-auto section" data-aos="fade-up">
          <div className="send-me">
            <div className="mb-20">
              <div className="text-4xl font-bold">Contact me</div>
              <div className="w-40 h-1 bg-orange-300 rounded"></div>
            </div>
            <div className="flex justify-center send-me__img">
              <Image src={sendMessageImg} alt="send message img" />
            </div>
            <div className="flex justify-center">
              <form ref={form} onSubmit={sendEmail} className="w-full">
                <div className="send-me__form__input">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Your Name ..."
                  />
                </div>
                <div className="send-me__form__input">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Your Email ..."
                  />
                </div>
                <div className="send-me__form__input">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your message ..."
                  />
                </div>
                {error && (
                  <h2 className="mb-4 text-red-500">
                    Email phải hợp lệ và message không được để trống !
                  </h2>
                )}

                {success && <CustomizeAlert messge={messageAlert} />}
                <input
                  type="submit"
                  value="Send Message"
                  className="p-2 text-white bg-orange-400 rounded cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
