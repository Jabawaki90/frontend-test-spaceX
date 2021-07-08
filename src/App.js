import { useEffect, useState } from "react";
import "./App.css";
import Launches from "./Launches";
import Ship from "./Ship";
import Crew from "./Crew";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar, DateRangePicker } from "react-date-range";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const urlLauncher = "https://api.spacexdata.com/v4/launches";
const urlShip = "https://api.spacexdata.com/v4/ships";
const urlCrew = "https://api.spacexdata.com/v4/crew";

function App() {
  const [launcher, setLauncher] = useState([]);
  const fetchApi = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLauncher([data]);
      console.log(launcher);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi(urlLauncher);
  }, []);

  return (
    <Router>
      <header>
        <h3>Space X</h3>
        <nav>
          <Link to="./launches">Launches</Link>
          <Link to="./ships">Ship</Link>
          <Link to="./crew">crew</Link>
        </nav>
      </header>
      <Route path="/launches">
        <Launches />
      </Route>
      <Route path="/ships">
        <Ship />
      </Route>
      <Route path="/crew">
        <Crew />
      </Route>
    </Router>
  );
}

export default App;
