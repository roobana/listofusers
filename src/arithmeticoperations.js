import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [num1, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0);
  const funAdd = () => {
    setRes(num1 + num2);
  };
  const funMul = () => {
    setRes(num1 * num2);
  };
  const funSub = () => {
    setRes(num1 - num2);
  };

  const funDiv = () => {
    setRes(num1 / num2);
  };
  return (
    <>
      <input
        type="number"
        placeholder="number1"
        className="number1"
        required
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="number2"
        className="number2"
        required
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <button class="addition" onClick={() => funAdd()}>
        ADD
      </button>
      <button class="multiplication" onClick={() => funMul()}>
        MUL
      </button>
      <button class="subraction" onClick={() => funSub()}>
        SUB
      </button>
      <button class="division" onClick={() => funDiv()}>
        DIV
      </button>
      <p>num1: {num1}</p>
      <p>num2: {num2}</p>
      <p>{res}</p>
    </>
  );
}
//another way
// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";

// export default function App() {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [res, setRes] = useState(0);

//   return (
//     <>
//       <input
//         type="number"
//         placeholder="number1"
//         className="number1"
//         required
//         onChange={(e) => setNum1(Number(e.target.value))}
//       />
//       <input
//         type="number"
//         placeholder="number2"
//         className="number2"
//         required
//         onChange={(e) => setNum2(Number(e.target.value))}
//       />
//       <button className="addition" onClick={() => setRes(num1 + num2)}>
//         ADD
//       </button>
//       <button className="multiplication" onClick={() => setRes(num1 * num2)}>
//         MUL
//       </button>
//       <button className="subraction" onClick={() => setRes(num1 - num2)}>
//         SUB
//       </button>
//       <button className="division" onClick={() => setRes(num1 / num2)}>
//         DIV
//       </button>
//       <p>num1: {num1}</p>
//       <p>num2: {num2}</p>
//       <p>{res}</p>
//     </>
//   );
// }
