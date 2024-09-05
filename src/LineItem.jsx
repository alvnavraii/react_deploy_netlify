import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheeck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheeck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheeck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => {
          handleDelete(item.id);
        }}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};
export default LineItem;
