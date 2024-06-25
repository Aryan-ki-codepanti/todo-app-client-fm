import React, { useContext } from "react";
import "./TodoActions.css";
import TodoContext from "../../Context/todo/TodoContext";
import TodoFilter from "../TodoFilter";

const TodoActions = () => {
    const { todos, setTodos } = useContext(TodoContext);

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
            <TodoFilter />
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
