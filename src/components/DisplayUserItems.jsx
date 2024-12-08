const DisplayUserItems = ({
  matchItem,
  setUserSelectedItem,
  userInput,
  setUserInput,
}) => {
  function onClickHandler(item) {
    setUserSelectedItem((previousItem) => [...previousItem, item]);
    setUserInput("");
    // console.log(userSelectedItem);
  }
  return (
    <div className="show-matched-items-container">
      {userInput &&
        matchItem.map((item, index) => (
          <ul key={index}>
            {" "}
            <li onClick={() => onClickHandler(item)}>{item}</li>{" "}
          </ul>
        ))}
    </div>
  );
};

export default DisplayUserItems;
