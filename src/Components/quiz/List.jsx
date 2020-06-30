import React from "react";

export function List({ el }) {
  return el.map((item) => {
    return <li>{item}</li>;
  });
}
