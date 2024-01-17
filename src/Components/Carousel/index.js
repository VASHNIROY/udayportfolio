import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ReactSimplyCarousel from "react-simply-carousel";
import "./index.css";

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div style={{ width: "100%" }}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={5}
        itemsToScroll={2}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            display: "none",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            display: "none",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        swipeable={true}
        autoPlay={true}
        responsiveProps={[
          {
            itemsToShow: 7,
            itemsToScroll: 2,
            minWidth: 1000,
          },
        ]}
        speed={1000}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}

        <div className="carousel-img-contianer">
          <img
            alt=""
            className="carousel-images"
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555717/11-react-native-1_avarfs.svg"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/04-angular-js_s2wvp8.svg"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690546353/popup_image_yyio7p.jpg"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555715/05-vuejs_muzxgg.svg"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555314/angular_esubnn.png"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458271/Blog-Thumbnail_Security-by-Design_ed9ptl.png"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458271/demo-webinar-digitize-complex-approval-workflows_uuvl6i.png"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            alt=""
            className="carousel-images"
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458271/Blog-Thumbnail-11_gakc3u.png"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458028/polarion-1_qvorli.jpg"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458028/FuSi2_1920x1080_tcm53-77681_n4qw2p.jpg"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458028/FuSi2_1920x1080_tcm53-77681_n4qw2p.jpg"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            alt=""
            className="carousel-images"
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458028/FuSi2_1920x1080_tcm53-77681_n4qw2p.jpg"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458028/FuSi2_1920x1080_tcm53-77681_n4qw2p.jpg"
          />
        </div>
        <div className="carousel-img-contianer">
          <img
            className="carousel-images"
            alt=""
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1690458028/FuSi2_1920x1080_tcm53-77681_n4qw2p.jpg"
          />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
