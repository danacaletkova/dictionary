import dictlogo from "./dictlogo.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={dictlogo} className="logo" alt="logo" />
          <h1>Dictionary</h1>
        </header>
      </div>
    </div>
  );
}
