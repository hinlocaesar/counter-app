import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <spance className="badge badge pill badge-secondary">
          {totalCounters}
        </spance>
      </a>
    </nav>
  );
};

export default NavBar;
