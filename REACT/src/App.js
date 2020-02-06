import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Project from "./pages/Project";
import { Router, Location } from "@reach/router";
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
          <Project path="/work/uno" />
          <Contact path="/contact" />
        </Router>
      </Container>
    </div>
  );
}
//
export default App;
