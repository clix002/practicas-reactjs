const Item = ({
  text,
  handleDelete2,
}: {
  text: string;
  handleDelete2: () => void;
}) => {
  return (
    <li>
      {text}
      {/* <span> {text}</span> */}
      <button onClick={handleDelete2}>🗑️</button>
    </li>
  );
};

export default Item;
