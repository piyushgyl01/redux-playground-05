import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRemovedItems } from "../actions";

export default function RemovedItems() {
  const dispatch = useDispatch();
  const removedItems = useSelector((state) => state.removedItems);

  useEffect(() => {
    dispatch(fetchRemovedItems());
  }, []);
  return (
    <>
      <h1>Removed Items From Inventory</h1>
      <h2>Removed Items Total: {removedItems.length}</h2>
      <ul>
        {removedItems.map((item, index) => (
          <li key={index}>
            {item.itemName}: {item.itemQuantity}
          </li>
        ))}
      </ul>
    </>
  );
}
