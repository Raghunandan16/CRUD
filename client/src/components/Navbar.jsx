import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background: black;
  position: static;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 21px;
  color: inherit;
  text-decoration: none;
`;
function Navbar() {
  return (
    <Header>
      <Toolbar>
        <Tabs to="/">CRUD</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="/add">Add User</Tabs>
      </Toolbar>
    </Header>
  );
}

export default Navbar;
