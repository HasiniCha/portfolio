import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/about";
import Resume from "./components/Skills";
import Project from "./components/project";
import Contact from "./components/contact";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="parallax-1">
        <Intro />
      </div>
      <div class="parallax-2">
        <About />
      </div>

      <div class="parallax-2">
        <Resume />
      </div>
      <div class="parallax-3">
        <Project />
      </div>
      <footer className="footer">
        <Contact />
      </footer>
    </div>
  );
}

export default App;
