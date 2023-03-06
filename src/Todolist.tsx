import React, {useState} from "react";


type PropsType = {
    title: string
    tasks: TaskType[]
    deleteTask: (id: number) => void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type Filter = "All" | "Active" | "Completed";


function Todolist({title, tasks, deleteTask}: PropsType) {
    let filteredTasks = tasks;

    let [filterValue, setFilterValue] = useState<Filter>("All");


    function filterTasks(filterState: Filter) {
        setFilterValue(filterState);
    }


    if (filterValue === "Active") {
        filteredTasks = filteredTasks.filter(task => !task.isDone);
    } else if (filterValue === "Completed") {
        filteredTasks = filteredTasks.filter(task => task.isDone);
    }


    const tasksList = filteredTasks.map(task => {
        return (
            <li key={task.id}>
                <button onClick={() => deleteTask(task.id)} type="button">Delete</button>
                <input checked={task.isDone} type="checkbox"/>
                <span>{task.title}</span>
            </li>
        )
    })


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <button onClick={() => filterTasks("All")}>All</button>
                <button onClick={() => filterTasks("Active")}>Active</button>
                <button onClick={() => filterTasks("Completed")}>Completed</button>
            </div>
        </div>
    )
}


export default Todolist;