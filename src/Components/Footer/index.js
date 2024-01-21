import pingme from "../images/uil_messageping.png";
import linkedin from "../images/ant-design_linkedin-filledlinkeding.png";
import github from "../images/uiw_githubgihub.png";
import behance from "../images/ant-design_behance-square-filledbehance.png";
import youtube from "../images/ant-design_youtube-filledyoutube.png";
import instagram from "../images/gg_instagraminsta.png";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-main-container" id="contact">
      <div className="footer-ping-me-btn-main-container">
        <h2 className="footer-ping-me-btn-main-container-heading">
          Can I contribute to your project with my expertise ?
        </h2>
        <button className="pingme-btn-container">
          <a
            href="https://www.linkedin.com/in/tuppati-udaykiran/"
            target="blank"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            Ping Me <img alt="pingme" src={pingme} />
          </a>
        </button>
      </div>
      <div className="footer-tag-line-container">
        <h3>
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
                <a
                  href="https://www.linkedin.com/in/tuppati-udaykiran/"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="social-icons-card-container">
                    <div className="social-icons-card-img-container">
                      <img src={linkedin} alt="linkedin" />
                    </div>
                    <div className="social-icons-card-content-container">
                      {" "}
                      <p className="social-icons-card-name">Linkedin</p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.behance.net/udaykiran91"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="social-icons-card-container">
                    <div className="social-icons-card-img-container">
                      <img src={behance} alt="behance" />
                    </div>
                    <div className="social-icons-card-content-container">
                      <p className="social-icons-card-name">Behance</p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/t.uday.design/"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="social-icons-card-container">
                    <div className="social-icons-card-img-container">
                      <img src={instagram} alt="instagram" />
                    </div>
                    <div className="social-icons-card-content-container">
                      <p className="social-icons-card-name">Instagram</p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/@UK_Everything"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="social-icons-card-container">
                    <div className="social-icons-card-img-container">
                      <img src={youtube} alt="youtube" />
                    </div>
                    <div className="social-icons-card-content-container">
                      <p className="social-icons-card-name"> Youtube</p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/t-uday-kiran"
                  style={{ textDecoration: "none", color: "white" }}
                  target="blank"
                >
                  <div className="social-icons-card-container">
                    <div className="social-icons-card-img-container">
                      {" "}
                      <img src={github} alt="github" />
                    </div>

                    <div className="social-icons-card-content-container">
                      {" "}
                      <p className="social-icons-card-name">Github</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
