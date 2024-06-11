import React from "react";

export default function Footer({ length }) {
  return (
    <footer>
      {length}List {length === 1 ? "item" : "items"}
    </footer>
  );
}
