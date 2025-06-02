import { Link } from "react-router-dom";
import "../styles/contact.css";

export function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section className="contact__section1">
        <div className="content__container">
          <div className="contact__titleSubheading">
            <div className="contact__title">
              <h1 className="title">Contact Us.</h1>
            </div>
            <div className="contact__subheading">
              <h1 className="description">
                Connect with Hollow Knight Communities!
              </h1>
            </div>
          </div>

          <div className="icons">
            {/* Steam Community */}
            <a
              href="https://steamcommunity.com/app/367520"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/steam.png"
                alt="Steam"
                width="100"
                height="100"
              />
            </a>

            {/* Discord Server */}
            <a
              href="https://discord.com/invite/hollowknight"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../src/assets/discord.png"
                alt="Discord"
                width="120"
                height="100"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
