import React from "react";
import { Link } from "@reach/router";

export function NavBar() {
  return (
    <div>
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
