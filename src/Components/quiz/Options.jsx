import React from "react";
import styles from "./Quiz.module.css";
export function Options({ item }) {
  let i = 0;
  // return <li>{item}</li>;
  return item.map((item) => {
    return (
      // <div>
      <p key={i++} className={styles.options}>
        <input type="checkbox" /> {item}
      </p>
      // </div>
    );
  });
}
