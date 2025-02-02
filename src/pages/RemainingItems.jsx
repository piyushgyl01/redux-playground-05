import { useSelector, useDispatch } from "react-redux";
import { fetchInventory, fetchRemovedItems } from "../actions.js";
import { useEffect } from "react";

export default function RemainingItems() {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);
  const removedItems = useSelector((state) => state.removedItems);

  useEffect(() => {
    dispatch(fetchRemovedItems());
  }, []);

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  return (
    <>
      <h1>RemainingItems</h1>
      <h2>Inventory Total: {inventory.length - removedItems.length}</h2>
    </>
  );
}
