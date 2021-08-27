import React, { useState } from 'react';
import Form from "./component/Form";
import './App.css';


function App() {
  const [valueInput, setValueInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const submitHandler = (e) => {
    // stops form default behavior refresh
    e.preventDefault();

    if (valueInput.length === 0){
      return;
    }

    const todoItem = {
      text: valueInput,
      complete: false
    }

    // creating new array: contains previous todos plus one more added
    setTodoList([...todoList, todoItem])
    setValueInput("");
  };

  const deleteHandler = (deleteIndex) => {
    const filterTodoList = todoList.filter((todo, i) => {
      return i !== deleteIndex;
    });

    setTodoList(filterTodoList);
  }

  const toggleHandlerComplete = (idx) => {
    const updatedTodoList = todoList.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }

      return todo;
      })
    setTodoList(updatedTodoList);
  }

  return (
    <div style={{textAlign:"center"}}> 
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
       <input type="text" 
       onChange={(e) => {
         setValueInput(e.target.value);
       }}
       value={valueInput}/> 
       <div>
         <button>Add</button>
       </div>
      </form>

      {todoList.map((todo, i) => {
        return (
          <Form 
          key={i} 
          i={i}
          todo={todo}  
          toggleHandlerComplete={toggleHandlerComplete}
          deleteHandler={deleteHandler}
          />
          );
        })}
    </div>
  );
}

export default App;
