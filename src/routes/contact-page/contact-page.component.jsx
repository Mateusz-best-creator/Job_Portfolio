import React from "react";

import './contact-page.styles.scss';

const ContactPage = () => {
    return (
        <div className='contact-container'>
            <div className='contact-data'>
                <h1>Let's keep in touch!</h1>
                <div className='contact-socials'>
                    <a href='https://github.com/Mateusz-best-creator?tab=repositories' target='_blank'><i className="fab fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/mateusz-wieczorek-b9b21925a/' target='_blank'><i className="fab fa-linkedin"></i></a>
                    <a href='https://www.facebook.com/mateusz.wieczorek.5264382' target='_blank'><i className="fab fa-facebook"></i></a>
                </div>
                <div className='contact-phone-number'>
                    <div className='email'>
                        <span><i className="fas fa-phone"></i>&nbsp;&nbsp;&nbsp; 731 357 824</span>
                    </div>
                    <div className='phone'>
                    <span><i className="fas fa-envelope"></i>&nbsp;&nbsp;&nbsp; szachmat2004@gmail.com</span>
                        
                    </div>
                </div>
            </div>
            <main className="pa4 black-80">
                <form className="measure center" action="https://formsubmit.co/69268a0f6654fa507867ce0fe4a62e77" method="POST" >
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Your Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="message">Message</label>
                        <textarea className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="message" name="message"  id="message" />
                    </div>
                    </fieldset>
                    <button type='submit' className="contact-button">Send Message</button>
                </form>
            </main>
        </div>
    )
}

export default ContactPage;