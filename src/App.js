import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProjectFluxo from "./pages/ProjectFluxo"
import ProjectWaste from "./pages/ProjectWaste"


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fluxo" element={<ProjectFluxo />} />
        <Route path="/waste" element={<ProjectWaste />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
