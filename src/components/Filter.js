import React from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search} // Use search prop as value for input field
        onChange={(event) => onSearchChange(event.target.value)} // Call onSearchChange callback when input changes
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
