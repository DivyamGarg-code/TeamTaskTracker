import React from 'react'
import TaskHeader from './TaskHeader';
import TaskCard from './TaskCard';

const TaskMainContainer = ({title,taskList}) => {
    console.log(title,taskList);
    const userData=JSON.parse(localStorage.getItem("userData"))
    return (
        <div className="taskContainer">
            <TaskHeader title={title} taskCount={taskList.length}/>
            {taskList.map((obj,index)=>{
                const {id,priority,status,title,userId}=obj;
                const userName=userData[userId];
                return <TaskCard key={index} id={id} priority={priority} status={status} title={title} userId={userId} userName={userName}/>
            })}
        </div>
    )
}

export default TaskMainContainer
