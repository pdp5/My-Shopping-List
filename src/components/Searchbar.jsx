import { useState } from "react";
import DisplayUserItems from "./DisplayUserItems.jsx";
import SelectableUserItems from "./SelectableIUserItems.jsx";

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

    if (value.length) {
      setMatchItem(items.filter((item) => item.includes(value)));
    }
  }

  return (
    <>
      <div className="heading-searchbar-container">
        <h1>My Shopping List</h1>
        <form>
          <input
            value={userInput}
            onChange={(e) => onChangeHandler(e.target.value)}
            placeholder="search your item"
            type="search"
          />
        </form>
      </div>
      <DisplayUserItems
        matchItem={matchItem}
        setUserSelectedItem={setUserSelectedItem}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <SelectableUserItems
        userSelectedItem={userSelectedItem}
        checkedItem={checkedItem}
        setCheckedItem={setCheckedItem}
        setUserSelectedItem={setUserSelectedItem}
      />
      <div>checked Item: {checkedItem}</div>
    </>
  );
};

export default Searchbar;
