import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../../theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={color.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>

      <Typography variant="h5" color={color.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
