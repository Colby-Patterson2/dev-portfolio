import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
import { Navbar } from "./layout/Navbar";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <title>CP Portfolio</title>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
