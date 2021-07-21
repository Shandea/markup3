import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="container">
      <Link to="/markup3/service">
        <div className="item">
          {" "}
          <img src={image1} alt="picture1" />
          Tech Support
        </div>
      </Link>
      <Link to="/markup3/service">
        <div className="item">
          {" "}
          <img src={image2} alt="picture2" />
          Career Paths
        </div>
      </Link>
      <Link to="/markup3/service">
        <div className="item">
          {" "}
          <img src={image3} alt="picture3" />
          Website Development
        </div>
      </Link>
    </div>
  );
};
export default Homepage;
