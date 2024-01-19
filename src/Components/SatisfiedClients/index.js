import "./index.css";
import plus from "../images/mingcute_plus-fillplus.png";

const SatisfiedClients = () => {
  return (
    <div className="satisfied-clients-main-container">
      <div className="satisfied-clients-mini-container">
        <div className="satisfied-clients-heading-container">
          {" "}
          <p className="satisfied-clients-heading">
            Satisfied Clientss
            <span style={{ display: "flex", padding: "0", margin: "0" }}>
              <hr
                style={{
                  width: "50%",
                  padding: "0",
                  marginRight: "0",
                  marginLeft: "0",
                }}
              />
              <hr
                style={{
                  width: "1%",
                  padding: "0",
                  marginRight: "0",
                  marginLeft: "5%",
                }}
              />
              <hr
                style={{
                  width: "1%",
                  padding: "0",
                  marginRight: "0",
                  marginLeft: "5%",
                }}
              />
            </span>
          </p>
        </div>
        <div className="satisfied-clients-cards-container">
          <div className="satisfied-clients-cards-mini-container">
            <div className="satisfied-clients-cards-hr-main-container">
              <div className="satisfied-clients-card-container">
                Clients So far
              </div>
              <img
                alt="plus"
                className="satisfied-clients-card-plus-symbol"
                src={plus}
              />
              <div className="satisfied-clients-card-container">
                Applications Designed
              </div>
              <img
                alt="plus"
                className="satisfied-clients-card-plus-symbol"
                src={plus}
              />
              <div className="satisfied-clients-card-container">
                Websites Developed
              </div>
              <img
                alt="plus"
                className="satisfied-clients-card-plus-symbol"
                src={plus}
              />
              <div className="satisfied-clients-card-container">
                Clients Reached
              </div>
              <img
                alt="plus"
                className="satisfied-clients-card-plus-symbol"
                src={plus}
              />
              <div className="satisfied-clients-card-container">
                Social Media Posts
              </div>
            </div>
            <hr className="satisfied-clients-cards-hr" />
          </div>

          <div className="satisfied-clients-card-count-container">
            <p className="satisfied-clients-card-count">
              5<sup>+</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedClients;
