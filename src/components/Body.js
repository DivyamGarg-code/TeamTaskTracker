import React, { useState } from 'react'
import TaskMainContainer from './TaskMainContainer'
import { useTaskData } from '../utils/useTaskData';
import Header from './Header';

function Body() {
    const groupedValue=localStorage["data"] ? JSON.parse(localStorage.getItem("grouping")) : 'priority'
    const sortingValue=localStorage["data"] ? JSON.parse(localStorage.getItem("sorting")) : 'title'
    const filteredDataValue=localStorage["data"] ? Object.entries(JSON.parse(localStorage.getItem("groupedData"))) : null
    const [grouping, setGrouping] = useState(groupedValue); 
    const [sorting, setSorting] = useState(sortingValue);
    const [filteredData, setFilteredData] = useState(filteredDataValue);
    useTaskData(setFilteredData, grouping, sorting);
    return (
        filteredData && <div>
            <Header setFilteredData={setFilteredData} grouping={grouping} setGrouping={setGrouping} sorting={sorting} setSorting={setSorting} />
            <div className='taskMainContainer'>
                {filteredData.map(([title, taskList], index) => {
                    return <TaskMainContainer key={index} title={title} taskList={taskList} />
                })}
            </div>
        </div>
    )
}

export default Body