import CheckMarkBtn from "./CheckMarkBtn.jsx";
import RemoveButton from "./RemoveButton.jsx";

const SelectableUserItems = ({
  userSelectedItem,
  checkedItem,
  setCheckedItem,
  setUserSelectedItem,
}) => {
  return (
    <div className="user-selected-items">
      Items:{" "}
      {Object.entries(userSelectedItem).map(([id, { item }]) => (
        <ul
          key={id}
          style={{
            textDecoration: id in checkedItem ? "line-through" : "none",
            color: id in checkedItem ? "gray" : "white",
          }}
        >
          {" "}
          <CheckMarkBtn
            checkedItem={checkedItem}
            item={item}
            setCheckedItem={setCheckedItem}
            id={id}
          />{" "}
          {item}
          <RemoveButton
            userSelectedItem={userSelectedItem}
            setUserSelectedItem={setUserSelectedItem}
            id={id}
          />
        </ul>
      ))}
    </div>
  );
};

export default SelectableUserItems;
