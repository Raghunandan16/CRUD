import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  styled,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

import { getUsers, deleteUser } from "../service/api.js";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
  background-color: black;
  & > th {
    color: white;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: "10px" }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  deleteUserDetails(user._id);
                }}
              >
                Delete
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
}
