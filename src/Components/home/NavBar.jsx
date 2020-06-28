import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";

export function NavBar() {
  return (
    <div className={styles.nav}>
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
