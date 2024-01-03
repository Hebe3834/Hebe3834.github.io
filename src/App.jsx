// import logo from './logo.svg';
import CodingProjects from "./pages/CodingProjects";
import About from "./pages/About";
import Papercrafts from "./pages/Papercrafts";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/papercrafts" element={<Papercrafts />} />
        <Route path="/coding-projects" element={<CodingProjects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
