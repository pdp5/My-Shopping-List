import { useState } from "react";

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

  function onChangeHandler(value) {
    setUserInput(value);
    console.log("user input: ", value);

    setMatchItem(items.filter((item) => item.includes(value)));
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
            <li>{item}</li>{" "}
          </ul>
        ))}
      </div>
    </>
  );
};

export default Searchbar;
