import React from 'react';

function Contact() {
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <div data-netlify-recaptcha="true"></div>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}
export default Contact;
