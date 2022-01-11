import React from "react";
import "./App.css";

import {
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Header,
  Footer,
} from "./containers";
import { CTA, NavBar, Brand } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>

      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
