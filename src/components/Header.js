import React, {useState } from 'react';
import useFiltrationBasedTaskUpdation from '../utils/useFiltrationBasedTaskUpdation';

const Header = ({setFilteredData}) => {
  const [grouping, setGrouping] = useState('status'); // Default grouping value
  const [sorting, setSorting] = useState('title'); // Default sorting value
  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSorting(event.target.value);
  };

  useFiltrationBasedTaskUpdation(grouping, sorting,setFilteredData);

  return (
    <div>
      <div>
        <label htmlFor="grouping">Grouping:</label>
        <select id="grouping" value={grouping} onChange={handleGroupingChange}>
          <option value="status">Status</option>
          <option value="userId">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label htmlFor="sorting">Sorting:</label>
        <select id="sorting" value={sorting} onChange={handleSortingChange}>
          <option value="title">Title</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      {/* The rest of your component */}
    </div>
  );
};

export default Header;
