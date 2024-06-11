import React from "react";

const AddInputItems = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <div className="addItem">
      {
        <form className="addItemForm" onSubmit={handleSubmit}>
          <label htmlFor="addItemLabel">Add Item </label>
          <input
            type="text"
            placeholder="Text Input"
            id="addItemId"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      }
    </div>
  );
};
export default AddInputItems;
