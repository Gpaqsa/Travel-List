import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, handleDelete, handleToggleitem, setItems }) => {
  // Sort Logic in App
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  // Clear entire list
  const clearList = () => {
    const confirmed = window.confirm("Are you sure to delete all items ? ");
    if (confirmed) setItems([]);
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            handleDelete={handleDelete}
            key={item.id}
            id={item.id}
            handleToggleitem={handleToggleitem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packd status</option>
        </select>
        <button onClick={() => clearList()}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
