import React, { useState } from "react";

function TaskInput({ onAddTask }) {
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);

    const handleAddTask = () => {
        if (!input.trim()) {
            setError("The field cannot be empty");
            return;
        }
        onAddTask(input);
        setInput("");
        setError(null);
    };

    return (
        <div>
          <label htmlFor="taskInput">Enter a task:</label>
          <input
            type="text"
            id="taskInput"
            name="taskInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={handleAddTask}>Add</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default TaskInput;
