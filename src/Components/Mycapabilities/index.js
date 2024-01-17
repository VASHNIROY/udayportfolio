import "./index.css";
import DesignLogo from "../images/iconoir_design-nib-solid32.png";
import UXLogo from "../images/tabler_ux-circleux.png";
import ToolsLogo from "../images/fluent_window-dev-tools-20-filledtools.png";

const Mycapabilities = () => {
  return (
    <div className="my-capabilities-main-container">
      <div className="my-capabilities-mini-container">
        <h1>My Capabilities</h1>
        <div className="my-capabilities-cards-container">
          <div className="my-capabilities-card-container">
            <div className="my-capabilities-card-count-container">
              <img src={UXLogo} />
            </div>
            <h2 className="my-capabilities-card-heading">User Experience</h2>
            <ul className="my-capabilities-card-para">
              <li>Research</li>
              <li>ProtoTyping</li>
              <li>WireFraming</li>
            </ul>
          </div>
          <div className="my-capabilities-card-container">
            <div className="my-capabilities-card-count-container">
              <img src={DesignLogo} className="my-capabilities-card-logo" />
            </div>

            <h2 className="my-capabilities-card-heading">Design</h2>
            <ul className="my-capabilities-card-para">
              <li>Mobile Application</li>

              <li>Website/Landing Pages</li>

              <li>Posters</li>

              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="my-capabilities-card-container">
            <div className="my-capabilities-card-count-container">
              <img src={ToolsLogo} />
            </div>

            <h2 className="my-capabilities-card-heading">Tools & Dev</h2>
            <ul className="my-capabilities-card-para">
              <li>Framer </li>

              <li>Web Development</li>

              <li>Canva</li>

              <li>Landing Pages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycapabilities;
