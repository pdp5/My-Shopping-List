import { useState } from "react";
const CheckMarkBtn = ({ item, setCheckedItem, checkedItem, id }) => {
  function onClickHandler() {
    setCheckedItem((prev) => {
      const newCheckedItem = { ...prev };
      if (id in newCheckedItem) {
        delete newCheckedItem[id];
      } else {
        newCheckedItem[id] = { item };
      }
      return newCheckedItem;
    });
  }
  return (
    <>
      <button
        style={{
          color: id in checkedItem ? "gray" : "white",
        }}
        onClick={onClickHandler}
      >
        ✓
      </button>
    </>
  );
};
export default CheckMarkBtn;
