import React, { useContext } from "react";
import "./TodoFilter.css";
import FilterContext from "../../Context/filter/FilterContext";

const TodoFilter = () => {
    const { filter, setFilter } = useContext(FilterContext);

    const handleFilterChange = e =>
        setFilter(prev => e.target.className.split(" ")[0]);

    return (
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
    );
};

export default TodoFilter;
