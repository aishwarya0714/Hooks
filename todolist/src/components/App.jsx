import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState();
  const [item, setItem] = useState([]);
  function handleChange(event) {
    const newVlaue = event.target.value;
    setInputText(newVlaue);
  }

  function addItem() {
    setItem((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
