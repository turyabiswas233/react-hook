import React from "react";
import { ACTION } from "../pages/index";

function Todos({ id, todo, isComplete, dispatch }) {
  return (
    <div className="eachTodo">
      <li className="flex-list">
        <p style={isComplete ? {color:"#777"}:{color: "black"}}>{todo}</p>

        <button
          className="complete"
          onClick={() => {
            dispatch({
              type: ACTION.TOGGOLE_TODO,
              payload: { id: id },
            });
            console.log("complete:", isComplete);
          }}
        >
          Complete
        </button>
        <button
          className={isComplete ? "delete" : "deleteNot"}
          disabled={!isComplete}
          title={
            isComplete
              ? "click to delete your task"
              : "please complete your task before you delete it!"
          }
          onClick={() => {
            dispatch({ type: ACTION.DELETE_TODO, payload: { id: id } });
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default Todos;
