// import logo from './logo.svg';
import Papercrafts from './pages/Papercrafts';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/papercrafts" element={<Papercrafts/>}/>
      </Routes>
    </>
  );
}

export default App;
