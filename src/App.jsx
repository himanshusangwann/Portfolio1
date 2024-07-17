import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <ContactMe/>

    </div>
    )
    
}

export default App;
