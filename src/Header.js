import React from "react";

export default function Header({ title }) {
  return <header>{title}</header>;
}
Header.defaultProps = {
  title: "To do list",
};
