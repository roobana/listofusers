import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";

export default function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      list: "Gather the project requirment",
    },
    {
      id: 2,
      checked: false,
      list: "Work on task",
    },
    {
      id: 3,
      checked: false,
      list: "code push",
    },
  ]);
  const handleCheck = (id) => {
    const itemCheck = items.map((val) =>
      val.id === id ? { ...val, checked: !val.checked } : val
    );
    setItems(itemCheck);
    localStorage.setItem("todo-list", JSON.stringify(itemCheck));
  };
  const handleDelete = (id) => {
    const itemDelete = items.filter((val1) => val1.id !== id);
    setItems(itemDelete);
    // to store the state
    localStorage.setItem("todo-list", JSON.stringify(itemDelete));
  };

  return (
    <main>
      {items.length ? (
        <ul className="unorderList">
          {items.map((item) => (
            <li className="list-item" key={item.id}>
              <input
                className="input-Box"
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                className="label-Name"
                onDoubleClick={() => handleCheck(item.id)}
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.list}
              </label>
              <FaTrash onClick={() => handleDelete(item.id)}></FaTrash>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your Todo-list is empty</p>
      )}
    </main>
  );
}
