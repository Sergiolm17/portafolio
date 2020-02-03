import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import { Router } from "@reach/router";

import Container from "./components/Container";
function App() {
  return (
    <div className="Body">
      <Header />
      <Container>
        <Router>
          <Main path="/" />
          <AboutMe path="/about-me" />
          <Work path="/work" />
          <Contact path="/contact" />
        </Router>
      </Container>
    </div>
  );
}
//
export default App;
