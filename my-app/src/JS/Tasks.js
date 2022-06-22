import React, { useEffect, useState } from "react";

function Tasks() {
    const [tasks, setTasks] = useState([]); 

    //fetch task list 
    useEffect(() => {
        fetch("http://localhost:3000/tasks")
            .then((resp) => resp.json())
            .then((items) => console.log(items));
        }, []);
    

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

            <h3>Task Card</h3>
            <footer>Footer: Maybe instructions at the bottom or something</footer>
        </div>
    )
}

export default Tasks;