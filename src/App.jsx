import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// TODO Global Style
import GlobalStyle from "./components/GlobalStyle";

// TODO Importing the Pages and components
import Nav from "./components/Nav";
import AboutUS from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

// TODO: Main App Function
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path="/" element={<AboutUS />}></Route>
        <Route path="/work" element={<OurWork />}></Route>
        <Route path="/work/:id" element={<MovieDetail />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
