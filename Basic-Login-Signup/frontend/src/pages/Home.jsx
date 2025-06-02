import { Link } from "react-router-dom";
import "../styles/home.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      {/* Home Section */}
      <section className="home__section1">
        <div className="content__container">
          <div className="home__titleSubheading">
            <div className="home__subheading">
              <h1 className="description">Welcome to</h1>
            </div>
            <div className="home__title">
              <h1 className="title">Hollow Knight Gallery</h1>
            </div>
          </div>
          <div className="home__buttons">
            <Link to="/about">
              <button type="button">About</button>
            </Link>
            <Link to="/contact">
              <button type="button">Contact</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="home__section2">
        <div className="content__container">
          <div className="home__gallery">
            <img src="../src/assets/pic1.gif" alt="pic1" />
            <img src="../src/assets/pic2.gif" alt="pic2" />
            <img src="../src/assets/pic3.gif" alt="pic3" />
            <img src="../src/assets/pic4.gif" alt="pic4" />
            <img src="../src/assets/pic5.gif" alt="pic5" />
            <img src="../src/assets/pic6.gif" alt="pic6" />
          </div>
        </div>
      </section>
    </>
  );
}
