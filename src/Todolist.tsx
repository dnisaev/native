import React, {useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasksProps: Array<TaskType>
    removeTask: (taskId: number) => void
}

export function Todolist(props: PropsType) {

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksData = props.tasksProps

    if (filter === "active") {
        tasksData = tasksData.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksData = tasksData.filter(t => t.isDone === true);
    }
    if (filter === "empty") {
        tasksData = [];
    }
    if (filter === "firstThree") {
        tasksData = tasksData.slice(0, 3)
    }

    let changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                tasksData.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={ () => { changeFilter("all") } }>
                All
            </button>
            <button onClick={ () => { changeFilter("active") } }>
                Active
            </button>
            <button onClick={ () => { changeFilter("completed") } }>
                Completed
            </button>
            <button onClick={ () => {changeFilter("empty") } }>
                Delete all tasks
            </button>
            <button onClick={ () => {changeFilter("firstThree")}}>
                Only first three
            </button>
        </div>
    </div>
}

























//------------------------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {FilterValuesType} from './App';
//
// type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }
//
// type PropsType = {
//     title: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: number) => void
//     //changeFilter: (value: FilterValuesType) => void
//     deleteAllTasks:()=>void
// }
//
// export function Todolist(props: PropsType) {
//
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     let tasksForTodolist = props.tasks;
//
//     if (filter === "three") {
//         tasksForTodolist = props.tasks.filter(t => t.id<4);
//     }
//     if (filter === "active") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === false);
//     }
//     if (filter === "completed") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === true);
//     }
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//     return <div>
//         <h3>{props.title}</h3>
//         <div>
//             <input/>
//             <button>+</button>
//         </div>
//         <ul>
//             {
//                 tasksForTodolist.map(t => <li key={t.id}>
//                     <input type="checkbox" checked={t.isDone}/>
//                     <span>{t.title}</span>
//                     <button onClick={ () => { props.removeTask(t.id) } }>x</button>
//                 </li>)
//             }
//         </ul>
//         <button onClick={()=>props.deleteAllTasks()}>DELETE ALL TASKS</button>
//         <div>
//             <button onClick={ () => { changeFilter("three") } }>
//                 Give me the first three
//             </button>
//             <button onClick={ () => { changeFilter("all") } }>
//                 All
//             </button>
//             <button onClick={ () => { changeFilter("active") } }>
//                 Active
//             </button>
//             <button onClick={ () => { changeFilter("completed") } }>
//                 Completed
//             </button>
//         </div>
//     </div>
// }