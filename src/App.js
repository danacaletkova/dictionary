import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer className="text-center">
          <a
            href="https://github.com/danacaletkova/dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/danacaletkova"
            target="_blank"
            rel="noreferrer"
          >
            Dana Caletkova
          </a>
        </footer>
      </div>
    </div>
  );
}
