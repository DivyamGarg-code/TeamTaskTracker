import React, { useEffect } from 'react'

export const useFiltrationBasedTaskUpdation = (grouping, sorting,setFilteredData) => {
    function sortByTitle(a, b) {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    }
    function sortByPriority(a, b) {
        const priorityA = a.priority;
        const priorityB = b.priority;
        if (priorityA > priorityB) {
            return -1;
        }
        if (priorityA === priorityB) {
            return 0;
        }
        return 1;
    }
    const priorityData = {
        0: "No priority",
        1: "Low",
        2: "Medium",
        3: "High",
        4: "Urgent"
    }
    // -------------- Data Filteration Logic ------------------------
    // Grouping could be on the basis of user [userId],status or priority and Sorting on the basis of priority and title
    function getFilteredData(grouping, sorting, data, userData) {
        // Grouping the Data
        const groupedData = data.tickets.reduce((acc, ticket) => {
            let key;
            if (grouping === "userId") {
                key = userData[ticket[grouping]];
            } else if (grouping === "priority") {
                key = priorityData[ticket[grouping]];
            } else if (grouping === "status") {
                key = ticket[grouping];
            }
            if (acc[key]) {
                acc[key].push(ticket);
            } else {
                acc[key] = [];
                acc[key].push(ticket);
            }
            return acc;
        }, {});

        // Sorting Grouped Data
        Object.keys(groupedData).forEach((key) => {
            if (sorting === "title") {
                groupedData[key].sort(sortByTitle);
            } else if (sorting === "priority") {
                groupedData[key].sort(sortByPriority);
            }
        })
        // Update the data in local storage
        localStorage["groupedData"] = JSON.stringify(groupedData);
        setFilteredData(Object.entries(JSON.parse(localStorage.getItem("groupedData"))));
        return;
    }
    const data = JSON.parse(localStorage.getItem("data"));
    const userData = JSON.parse(localStorage.getItem("userData"));
    useEffect(() => {
        getFilteredData(grouping, sorting, data, userData);
        console.log(JSON.parse(localStorage.getItem("groupedData")));
    }, [grouping, sorting]);
}

export default useFiltrationBasedTaskUpdation
