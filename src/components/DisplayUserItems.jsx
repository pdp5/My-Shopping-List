const DisplayUserItems = ({
  matchItem,
  setUserSelectedItem,
  userInput,
  setUserInput,
  id,
  setId,
}) => {
  function onClickHandler(item) {
    setId((prevId) => {
      let newId = prevId + 1;
      setUserSelectedItem((previousItem) => ({
        ...previousItem,
        [newId]: { item },
      }));
      return newId;
    });

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
