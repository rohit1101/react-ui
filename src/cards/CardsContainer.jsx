import React from "react";
import "./Cards.css";

export function Cards({ info }) {
  return info.map((item) => {
    return (
      <div className="cards">
        <div className="name">Repository : {item.name}</div>
        <div className="des">Description : {item.description}</div>
        <div className="link">
          <a href={item.html_url}>{item.html_url}</a>
        </div>
      </div>
    );
  });
}
