// import logo from './logo.svg';
import About from "./pages/About";
import Code from "./pages/Code";
import Designs from "./pages/Designs";
import Contact from "./pages/Contact";
import Crafts from "./pages/Crafts";
import Background from "./pages/Background";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadmus from "./pages/code/Cadmus";

function App() {
  return (
    <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/crafts" element={<Crafts />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/code" element={<Code />} />
        <Route path="/code/cadmus" element={<Cadmus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
