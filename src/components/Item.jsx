
const Item = ({ id, quantity, description, packed, handleDelete }) => {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDelete(id)}>❌</button>
    </li>
  );
};

export default Item
