import { Box, Typography } from "@mui/material";
import Header from "../../components/shared/header/Header";
import MyPie from "../../components/scenes/pieChart/Index";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Box height="75vh">
        <MyPie />
      </Box>
    </Box>
  );
};

export default Pie;
