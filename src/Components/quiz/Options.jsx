import React from "react";

export function Options({ item }) {
  // return <li>{item}</li>;
  return item.map((item) => {
    return (
      <div>
        <p>
          <input type="checkbox" /> {item}
        </p>
      </div>
    );
  });
}
