import React from "react";
import { Router } from "@reach/router";
import App from "./App";
import { Poll } from "./Poll";
import { Projects } from "./Projects";
import { NavBar } from "./NavBar";

export function Route() {
  return (
    <>
      <NavBar />
      <Router>
        <App path="/" />
        <Poll path="/poll" />
        <Projects path="/projects" />
      </Router>
    </>
  );
}
