import React from "react";
import Navbar from "./com/Navbar";
import Home from "./com/Home"; 
import Footer from "./com/Footer";
import SofaProcess from "./com/SofaProcess";
import Categories from "./com/Categories"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SofaProcess />
      <Categories/>
      <Footer />
    </div>
  );
}

export default App;
