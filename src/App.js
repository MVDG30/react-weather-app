import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search App</h1>
        <WeatherSearch />
        <small>
          <a
            href="https://github.com/MVDG30/WeatherApp"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Open source code
          </a>
          , by Michelle van de Griend
        </small>
      </header>
    </div>
  );
}

export default App;
