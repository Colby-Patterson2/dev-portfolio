import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";
import { Navbar } from "./layout/Navbar";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
