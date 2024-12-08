import { useState } from "react";
const CheckMarkBtn = ({ item, setCheckedItem, checkedItem }) => {
  function onClickHandler() {
    checkedItem.includes(item)
      ? setCheckedItem(() => checkedItem.filter((checked) => checked !== item))
      : setCheckedItem((previousItem) => [...previousItem, item]);
  }
  return (
    <>
      <button
        style={{ color: checkedItem.includes(item) ? "gray" : "white" }}
        onClick={onClickHandler}
      >
        ✓
      </button>
    </>
  );
};
export default CheckMarkBtn;
