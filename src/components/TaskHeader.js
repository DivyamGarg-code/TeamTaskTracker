import React from 'react'
import progressImage from '../images/Progress.svg';

function TaskHeader({ title, taskCount }) {
    return (
        <div className="taskHeader h2">
            <div className="left">
                {/* <img className="taskIcon" src="https://ik.imagekit.io/teamTaskTracker/images/Done.svg?updatedAt=1703340502424" alt="error" /> */}
                <span>{title}<span className='text-gray-600'>{" [" + taskCount + "]"}</span></span>
            </div>
            <div className="right">
                <img title="add" className="taskIcon" src="https://ik.imagekit.io/teamTaskTracker/images/Add.svg?updatedAt=1703340502415" alt="error" />
                <img title="options" className="taskIcon" src="https://ik.imagekit.io/teamTaskTracker/images/Options.svg?updatedAt=1703340502416" alt="error" />
            </div>
        </div>
    )
}

export default TaskHeader