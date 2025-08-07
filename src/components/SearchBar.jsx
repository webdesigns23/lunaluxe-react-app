import React from "react";

export default function SearchBar({onSearch}) {
  return (
    <input
      type="text"
      placeholder="Search destination..."
      className="carousel-search"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

