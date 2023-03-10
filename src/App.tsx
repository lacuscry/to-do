import React, {useState} from "react";
import "./App.css";
import Todolist from "./Todolist";


function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]);


    function deleteTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} deleteTask={deleteTask}/>
        </div>
    );
}


export default App;
