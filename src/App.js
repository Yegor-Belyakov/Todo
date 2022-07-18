import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import InputField from "./components/InputField";
import { addNewTodo, fetchTodos } from "./components/store/todoSlice";
import TodoList from "./components/TodoList";

function App() {
  
  const [text, setText] = useState("");
  const {status, error} = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addNewTodo(text))
    setText('')
        }
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])
 
  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask}v/>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
