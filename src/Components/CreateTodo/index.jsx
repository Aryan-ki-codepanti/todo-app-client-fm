import React from "react";
import "./CreateTodo.css";

const CreateTodo = () => {
    return (
        <div className="createTodoBox">
            <div className="todoStatus"></div>
            <div className="createTodoInput">
                <input type="text" placeholder="Create a new todo..." />
            </div>
        </div>
    );
};

export default CreateTodo;
