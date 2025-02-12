// React Imports
import React from "react";

// Style imports
import "../styles/ContactUs.css";

export const ContactUs = () => {
  return (
    <>
      <main className="AllContent">
        <form className="contactUsForm">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Type your name"
            className="name"
            name="name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Type your email"
            className="email"
            name="email"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="Message"
            className="message"
            placeholder="Type your message"
          ></textarea>
          <input type="submit" className="sendMessage" value={"Send"} />
        </form>
      </main>
    </>
  );
};
