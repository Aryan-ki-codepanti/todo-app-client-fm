import React, { useContext } from "react";
import "./TodoActions.css";
import TodoContext from "../../Context/todo/TodoContext";

const TodoActions = ({ filter, setFilter }) => {
    const { todos, setTodos } = useContext(TodoContext);

    const handleFilterChange = e =>
        setFilter(prev => e.target.className.split(" ")[0]);

    const handleClearCompleted = e => {
        const newTodos = todos.filter(todo => !todo.completed);

        // statechange
        setTodos(prev => newTodos);

        // localStorage update
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    return (
        <div className="todoActions">
            <div className="itemsLeft">
                {todos.filter(todo => !todo.completed).length} items left
            </div>
            <div className="todoFilter">
                <span
                    onClick={handleFilterChange}
                    className={`all ${filter === "all" ? "current" : ""}`}
                >
                    All
                </span>
                <span
                    onClick={handleFilterChange}
                    className={`active ${filter === "active" ? "current" : ""}`}
                >
                    Active
                </span>
                <span
                    onClick={handleFilterChange}
                    className={`completed ${
                        filter === "completed" ? "current" : ""
                    }`}
                >
                    Completed
                </span>
            </div>
            <div className="todoClear">
                <button
                    disabled={todos.filter(todo => todo.completed).length === 0}
                    onClick={handleClearCompleted}
                >
                    Clear Completed
                </button>
            </div>
        </div>
    );
};

export default TodoActions;
