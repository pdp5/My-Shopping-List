const RemoveButton = ({ userSelectedItem, setUserSelectedItem, id }) => {
  function onClickHandler() {
    setUserSelectedItem((prev) => {
      const newUserSelectedItem = { ...prev };
      delete newUserSelectedItem[id];

      return newUserSelectedItem;
    });
  }
  return <button onClick={onClickHandler}>X</button>;
};

export default RemoveButton;
