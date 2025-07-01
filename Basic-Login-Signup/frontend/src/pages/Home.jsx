import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { ImageModal } from "../components/ImageModal";

import pic1 from "../assets/pic1.gif";
import pic2 from "../assets/pic2.gif";
import pic3 from "../assets/pic3.gif";
import pic4 from "../assets/pic4.gif";
import pic5 from "../assets/pic5.gif";
import pic6 from "../assets/pic6.gif";

const images = [
  { src: pic1, alt: "pic1" },
  { src: pic2, alt: "pic2" },
  { src: pic3, alt: "pic3" },
  { src: pic4, alt: "pic4" },
  { src: pic5, alt: "pic5" },
  { src: pic6, alt: "pic6" },
];

export function Home() {
  const [modalImg, setModalImg] = useState(null);
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
            {/* map through images */}
            {images.map((img, idx) => (
              <button
                key={idx}
                className="gallery-img-btn"
                onClick={() => setModalImg(img)}
                style={{
                  border: "none",
                  background: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <img src={img.src} alt={img.alt} />
              </button>
            ))}
          </div>
        </div>
      </section>
      <ImageModal
        src={modalImg?.src}
        alt={modalImg?.alt}
        onClose={() => setModalImg(null)}
      />
    </>
  );
}
