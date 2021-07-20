import "./App.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="col s12">
          <nav id="navBar">
            <div class="nav-wrapper">
              <a href="#servicePage" class="brand-logo">
                &#9875;Markup Page&#9875;
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="item">
          {" "}
          <a href="#servicePage">Home</a>
          <img src={image1} alt="picture1" />
          Tech Support
        </div>
        <div className="item">
          {" "}
          <a href="#servicePage">Home</a>
          <img src={image2} alt="picture2" />
          Career Paths
        </div>
        <div className="item">
          {" "}
          <a href="#servicePage">Home</a>
          <img src={image3} alt="picture3" />
          Website Development
        </div>
      </div>
    </div>
  );
}

export default App;
