import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/shared/header/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
      <Header title="DASHBOARD" subTitle="Welcome to your Dashboard" />
    </Box>
  );
};

export default Dashboard;
