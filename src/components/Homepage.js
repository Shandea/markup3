import React from 'react';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";


const Homepage = () => {
    return (
<div className="container">
  <div className="item">
    {" "}
    <a href="/markup3/service">Home</a>
    <img src={image1} alt="picture1" />
    Tech Support
  </div>
  <div className="item">
    {" "}
    <a href="/markup3/service">Home</a>
    <img src={image2} alt="picture2" />
    Career Paths
  </div>
  <div className="item">
    {" "}
    <a href="/markup3/service">Home</a>
    <img src={image3} alt="picture3" />
    Website Development
  </div>
</div>
    )
}
 export default Homepage;