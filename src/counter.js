import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const funadd = () => {
    setCount(count + 1);
  };
  const funDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <button className="add-button" onClick={() => funadd()}>
        add{" "}
      </button>
      <button className="dec-button" onClick={() => funDec()}>
        dec{" "}
      </button>
      <p>{count}</p>
    </>
  );
}
