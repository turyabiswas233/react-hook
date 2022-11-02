import { useReducer, useState } from "react";
import Todos from "../Components/Todos";

//set default variables
export const ACTION = {
  TOGGOLE_TODO: "toggle-todo",
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
};

function Home() {
  const [todo, seTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  function reducer(todos, action) {
    switch (action.type) {
      case ACTION.ADD_TODO:
        return [...todos, newTodos(action.payload.todo)];
      case ACTION.TOGGOLE_TODO:
        return todos?.map((e) => {
          if (e?.id === action.payload.id) {
            return { ...e, complete: !e?.complete };
          }
          return { ...e };
        });
      case ACTION.DELETE_TODO:
        return todos?.filter((e) => e?.id !== action.payload.id);
      default:
        break;
    }
  }

  function newTodos(todo) {
    return { id: Date.now(), todo: todo, complete: false };
  }

  //submit handle
  function handleSubmit(e) {
    e.preventDefault();
    if (todo == "") return;
    dispatch({ type: ACTION.ADD_TODO, payload: { todo: todo } });
    seTodo("");
  }
  return (
    <>
      <h1
        style={{
          textShadow: "10px 5px 10px red",
          textTransform: "uppercase",
          letterSpacing: "-.2px",
          margin: "10px auto",
        }}
      >
        A simple todo app
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            type="text"
            value={todo}
            onChange={(e) => {
              seTodo(e.target.value);
            }}
            placeholder="Add a task..."
          />
          <button type="submit">submit</button>
        </div>
      </form>
      <div className="todo-list">
        {state == 0 ? (
          <>No task </>
        ) : (
          state?.map((todo) => {
            console.log(todo?.id);
            return (
              <Todos
                key={todo?.id}
                id={todo?.id}
                todo={todo?.todo}
                isComplete={todo?.complete}
                dispatch={dispatch}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default Home;
