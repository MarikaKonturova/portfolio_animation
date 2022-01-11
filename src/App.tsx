import React from "react";
import logo from "./logo.svg";
import Header  from "./components/Header";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { Route, Routes } from "react-router-dom";

import "./styles/css/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={ <Intro />} />
        <Route path={"/projects"} element={ <Projects />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
