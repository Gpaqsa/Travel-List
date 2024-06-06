
const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀 </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  console.log(numPacked);
  const packedPercentage =
    numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;

  return (
    <>
      <footer className="stats">
        <em>
          {packedPercentage === 100
            ? "You got everything! Ready to go ✈️"
            : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${packedPercentage}%)`}
        </em>
      </footer>
    </>
  );
};

export default Stats
