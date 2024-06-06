
const Item = ({
  id,
  quantity,
  description,
  packed,
  handleDelete,
  handleToggleitem,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => {
          handleToggleitem(id);
        }}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDelete(id)}>❌</button>
    </li>
  );
};

export default Item
