import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = ({ children }) => {
    // todos = [
    // { task : String, completed: boolean },..
    // ]
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodosLocal = () => {
            const res = localStorage.getItem("todos");
            if (!res) setTodos(prev => []);
            else setTodos(prev => JSON.parse(res));
            console.log("todos fetched");
        };

        fetchTodosLocal();
    }, []);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoState;
