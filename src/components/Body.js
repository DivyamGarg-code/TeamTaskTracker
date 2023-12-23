import React,{useState} from 'react'
import TaskMainContainer from './TaskMainContainer'
import { useTaskData } from '../utils/useTaskData';
import Header from './Header';

function Body() {

    const [filteredData, setFilteredData] = useState(null);
    useTaskData(setFilteredData);
    return (
        filteredData && <div>
            <Header setFilteredData={setFilteredData}/>
            <div className='taskMainContainer'>
                {filteredData.map(([title, taskList], index) => {
                    return <TaskMainContainer key={index} title={title} taskList={taskList} />
                })}
            </div>
        </div>
    )
}

export default Body