import Carousel from "../Carousel";
import Myworks from "../Myworks";
import "./index.css";

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-mini-container">
        <h5 style={{ margin: "0" }}>Hello</h5>
        <h5 style={{ margin: "0" }}>I'm Uday Kiran</h5>
        <h2 style={{ textAlign: "start" }}>
          Passionate UI/UX Designer and Front-End Developer
        </h2>
        <h2>
          <span style={{ color: "#00FFA3" }}>I Can Design</span>
          {"              "}
          <span style={{ color: "#FFF500" }}>Mobile Appication</span>
        </h2>
      </div>
      <Myworks />
      <hr className="horizontal-line" />
      <Carousel />
    </div>
  );
};

export default Home;
