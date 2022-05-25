import React from 'react';

function Contact() {
    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <form
                name="contact"
                method="post"
                data-netlify="true"
                onSubmit="submit"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact v2" />

                <div hidden>
                    <input name="bot-field" />
                </div>

                <div>
                    <label>Name<br />
                        <input type="text" name="full-name" />
                    </label>
                </div>

                <div>
                    <label htmlFor="email" >Email</label><br />
                    <input id="email" type="email" name="email" />
                </div>

                <div>
                    <label>Any Comments?<br />
                        <textarea name="comments"></textarea>
                    </label>
                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
export default Contact;
