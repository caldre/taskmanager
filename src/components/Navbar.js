import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <a href="/"> Calendar</a>
        <a href="/personnel"> Personnel</a>
        <a href="/tasks"> Tasks</a>
      </ul>
    </div>
  );
};

export default Navbar;
