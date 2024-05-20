import dictlogo from "./dictlogo.jpg";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={dictlogo} className="logo" alt="logo" />
          <h1>What word would you like to look up?</h1>
        </header>
        <main>
          <Dictionary />
        </main>
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
