import React from "react";



function Tasks({ task, onUpdateTask }) {
    // fetch("http://localhost:3000/tasks"), {
    //     method: "POST",
    //     headers: {
    //         "Accept": "application/json", 
    //         "Content-Type": "application/json"
    //     }, 
    //     body: JSON.stringify( tasks )
    // }


    console.log("Component rendering");

    return (
        <div>
            <span>{task.name}</span>
            {/* <span>{tasks.category}</span> */}
            <p>I am tasksList!</p>

        </div>
    )
}

export default Tasks;