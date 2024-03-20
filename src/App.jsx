// import logo from './logo.svg';
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Crafts from "./pages/Crafts";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/crafts" element={<Crafts />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
