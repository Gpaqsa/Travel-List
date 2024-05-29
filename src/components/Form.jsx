import { useState } from "react";

const Form = ({ handleAddItems }) => {
  const [descriptionValue, setDescriptionValue] = useState("");
  const [quantityValue, setQuantityValue] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!descriptionValue) return;
    const newItem = {
      descriptionValue,
      quantityValue,
      packed: false,
      id: Date.now(),
    };

    handleAddItems(newItem);
    // setNewInitialItems([...initialItems, newItem]);
    setDescriptionValue("");
    setQuantityValue(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select
        value={quantityValue}
        onChange={(e) => setQuantityValue(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={descriptionValue}
        onChange={(event) => setDescriptionValue(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
