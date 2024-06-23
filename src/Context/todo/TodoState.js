import { useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = ({ children }) => {
    // todos = [
    // { task : String, completed: boolean },..
    // ]
    const [todos, setTodos] = useState([]);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoState;
