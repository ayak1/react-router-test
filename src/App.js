import {BrowserRouter,Routes,Route,} from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";
import './App.css';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
      < Nav />
    <Routes>
      <Route path="/" element={< Home />}/>
      <Route path="/about" element={< About />}/>
      <Route path="/services" element={< Services />}/>
      <Route path="/contact_us" element={< ContactUs />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
