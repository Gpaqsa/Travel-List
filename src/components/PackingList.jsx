import Item from "./Item"

const PackingList = ({ items, handleDelete }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            description={item.descriptionValue}
            quantity={item.quantityValue}
            packed={item.packed}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList
