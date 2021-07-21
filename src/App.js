import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Service from "./components/Service";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <div className="col s12">
            <nav id="navBar">
              <div className="nav-wrapper">
                <h1 className="title">&#9875;Markup Page&#9875;</h1>
                <Link to="/markup3/service" className="brand-logo">
                  Services
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <Route exact path="/markup3/" component={Homepage} />
        <Route exact path="/markup3/service" component={Service} />
      </div>
    </BrowserRouter>
  );
}

export default App;
