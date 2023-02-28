import React from "react";


type PropsType = {
    title: string,
    body?: number,
    tasks: TasksType[]
}

type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}


const Todolist = (props: PropsType) => {
    const tasksList = props.tasks.map(task => {
        return (
            <li>
                <input key={task.id} type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
            </li>
        )
    });


    return (
        <div>
            <h3>{props.title}</h3>
            <h3>{props.body}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}


export default Todolist;