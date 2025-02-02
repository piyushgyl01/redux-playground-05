import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToStorage, removeFromStorage } from "../actions";

export default function AddNewItems() {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [entryType, setEntryType] = useState("addToStorage");

  const handleAddEntry = (e) => {
    e.preventDefault();

    if (entryType === "addToStorage") {
      dispatch(
        addToStorage({
          itemName,
          itemQuantity: parseFloat(itemQuantity),
          entryType,
        })
      );
    } else {
      dispatch(
        removeFromStorage({
          itemName,
          itemQuantity: parseFloat(itemQuantity),
          entryType,
        })
      );
    }

    setItemName("");
    setItemQuantity("");
    setEntryType("addToStorage");
  };
  return (
    <>
      <h1>Inventory Admin App</h1>
      <form>
        <div>
          <label>Item Name: </label>
          <br />
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div>
          <label>Item Quantity: </label>
          <br />
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </div>
        <div>
          <label>Entry Type: </label>
          <br />
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="addToStorage">Add to storage</option>
            <option value="removeFromStorage">Remove from storage</option>
          </select>
        </div>
        <br />
        <button onClick={handleAddEntry}>Add Item Data</button>
      </form>
    </>
  );
}
