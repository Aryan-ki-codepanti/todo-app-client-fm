import React, { useContext } from "react";
import TodoContext from "../../Context/todo/TodoContext";
import "./TodoList.css";

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div className="todoListBox">
            <div className="todoList">
                {todos.map((todo, i) => (
                    <div className="todoBox">
                        <div className="todoStatus todo-check">
                            <div className="todo-check-inner"></div>
                        </div>

                        <div>
                            <p>{todo.task}</p>
                        </div>

                        <div className="cross"></div>
                    </div>
                ))}
            </div>
            <div className="todoActions"></div>
        </div>
    );
};

export default TodoList;
