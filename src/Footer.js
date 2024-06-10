import React from "react";

export default function Footer() {
  const year = new Date();
  return <footer>CopyRight &copy;{year.getFullYear()} </footer>;
}
