import React from "react";
import styles from "./Quiz.module.css";
import "./c.css";
export function Options({ item, event, sel }) {
  let i = 0;
  // return <li>{item}</li>;
  return item.options.map((item) => {
    return (
      <p key={i++} className={styles.options}>
        <label onClick={event} className={item.checked ? "green" : ""}>
          <input type="checkbox" name={item} />
          {item}
        </label>
      </p>
    );
  });
}
