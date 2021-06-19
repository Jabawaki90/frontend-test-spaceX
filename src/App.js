import react, { useEffect, useState } from "react";
import "./App.css";

const urlLauncher = "https://api.spacexdata.com/v4/launches";
const urlShip = "https://api.spacexdata.com/v4/ships";
const urlCrew = "https://api.spacexdata.com/v4/crew";

function App() {
  const [launcher, setLauncher] = useState();
  const [ship, setShip] = useState();
  const [crew, setCrew] = useState();

  const fetchLauncher = async () => {
    const response = await fetch(urlLauncher);
    const dataLauncher = await response.json();
    setLauncher(dataLauncher);
  };

  useEffect(() => {
    fetchLauncher();
  }, []);

  console.log(launcher);

  return (
    <>
      <nav id="header">
        <section className="title">
          <h3>Space X</h3>
        </section>
        <section className="route">
          <h3 className="routing">Lauches</h3>
          <h3 className="routing">Ship</h3>
          <h3 className="routing">Crew</h3>
        </section>
      </nav>
      <div id="launches"></div>
      <div id="ship"></div>
      <div id="crew"></div>
    </>
  );
}

export default App;
