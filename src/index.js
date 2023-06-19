import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { initietStore } from "./store/store";
import { taskComleted, titleChange, taskDeleted } from "./store/action";

const store = initietStore();

const App = () => {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);
  const comletedTask = (id) => {
    store.dispatch(taskComleted(id));
  };

  const changeTitle = (taskId) => {
    store.dispatch(titleChange(taskId));
  };
  const deleteTask = (taskId) => {
    console.log(taskId);
    store.dispatch(taskDeleted(taskId));
  };

  return (
    <>
      <h1>Redux</h1>
      <button onClick={comletedTask}>completed</button>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => comletedTask(el.id)}>completed</button>
            <button onClick={() => changeTitle(el.id)}>changeTitle</button>
            <button onClick={() => deleteTask(el.id)}>deletedtask</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
