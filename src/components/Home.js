// Home.js

import React from "react";
import "./css/Home.css";

function Home() {
  return (
    <main className="home">
      <section>
        <h1 className="title_home">SÛRCHAIN</h1>
      </section>
      <section>
      <p className="text_home_solution">A solution for your valuable stuff</p>
      </section>
      <section>
        <p className="text_home_vision">
          Our vision : Unlock the power of blockchain to protect and trade your valuables
          with ease
        </p>
      </section>
    </main>
  );
}

export default Home;