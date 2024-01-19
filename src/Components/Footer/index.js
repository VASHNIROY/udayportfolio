import pingme from "../images/uil_messageping.png";
import linkedin from "../images/ant-design_linkedin-filledlinkeding.png";
import github from "../images/uiw_githubgihub.png";
import behance from "../images/ant-design_behance-square-filledbehance.png";
import youtube from "../images/ant-design_youtube-filledyoutube.png";
import instagram from "../images/gg_instagraminsta.png";
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
      <div className="footer-tag-line-container">
        <h3 style={{ lineHeight: "0" }}>
          "If you require additional insights into my portfolio or wish to
          explore more of my
        </h3>{" "}
        <h3>
          projects, please feel free to reach out, and I'll be happy to provide
          further information."
        </h3>
        <h1>😉</h1>
      </div>
      <div className="social-icons-main-container">
        <div className="social-icons-mini-container">
          <div className="social-icons-cards-container">
            <div className="social-icons-cards-mini-container">
              <div className="social-icons-cards-hr-main-container">
                <div className="social-icons-card-container">
                  <img src={linkedin} alt="linkedin" />
                  <p className="social-icons-card-name">Linkedin</p>
                </div>

                <div className="social-icons-card-container">
                  <img src={behance} alt="behance" />
                  <p className="social-icons-card-name">Behance</p>
                </div>

                <div className="social-icons-card-container">
                  <img src={instagram} alt="instagram" />
                  <p className="social-icons-card-name">Instagram</p>
                </div>

                <div className="social-icons-card-container">
                  <img src={youtube} alt="youtube" />
                  <p className="social-icons-card-name"> Youtube</p>
                </div>
                <div className="social-icons-card-container">
                  <img src={github} alt="github" />
                  <p className="social-icons-card-name">Github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
