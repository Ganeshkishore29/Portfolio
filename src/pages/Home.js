import About from "../components/About"
import Experience from "../components/Experience"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Footer from "../components/Footer"
import Project from "../components/Project"

function Home() {
  return<><Hero />
  <About/>
  <Project/>
  <Skills/>
  
  <Experience/>
  <Footer/>
  </>
}

export default Home