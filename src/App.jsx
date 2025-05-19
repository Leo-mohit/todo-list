import { useState } from "react";
import "./App.css";

const App = () => {
  const [todoList, setToDoList] = useState([]);

  const saveToDoList = (e) => {
    console.log(e, "event ==>");
    e.preventDefault();
    let toname = e.target.toname.value;
    if (!todoList.includes(toname)) {
      const finalToDoList = [...todoList, toname];
      console.log(toname);
      setToDoList(finalToDoList);
      e.target.toname.value = "";
    } else {
      alert("already exits");
    }
  };
  let list = todoList.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setToDoList={setToDoList}
      />
    );
  });
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" />
        <button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default App;

function ToDoListItems({ value, indexNumber, todoList, setToDoList }) {
  const [status, setStatus] = useState(false);
  const deleteRow = () => {
    let finalToDoList = todoList.filter((v, i) => i !== indexNumber);
    setToDoList(finalToDoList);
  };

  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
