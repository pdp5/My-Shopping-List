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
      {userSelectedItem.map((item, index) => (
        <ul
          key={index}
          style={{
            textDecoration: checkedItem.includes(item)
              ? "line-through"
              : "none",
            color: checkedItem.includes(item) ? "gray" : "white",
          }}
        >
          {" "}
          <CheckMarkBtn
            checkedItem={checkedItem}
            item={item}
            setCheckedItem={setCheckedItem}
          />{" "}
          {item}
          <RemoveButton
            item={item}
            userSelectedItem={userSelectedItem}
            setUserSelectedItem={setUserSelectedItem}
          />
        </ul>
      ))}
    </div>
  );
};

export default SelectableUserItems;
