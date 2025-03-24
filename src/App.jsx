// import logo from './logo.svg';
import About from "./pages/About";
import Code from "./pages/Code";
import Designs from "./pages/Designs";
import Contact from "./pages/Contact";
import Crafts from "./pages/Crafts";
import Background from "./pages/Background";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadmusCode from "./pages/code/CadmusCode";
import LittleVenice from "./pages/code/LittleVeniceCode";
import MiscCode from "./pages/code/MiscCode";
import WraplifyCode from "./pages/code/WraplifyCode";
import GutInstinct from "./pages/designs/GutInstinct";
import BitesDesign from "./pages/designs/BitesDesign";
import CadmusDesign from "./pages/designs/CadmusDesign";
import MiscDesign from "./pages/designs/MiscDesign";
import PersonalDesign from "./pages/designs/PersonalDesign";
import CreativeSiteCode from "./pages/code/CreativeSite";

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
        
        <Route path="/code" element={<Code />} />
        <Route path="/code/cadmus" element={<CadmusCode />} />
        <Route path="/code/creativesite" element={<CreativeSiteCode />} />        
        <Route path="/code/littlevenice" element={<LittleVenice />} />
        <Route path="/code/misc" element={<MiscCode />} />
        <Route path="/code/wraplify" element={<WraplifyCode />} />
        
        <Route path="/designs" element={<Designs />} />
        <Route path="/designs/gutinstinct" element={<GutInstinct />} />
        <Route path="/designs/bites" element={<BitesDesign />} />
        <Route path="/designs/cadmus" element={<CadmusDesign />} />
        <Route path="/designs/misc" element={<MiscDesign />} />
        <Route path="/designs/personal" element={<PersonalDesign />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
