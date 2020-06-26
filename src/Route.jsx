import React, { Fragment } from "react";
import { router, Link, Router } from "@reach/router";
import App from "./App.js";
import { Blog } from "./blog";
import { Projects } from "./Projects";
import { NavBar } from "./NavBar";

export function Route() {
  return (
    <>
      <NavBar />
      <Router>
        <App path="/" />
        <Blog path="/blog" />
        <Projects path="/projects" />
      </Router>
    </>
  );
}
