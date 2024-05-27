
const Item = ({ id, quantity, description, packed }) => {
  // console.log(packed);
  return (
    <>
      <li key={id}>
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {quantity} {description}
        </span>
        <button>❌</button>
      </li>
    </>
  );
};

export default Item
