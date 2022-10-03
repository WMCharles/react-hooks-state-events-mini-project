import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete, deletedItem}) {

  const displayTasks = tasks.map((task, index)=> (
    <Task 
      key={index} 
      text={task.text}
      category={task.category}
      onDelete={onDelete}
      deletedItem={deletedItem}
      />
  )
)

  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;