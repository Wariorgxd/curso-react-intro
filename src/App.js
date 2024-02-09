import { TodoItem } from "./component/TodoItem";
import { TodoCounter } from "./component/TodoCounter.jsx";
import { TodoSearch } from "./component/TodoSearch.jsx";
import { TodoList } from "./component/TodoList.jsx";
import { CreateTodoButton } from "./component/CreateTodoButton.jsx";
import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

// const defaultTodos = [
//   { text: "Hola Amigo", completed: true },
//   { text: "Buenas noches", completed: false },
//   { text: "nueva tarera", completed: false },
//   { text: "Debo escribir bien", completed: false },
//   { text: "Acabar el curso de react", completed: true },
//   { text: "LALALALA", completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodo = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(searchValue)
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodo.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
