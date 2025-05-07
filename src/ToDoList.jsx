import React, { useState, useEffect } from "react";
import axios from "axios";

const ToDoList = () => {
  const [toDos, setToDos] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setToDos(responseTodos);
    });
  }, []);

  return (
    <div>
      <h1> To-Do List</h1>
      {toDos &&
        toDos.map((todo) => {
          const { id, userId, title } = todo;
          return (
            <div key={id}>
              <h5> {title} </h5>
              <h6> Assigned to user: {userId} </h6>
            </div>
          );
        })}
    </div>
  );
};

export default ToDoList;
