import React from "react";
import Copyright from "./Copyright";
import { Container, Typography } from "@mui/material";

export default function Crud() {
  return (
    <Container>
      <Typography variant="h3" component="h1" align="center">
        CRUD Application
      </Typography>
      <Copyright />
    </Container>
  );
}
