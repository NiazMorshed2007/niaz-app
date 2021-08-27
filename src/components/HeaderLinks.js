import React from "react";

export default function HeaderLinks({ name }) {
  return (
    <a href={`#${name}`}>
      <li>{name}</li>
    </a>
  );
}
