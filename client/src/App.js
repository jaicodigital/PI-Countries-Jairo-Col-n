import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import Home from "./components/Home/home";
import CreateActivity from "./components/CreateActivity/createActivity";
import Detail from "./components/DetailCountries/detailCountries";
import Activities from "./components/Activities/activities";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/activity" component={CreateActivity} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/home/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
