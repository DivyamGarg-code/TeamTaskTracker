import React, { useEffect } from 'react'

export const useTaskData = (setFilteredData) => {
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
    // Save the data in local storage
    if (!localStorage["data"]) {
      localStorage.setItem("groupedData", JSON.stringify(groupedData));
      localStorage.setItem("data", JSON.stringify(data));
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("priorityData", JSON.stringify(priorityData));
    } else {
      localStorage["groupedData"] = JSON.stringify(groupedData);
      localStorage["userData"] = JSON.stringify(userData);
      localStorage["priorityData"] = JSON.stringify(priorityData);
    }
    return groupedData;
  }
  const getTaskData = async () => {
    const data = await fetch("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers");
    const json = await data.json();
    // console.log(json);

    // User Names corresponding to the userId
    const userData = json.users.reduce((acc, user) => {
      if (!acc[user.id]) {
        acc[user.id] = user.name;
      }
      return acc;
    }, {});

    getFilteredData("status","title", json, userData); // By Default
    setFilteredData(Object.entries(JSON.parse(localStorage.getItem("groupedData"))));

  }
  useEffect(() => {
    getTaskData();
  }, []);
}













//   console.log("dnhfidhs",userData["usr-2"].charAt(0)); 