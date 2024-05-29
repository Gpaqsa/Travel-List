
const Item = ({ id, quantity, description, packed, handleDelete }) => {
  // console.log(packed);
  return (
    <>
      <li key={id}>
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {quantity} {description}
        </span>
        <button onClick={() => handleDelete(id)}>❌</button>
      </li>
    </>
  );
};

export default Item
