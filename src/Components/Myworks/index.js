import "./index.css";
import Team2 from "../images/Team2.jpg";

const Myworks = () => {
  return (
    <div className="works-main-container">
      <div className="works-heading-container">
        {" "}
        <p className="works-heading">
          My Works
          <span style={{ display: "flex", padding: "0", margin: "0" }}>
            <hr style={{ width: "50%", padding: "0",marginRight: "0",marginLeft: "0" }} />
            <hr style={{ width: "1%",padding: "0",marginRight: "0",marginLeft: "5%"  }} />
            <hr style={{ width: "1%",padding: "0",marginRight: "0",marginLeft: "5%"  }} />
          </span>
        </p>
      </div>
      <div className="work-cards-container">
        <div className="work-card-main-container">
          <div className="work-card-number">1</div>
          <div className="work-card-container">
            {" "}
            <div className="work-card-content-container">
              Lorem ipsum dolor sit amet consectetur. Accumsan diam. Lorem ipsum
              dolor sit amet consectetur. Accumsan diam.Lorem ipsum dolor sit
              amet consectetur. Accumsan.Lorem ipsum dolor sit amet consectetur.
              Accumsan diam. Lorem ipsum dolor sit amet consectetur. Accumsan
              diam.Lorem ipsum dolor sit amet consectetur. Accumsanamet
              consectetur. Accumsan diam.Lorem ipsum dolor sit amet consectetur.
              Accumsan.
            </div>
            <div className="work-card-image-container">
              <h1>University Application</h1>
              <img src={Team2} className="work-card-image" alt="team" />
              <button className="work-card-view-btn">View</button>
            </div>
          </div>
        </div>
        <div className="work-card-main-container">
          <div className="work-card-number">2</div>
          <div className="work-card-container">
            {" "}
            <div className="work-card-content-container">
              Lorem ipsum dolor sit amet consectetur. Accumsan diam. Lorem ipsum
              dolor sit amet consectetur. Accumsan diam.Lorem ipsum dolor sit
              amet consectetur. Accumsan.Lorem ipsum dolor sit amet consectetur.
              Accumsan diam. Lorem ipsum dolor sit amet consectetur. Accumsan
              diam.Lorem ipsum dolor sit amet consectetur. Accumsanamet
              consectetur. Accumsan diam.Lorem ipsum dolor sit amet consectetur.
              Accumsan.
            </div>
            <div className="work-card-image-container">
              <h1>University Application</h1>
              <img src={Team2} className="work-card-image" alt="team" />
              <button className="work-card-view-btn">View</button>
            </div>
          </div>
        </div>
        <button className="work-card-view-btn">Explore More</button>
      </div>
    </div>
  );
};

export default Myworks;
