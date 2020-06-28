import React from "react";
import styles from "./Cards.module.css";

export function Cards({ info }) {
  return info.map((item) => {
    return (
      <div className={styles.cards}>
        <div className={styles.name}>Repository : {item.name}</div>
        <div className={styles.des}>Description : {item.description}</div>
        <div className={styles.link}>
          <a href={item.html_url}>{item.html_url}</a>
        </div>
      </div>
    );
  });
}

// {
/* <div className="name">Repository : {item.name}</div>
<div className="des">Description : {item.description}</div>
<div className="link" */
// }
