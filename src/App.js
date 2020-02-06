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
import posed, { PoseGroup } from "react-pose";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);
function App() {
  return (
    <div className="Body">
      <Header />
      <Container>
        <PosedRouter>
          <Main path="/" />
          <AboutMe path="/about-me" />
          <Work path="/work" />
          <Project path="/work/uno" />
          <Contact path="/contact" />
        </PosedRouter>
      </Container>
    </div>
  );
}
//
export default App;
