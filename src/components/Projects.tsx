import React from "react";
import travelly from "../assets/img/travelly.jpg";
import elena from "../assets/img/elena-joy.jpg";
import {NavLink} from 'react-router-dom'

export function Projects() {
  return (
    <section className="projects">
      <div className="travelly">
        <h2>Travelly</h2>
      <a href="https://marikakonturova.github.io/Travel-website/"> <img src={travelly} alt="travelly-project" /></a> 
      </div>
      <div className="elena">
        <h2>Elena Joy</h2>
        <a href='https://marikakonturova.github.io/photoraphy-website/'>
        <img src={elena} alt="travelly-project" /></a>
      </div>
    </section>
  );
}
