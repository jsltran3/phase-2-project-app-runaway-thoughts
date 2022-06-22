import React, { useEffect, useState } from "react";
import TasksFilter from "./TasksFilter";


function Tasks() {
    const [tasks, setTasks] = useState([]); 
    const [selectedCategory, setSelectedCategory] = useState("All");

    //fetch task list 
    useEffect(() => {
        fetch("http://localhost:3000/tasks")
            .then((resp) => resp.json())
            .then((tasks) => setTasks(tasks));
        }, []);
    const tasksToDisplay = tasks.filter((item => {
        if (selectedCategory === "All") return true;

        return item.category === selectedCategory;
    }));

    function handleCategoryChange() {
        setSelectedCategory(selectedCategory)
    }

    console.log("Component rendering");

    return (
        <div>
            <p>I am tasks!</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <TasksFilter 
                category={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />
            <h3>Task Card</h3>
            <footer>Footer: Maybe instructions at the bottom or something</footer>
        </div>
    )
}

export default Tasks;