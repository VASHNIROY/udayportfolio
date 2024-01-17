import pingme from "../images/uil_messageping.png";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-ping-me-btn-main-container">
        <h2 className="footer-ping-me-btn-main-container-heading">
          Can I contribute to your project with my expertise ?
        </h2>
        <button className="pingme-btn-container">
          Ping Me <img alt="pingme" src={pingme} />
        </button>
      </div>
      <div>
        "If you require additional insights into my portfolio or wish to explore
        more of my projects, please feel free to reach out, and I'll be happy to
        provide further information." 😉
      </div>
    </div>
  );
};
export default Footer;
