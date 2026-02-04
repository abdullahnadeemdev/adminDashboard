import { Box, Typography } from "@mui/material";
import Header from "../../components/shared/Header";
import MyPie from "../../components/Charts/PieChart";

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
