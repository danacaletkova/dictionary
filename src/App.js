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
            Coded by Dana Caletkova
          </a>
        </footer>
      </div>
    </div>
  );
}
