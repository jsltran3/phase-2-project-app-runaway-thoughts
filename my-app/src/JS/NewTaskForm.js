//user interactions with events on the webpage.
// { title: "Title 1", content: "Content 1", author: "Author1" },

import React from "react";

const submitForm = event => {
  event.preventDefault();

  let task = {
      title: titleInput().value,
      notes: notesInput().value
  }
  loadTasks.push(task);
  displayTask(task);
}

const loadTasks = () => {

  fetch('http://localhost:3000/tasks')
    //send a request and THEN once it comes back with a response/promise
    //we're going to parse that response out of that promise
    //.then always takes back callbacks
    . then(resp => resp.json()) 
    //this will bring in the data
    . then(data => data.json())
    

  loadTasks.forEach(task => displayTask(task)) //do something?
}

document.addEventListener('DOMContentLoaded', event => {
  attachSubmitFormEvent();
  loadTasks();
})

export default NewTaskForm;