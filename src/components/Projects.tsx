import React from "react";
import travelly from "../assets/img/travelly.jpg";
import elena from "../assets/img/elena-joy.jpg";

export function Projects() {
  return (
    <section className="projects">
      <div className="travelly">
        <h2>Travelly</h2>
        <img src={travelly} alt="travelly-project" />
      </div>
      <div className="elena">
        <h2>Elena Joy</h2>
        <img src={elena} alt="travelly-project" />
      </div>
    </section>
  );
}
