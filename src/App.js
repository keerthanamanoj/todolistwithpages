import React, { useState } from 'react';
import './App.css';
import TimePickerFile from './components/TimePickerFile';

function App() {
  const [toDo, setToDo] = useState({
    nameForTodo: "",
    description: ""
  }
  );

  const [allToDo, setAllToDo] = useState([]);

  const deleteFunction = (id) => {
  }

  const insertData = () => {
    allToDo.push(toDo)
    setAllToDo(allToDo)
  }

  const typingHandler = (e) => {
    const { name, value } = e.target;
    setToDo({
      ...toDo,
      [name]: value
    })

  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>My Todos</h1>
      </div>

      <div className='d-flex'>
        <div className='form-control' style={{ marginInlineEnd: "45px" }}>
          <label className='' style={{ color: "white" }}>Title</label>
          <div className="input">
            <input
              value={toDo.nameForTodo}
              onChange={typingHandler}
              type="text"
              name="nameForTodo"
              placeholder="Add item..." />
          </div>
        </div>
        <div className='form-control'>
          <label className='' style={{ color: "white" }}>Description</label>
          <div className="input">
            <input
              value={toDo.description}
              onChange={typingHandler}
              type="text"
              name="description"
              placeholder="Add description..." />
          </div>
        </div>
        <i
          onClick={() => insertData()}
          className="fas fa-plus" ></i>
      </div>
      {/* Array show */}
      {console.log(allToDo, "allToDo")}

      <div className='' style={{ color: "white" }}>
        <p>Display got data</p>
        {allToDo?.map((item, index) => item.nameForTodo)}
      </div>
      
      <TimePickerFile/>

    </div>
  )
}

export default App