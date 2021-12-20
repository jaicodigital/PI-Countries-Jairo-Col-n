import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preloader from "../src/components/Pre";
import LandingPage from "./components/LandingPage/landingPage";
import Home from "./components/Home/home";
import CreateActivity from "./components/CreateActivity/createActivity";
import Detail from "./components/DetailCountries/detailCountries";
import Activities from "./components/Activities/activities";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ScrollToTop />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/activity" component={CreateActivity} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/home/:id" component={Detail} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
