import React, { useContext, useState } from "react";
import "./CreateTodo.css";
import TodoContext from "../../Context/todo/TodoContext";

const CreateTodo = () => {
    const defaultTodo = {
        completed: false,
        task: ""
    };

    const { setTodos } = useContext(TodoContext);

    const [todo, setTodo] = useState(defaultTodo);

    const handleOnKeyDown = e => {
        //enter pressed
        if (e.keyCode === 13) {
            setTodos(prev => [...prev, todo]);
            setTodo(prev => defaultTodo);
            console.log("Todo Added");
        }
    };
    const handleOnChange = e => {
        // console.log(e.keyCode);
        setTodo(prev => ({ ...prev, task: e.target.value }));
    };

    return (
        <div className="createTodoBox">
            <div className="todoStatus"></div>
            <div className="createTodoInput">
                <input
                    value={todo.task}
                    type="text"
                    placeholder="Create a new todo..."
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown}
                />
            </div>
        </div>
    );
};

export default CreateTodo;
