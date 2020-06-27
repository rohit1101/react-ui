import React from "react";
import { Link } from "@reach/router";
import "./Nav.css";

export function NavBar() {
  return (
    <div className="nav">
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/quiz">Quiz</Link>
      </p>
      <p>
        <Link to="/projects">Projects</Link>
      </p>
    </div>
  );
}
