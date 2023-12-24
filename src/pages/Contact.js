import { useEffect } from "react";
import { ContactFormStyle } from "../styles/ContactFormStyle";
import { motion, AnimatePresence } from "framer-motion";

function Contact(props) {
  useEffect(() => {
    let nav = document.querySelector(".nav-main");
    props.isContactOpen
      ? (nav.style.display = "none")
      : (nav.style.display = "flex");
  }, [props.isContactOpen]);

  return (
    <AnimatePresence>
      {props.isContactOpen ? (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ContactFormStyle>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="e0199f24-d53d-4c1a-a455-e0bfb4c1e7c1"
              ></input>
              <div className="form-inner">
                <h1>
                  <span>Say</span> Hello!
                </h1>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Username"
                />
                <input type="email" name="email" required placeholder="Email" />
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Message..."
                ></textarea>
              </div>
              <div className="form-buttons">
                <button
                  className="close-modal pill-button"
                  onClick={(e) => {
                    props.setIsContactOpen(false);
                    e.preventDefault();
                  }}
                >
                  Close
                </button>
                <button type="submit" className="pill-button">
                  Submit
                </button>
              </div>
            </form>
          </ContactFormStyle>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}

export default Contact;
