import React from "react";
import { FaTrash } from "react-icons/fa6";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
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
  );
};
export default ItemList;
