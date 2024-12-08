import { useState } from "react";
const CheckMarkBtn = ({ item, setCheckedItem, checkedItem }) => {
  return (
    <>
      <button
        style={{ color: checkedItem.includes(item) ? "gray" : "white" }}
        onClick={() => {
          checkedItem.includes(item)
            ? setCheckedItem(() =>
                checkedItem.filter((checked) => checked !== item)
              )
            : setCheckedItem((previousItem) => [...previousItem, item]);
        }}
      >
        ✓
      </button>
    </>
  );
};
export default CheckMarkBtn;
