import Item from "./Item"

const PackingList = ({ items, handleDelete }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            handleDelete={handleDelete}
            key={item.id}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList
