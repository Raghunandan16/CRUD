import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormControl)`
  display: flex;
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const defaultObject = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

export default function AddUser() {
  const [user, setUser] = useState(defaultObject);
  const navigate = useNavigate();
  function onValueChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function addUserDetails() {
    await addUser(user);
    navigate("/all");
  }
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add user
        </Button>
      </FormControl>
    </Container>
  );
}
