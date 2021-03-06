import React from "react";
import { Router } from "@reach/router";
import App from "../../App";
import { Quiz } from "../quiz/Quiz";
import { Projects } from "../project/Projects";
import { NavBar } from "./NavBar";

export function Route() {
  return (
    <>
      <NavBar />
      <Router>
        <App path="/" />
        <Quiz path="/quiz" />
        <Projects path="/projects" />
      </Router>
    </>
  );
}
