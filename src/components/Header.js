import React, { useState } from 'react';
import useFiltrationBasedTaskUpdation from '../utils/useFiltrationBasedTaskUpdation';

const Header = ({ setFilteredData, grouping, sorting,setGrouping, setSorting }) => {
  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSorting(event.target.value);
  };

  useFiltrationBasedTaskUpdation(grouping, sorting, setFilteredData);

  return (
    <div>
      <div className='px-10 py-5 rounded-lg shadow-md flex flex-col gap-2 '>
        <div className='flex gap-1'>
          <label htmlFor="grouping">Grouping</label>
          <select id="grouping" value={grouping} onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="userId">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='flex gap-1'>
          <label htmlFor="sorting">Sorting</label>
          <select id="sorting" value={sorting} onChange={handleSortingChange}>
            <option value="title">Title</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>

      {/* The rest of your component */}
    </div>
  );
};

export default Header;
