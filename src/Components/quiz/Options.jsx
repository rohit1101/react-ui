import React from "react";
import styles from "./Quiz.module.css";
export function Options({ item, event }) {
  let i = 0;
  // return <li>{item}</li>;
  return item.map((item) => {
    return (
      <p key={i++} className={styles.options}>
        <label onClick={event}>
          <input type="checkbox" name={item} />
          {item}
        </label>
      </p>
    );
  });
}
