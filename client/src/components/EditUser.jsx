import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { getUser, editUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

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

export default function EditUser() {
  const [user, setUser] = useState(defaultObject);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };
  function onValueChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }
  async function editUserDetails() {
    await editUser(user, id);
    navigate("/all");
  }
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          Edit user
        </Button>
      </FormControl>
    </Container>
  );
}
