import { FooterMainStyle } from "../../styles/FooterMainStyle";
import me from "../../assets/me.png";
import GithubIcon from "../../assets/GithubIcon.svg";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import EmailIcon from "../../assets/EmailIcon.svg";
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactModalContext";

function FooterMain() {
  const { setIsContactOpen } = useContext(ContactContext);

  function openModal() {
    setIsContactOpen(true);
  }

  return (
    <FooterMainStyle>
      <div className="footer-content-centering-container">
        <div className="picture-and-about-me-container">
          <img src={me} alt="" />
          <div className="about-me-container">
            <p className="about-me-paragraph">
              Hello, I’m Vojin, a web developer living in Belgrade, Serbia. I
              have a strong interest in web design and development, especially
              using React. I have built many websites using this framework, both
              for myself and for clients. I like to keep up with the latest
              trends and best practices in web development. I’m also a fan of
              clean and minimalist design.
            </p>
            <button className="hire-button pill-button" onClick={openModal}>
              Available for hiring
            </button>
          </div>
        </div>
        <div className="social-media-buttons">
          <button className="pill-button">
            <a href="https://github.com/VojinPopovic">
              <div className="icon-container">
                <img src={GithubIcon} alt="" />
              </div>
              <p className="button-name">Github</p>
            </a>
          </button>
          <button className="pill-button">
            <a href="https://www.instagram.com/vojaa_a/?hl=en">
              <div className="icon-container">
                <img src={InstagramIcon} alt="" />
              </div>
              <p className="button-name">Instagram</p>
            </a>
          </button>
          <button className="pill-button">
            <a href="mailto:vojinpopovic3@gmail.com">
              <div className="icon-container">
                <img src={EmailIcon} alt="" />
              </div>
              <p className="button-name">Email</p>
            </a>
          </button>
        </div>
      </div>
    </FooterMainStyle>
  );
}

export default FooterMain;
