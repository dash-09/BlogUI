import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Signup from "./components/Signup";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About/>
      <Signup/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
