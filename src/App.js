import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import InputField from "./components/InputField";
import { addTodo } from "./components/store/todoSlice";
import TodoList from "./components/TodoList";

function App() {
  
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
        }
 
 
  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask}v/>

      <TodoList />
    </div>
  );
}

export default App;
