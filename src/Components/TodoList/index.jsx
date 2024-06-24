import React, { useContext } from "react";
import TodoContext from "../../Context/todo/TodoContext";
import "./TodoList.css";

const TodoList = () => {
    const { todos, setTodos } = useContext(TodoContext);

    const handleTodoDone = (e, idx) => {
        const newTodos = [];

        todos.forEach((todo, i) => {
            if (i === idx) {
                newTodos.push({ ...todo, completed: !todo.completed });
            } else newTodos.push(todo);
        });

        // state change
        setTodos(prev => newTodos);

        // local storage change
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const handeTodoDelete = (e, idx) => {
        const delTodos = todos.filter((todo, i) => i !== idx);
        setTodos(prev => delTodos);

        // local storage change
        localStorage.setItem("todos", JSON.stringify(delTodos));
    };

    return (
        <div className="todoListBox">
            <div className="todoList">
                {todos.map(({ task, completed }, i) => (
                    <div className={`todoBox ${completed && "completed"}`}>
                        <div
                            onClick={e => handleTodoDone(e, i)}
                            className="todoStatus todo-check"
                        >
                            <div className="todo-check-inner"></div>
                        </div>

                        <div onClick={e => handleTodoDone(e, i)}>
                            <p>{task}</p>
                        </div>

                        <div
                            className="cross"
                            onClick={e => handeTodoDelete(e, i)}
                        ></div>
                    </div>
                ))}
            </div>
            <div className="todoActions"></div>
        </div>
    );
};

export default TodoList;
