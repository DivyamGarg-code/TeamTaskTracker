import React from 'react'
import progressImage from '../images/Progress.svg';

function TaskCard({ id, priority, status, title, userId, userName }) {
    const getRandomNo = () => {
        return Math.floor(Math.random() * 256)
    }
    const getRandomColor = () => {
        const randomColor = `rgba(${getRandomNo()}, ${getRandomNo()}, ${getRandomNo()}, 1)`;
        return randomColor;
    };

    const profileIconStyle = {
        backgroundColor: getRandomColor(),
    };
    return (
        <div className="taskCard">
            <div className="topLine">
                <span className="h2">{id}</span>
                <div className="profileIcon" style={profileIconStyle} title={userName}>{userName.charAt(0)}
                    <div className="active"></div>
                </div>
            </div>
            <div className="middleLine">
                {/* <img className="taskIcon" src={progressImage} alt="error" /> */}
                <span className="h2">{title}</span>
            </div>
            <div className="bottomLine">
                {/* <img className="taskIcon" src={progressImage} alt="error" /> */}
                <div className="tagContainer">
                    <div className="tagCircle"></div>
                    <span className="h3">Feature Request</span>
                </div>
            </div>
        </div>
    )
}

export default TaskCard