import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Service from "./components/Service";
import Careerpaths from "./components/Careerpaths";
import Techsupport from "./components/Techsupport";
import Webdevelopement from "./components/Webdevelopement";

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
        <Route exact path="/markup3/careerpaths" component={Careerpaths} />
        <Route exact path="/markup3/webdevelopement" component={Webdevelopement} />
        <Route exact path="/markup3/techsupport" component={Techsupport} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
