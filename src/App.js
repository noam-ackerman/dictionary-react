import Dictionary from "./Dictionary";
import Header from "./img/dictionaryHeader.png";
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="container">
      <header>
      <img src={Header} alt="header" width="750"></img>
      </header>
<main>
  <Dictionary/>
</main>
  <footer className="fixed-bottom">
     <a
            href="https://github.com/noam-ackerman/dictionary-react"
            target="_blank"
            rel="noreferrer"
            className="codeLink"
          >
            Open-source code
          </a>{" "}
          designed and built by{" "}
          <a
            href="https://www.linkedin.com/in/noam-ackerman/"
            target="_blank"
            rel="noreferrer"
            className="codeLink"
          >
            Noam Ackerman
          </a>
  </footer>
        </div>
    </div>
  );
}

export default App;
