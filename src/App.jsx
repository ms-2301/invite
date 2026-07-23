import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/ourStory";
import Skills from "./components/ceremony";
import Projects from "./components/WeddingDetails";
import Contact from "./components/RSVP";
import Footer from "./components/Footer";


export default function App() {


 /* if (!unlocked) {
    return <PebbleGate onUnlock={() => setUnlocked(true)} />;
  }*/

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
