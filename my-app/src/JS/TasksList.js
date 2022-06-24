import React, { useEffect, useState } from "react";
import TasksFilter from "./TasksFilter";
import Tasks from "./Tasks";


function TasksList() {
    const [tasks, setTasks] = useState([]); 
    const [selectedCategory, setSelectedCategory] = useState("All");

    function handleCategoryChange() {
      setSelectedCategory(selectedCategory)
    }

    //fetch task list 
    useEffect(() => {
        fetch("http://localhost:3000/tasks")
            .then((resp) => resp.json())
            .then((tasks) => setTasks(tasks));
        }, []);
    
        //attempt #1 at getting task to update 
        //i don't understand this logic and how it applies
    function handleUpdateTask(updatedTask) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === updatedTask.id) {
                return updatedTask;
            } else {
                return task;
            }
        });
        setTasks(updatedTasks);
    }

    // function handleUpdateTask(updatedTask) {
    //     const updatedTasks = tasks.map((task) => task);
    //     setTasks(updatedTasks);
    // }
        
    const tasksToDisplay = tasks.filter((task => {
        if (handleCategoryChange === "All") return true;

        return task.selectedCategory === handleCategoryChange;
    }));


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
            <ul>
                {tasksToDisplay.map((task) => (
                    <Tasks
                        key={task.id}
                        task={task}
                        onUpdateTask={handleUpdateTask}
                    />
                ))}

            </ul>
            {tasks.map((task) => {
                console.log({task})
                return(
                    <div>
                        { task.name }
                    </div>
                )
            })}
            <footer>Footer: Maybe instructions at the bottom or something</footer>
        </div>
    )
}

export default TasksList;