import { Link } from "react-router-dom";
import "../styles/about.css";

export function About() {
  return (
    <>
      {/* About Section */}
      <section className="about__section1">
        <div className="content__container">
          <div className="about__titleSubheading">
            <div className="about__subheading">
              <h1 className="description">What is</h1>
            </div>
            <div className="about__title">
              <h1 className="title">Hollow Knight?</h1>
            </div>
          </div>
          <div className="about__buttons">
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Game Overview */}
      <section className="about__section2">
        <div className="content__container">
          <div className="about__gameOverview">
            <div className="about__gameOverviewTitle">
              <h1 className="title__gameOverview">Game Overview</h1>
            </div>
            <div className="about__gameOverviewDescription">
              <p className="description__gameOverview">
                Hollow Knight is an award-winning indie action-adventure game
                developed by Team Cherry, a small studio based in Australia.
                Released in 2017, it has captivated players with its challenging
                gameplay, hauntingly beautiful world, and deep story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Genre */}
      <section className="about__section3">
        <div className="content__container">
          <div className="about__genre">
            <div className="about__genreTitle">
              <h1 className="title__genre">Genre</h1>
            </div>
            <div className="about__image">
              <img
                className="img__genre"
                src="../src/assets/HK3.gif"
                alt="pic1"
              />
            </div>
            <div className="about__genreDescription">
              <p className="description__genre">
                Hollow Knight is a Metroidvania game—a subgenre of
                action-adventure that emphasizes exploration, backtracking, and
                ability-based progression. Players unlock new areas as they gain
                skills and tools, encouraging deep engagement with the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
