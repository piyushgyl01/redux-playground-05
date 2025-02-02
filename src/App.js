import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddNewItems from "./pages/AddNewItems";
import Inventory from "./pages/Inventory";
import RemainingItems from "./pages/RemainingItems";
import RemovedItems from "./pages/RemovedItems";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <h1>⚛️ react playground!</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={"/inventory"}>Inventory</Link>
              </li>
              <li>
                <Link to={"/removedItems"}>Removed Items</Link>
              </li>
              <li>
                <Link to={"/remainingItems"}>Remaining Items</Link>
              </li>
              <li>
                <Link to={"/"}>Add New Items</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/removedItems" element={<RemovedItems />} />
            <Route path="/remainingItems" element={<RemainingItems />} />
            <Route path="/" element={<AddNewItems />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
