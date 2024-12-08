import { useState } from "react";
import CheckMarkBtn from "./CheckMarkBtn.jsx";

const items = [
  "milk",
  "oil",
  "yogort",
  "coconut",
  "mistry gift",
  "copper",
  "milk powder",
];

const Searchbar = () => {
  const [userInput, setUserInput] = useState("");
  const [matchItem, setMatchItem] = useState([]);
  const [userSelectedItem, setUserSelectedItem] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);

  function onChangeHandler(value) {
    setUserInput(value);
    console.log("user input: ", value);

    setMatchItem(items.filter((item) => item.includes(value)));
  }
  function onClickHandler(item) {
    setUserSelectedItem((previousItem) => [...previousItem, item]);
    console.log(userSelectedItem);
  }

  return (
    <>
      <div className="heading-searchbar-container">
        <h1>My Shopping List</h1>
        <form>
          <input
            onChange={(e) => onChangeHandler(e.target.value)}
            placeholder="search your item"
            type="search"
          />
        </form>
      </div>
      <div className="show-matched-items-container">
        {matchItem.map((item, index) => (
          <ul key={index}>
            {" "}
            <li onClick={() => onClickHandler(item)}>{item}</li>{" "}
          </ul>
        ))}
      </div>
      <div className="user-selected-items">
        <p>
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
              {item}{" "}
            </ul>
          ))}
        </p>
      </div>
      <div>checked Item: {checkedItem}</div>
    </>
  );
};

export default Searchbar;
