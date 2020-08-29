import React from "react";

function App() {
  const [list, setList] = React.useState("");
  const [items, setItems] = React.useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setList(newValue);
  }
  function add() {
    setItems(prev => {
      return [...prev, list];
    });
    setList("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={list} onChange={handleChange} type="text" />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todo => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
