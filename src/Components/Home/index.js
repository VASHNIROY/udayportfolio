import Carousel from "../Carousel";
import FollowedStrategy from "../FollowedStrategy";
import Footer from "../Footer";
import Mycapabilities from "../Mycapabilities";
import Myworks from "../Myworks";
import SatisfiedClients from "../SatisfiedClients";
import { Typewriter } from "react-simple-typewriter";

import "./index.css";

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-mini-container" id="home">
        <h5 className="home-hello-heading"> Hello 🤝</h5>
        <h5 className="home-name-heading">I'm Uday Kiran</h5>
        <h2 className="home-passionate-heading">
          Passionate UI/UX Designer and Front-End Developer
        </h2>
        <h2>
          <span style={{ color: "#00FFA3" }}>I Can Design</span>
          {"              "}

          <span style={{ color: "#FFF500" }}>
            <Typewriter
              words={[
                "Mobile Appication",
                "Branding",
                "Graphic Design",
                "Website/Landing Page",
                "Posters",
                "Wireframe",
                "Prototyping",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
      </div>
      <Myworks />
      <hr className="horizontal-line" />
      <Carousel />
      <hr className="horizontal-line" />
      <FollowedStrategy />
      <Mycapabilities />
      <SatisfiedClients />
    </div>
  );
};

export default Home;
