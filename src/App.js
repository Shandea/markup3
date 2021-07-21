import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route } from "react-router-dom";
import Service from "./components/Service";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="row">
          <div className="col s12">
            <nav id="navBar">
              <div className="nav-wrapper">
                <a href="/markup3/service" className="brand-logo">
                  &#9875;Markup Page&#9875;
                </a>
              </div>
            </nav>
          </div>
        </div>
        <Route exact path="/markup3/" component={Homepage}/>
        <Route exact path="/markup3/service" component={Service} />
      </div>
    </BrowserRouter>
  );
}

export default App;
