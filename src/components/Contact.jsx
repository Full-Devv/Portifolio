import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
                "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
                form.current,
                "YOUR_USER_ID" // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
