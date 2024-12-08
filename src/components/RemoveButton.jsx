const RemoveButton = ({ item, userSelectedItem, setUserSelectedItem }) => {
  function onClickHandler() {
    setUserSelectedItem(
      userSelectedItem.filter((userItem) => userItem !== item)
    );
  }
  return <button onClick={onClickHandler}>X</button>;
};

export default RemoveButton;
