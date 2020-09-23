import React, { useState } from "react";
import hero from "../hero.svg";
import { Link, useHistory } from "react-router-dom";

const Main = () => {
  const [joined, setJoined] = useState("");
  const history = useHistory();

  const join = (e) => {
    e.preventDefault();
    if (joined !== "") {
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      history.push(`/thanks/${joined}`, date);
    }
  };

  return (
    <React.Fragment>
      <header>
        <img src={hero} alt="hero" />
        <div>
          <h1>
            We build &amp; design <br /> web applications.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/contact">Get In Touch</Link>
        </div>
      </header>
      <main>
        <section className="services">
          <h2>Why we should work together?</h2>
          <div className="service-container">
            <div className="service-card service-one"></div>
            <div className="service-description">
              <h3>SEO Friendly Apps.</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <div className="service-container">
            <div className="service-card service-two"></div>
            <div className="service-description">
              <h3>Clear &amp; Optimized Code.</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <div className="service-container">
            <div className="service-card service-three"></div>
            <div className="service-description">
              <h3>Support 24 Hours.</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Join our newletter to get the latest trends.</h2>
          <form className="newletter" onSubmit={join}>
            <input
              type="email"
              placeholder="Your email goes here"
              onChange={(e) => setJoined(e.target.value)}
            />
            <input type="submit" value="Join Now!" />
          </form>
        </section>
      </main>
    </React.Fragment>
  );
};
export default Main;
