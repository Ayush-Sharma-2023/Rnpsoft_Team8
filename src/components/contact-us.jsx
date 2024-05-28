
import './contact-us.module.css';

import Image from '../images/chatai.png';
function Contact() {
  return (
    <>
      <div className="page-container">
        <div className="header">
          <h1>Contact Us</h1>
          <p className="intro-text">Got a question? Want to give feedback? We're just a message away.</p>
        </div>
        <div className="container">
          <div className="left-section">
            <h2>We'd love to hear from you!</h2>
            <p>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
            <form>
              <div className="form-group">
                <input type="text" id="last-name" name="last-name" placeholder="Last Name" required />
                <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
              </div>
              <input type="email" id="email" name="email" placeholder="Email" required />
              <textarea id="message" name="message" placeholder="Message" required></textarea>
              <button type="submit">Send it</button>
            </form>
            <p className="response-time">We aim to respond within 24 hours</p>
          </div>
          <div className="right-section">
          <img src={Image} alt="Chat AI" />

            
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
