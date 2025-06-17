import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar.jsx"

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pagenotfound" element={<PageNotFound />} />
    </Routes>
    </div>
  );
}

export default App;
