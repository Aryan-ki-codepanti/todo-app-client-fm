import React, { useContext, useState } from "react";
import TodoContext from "../../Context/todo/TodoContext";
import "./TodoList.css";
import TodoActions from "../TodoActions";

const TodoList = () => {
    const { todos, setTodos } = useContext(TodoContext);

    const [filter, setFilter] = useState("all");

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
                {filter === "all" &&
                    todos.map(({ task, completed }, i) => (
                        <div
                            key={i}
                            className={`todoBox ${
                                completed ? "completed" : ""
                            }`}
                        >
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
                {filter === "completed" &&
                    todos
                        .filter(todo => todo.completed)
                        .map(({ task, completed }, i) => (
                            <div
                                key={i}
                                className={`todoBox ${
                                    completed ? "completed" : ""
                                }`}
                            >
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
                {filter === "active" &&
                    todos
                        .filter(todo => !todo.completed)
                        .map(({ task, completed }, i) => (
                            <div
                                key={i}
                                className={`todoBox ${
                                    completed ? "completed" : ""
                                }`}
                            >
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
            <TodoActions filter={filter} setFilter={setFilter} />
        </div>
    );
};

export default TodoList;
