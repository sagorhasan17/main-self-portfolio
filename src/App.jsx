import UpToButton from "./components/UpToButton";
import Footer from "./layouts/Footer";
import NavBar from "./layouts/NavBar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
// import Experience from './sections/Experience';
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <div className="main-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        {/* <Experience /> */}
        <Testimonials />
        <Contact />
      </main>
      <UpToButton />
      <Footer />
    </div>
  );
};

export default App;
