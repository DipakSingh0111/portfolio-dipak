import "./App.css";
import About from "./components/About";
import Achive from "./components/Achive";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Marque />
      <About />
      <Skills />
      <Achive />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
