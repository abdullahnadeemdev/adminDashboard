import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subTitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 10px">
      <Box display="flex" justifyContent="space-between" alignContent="center">
        <Box>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[300] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} size="40" />
        </Box>
      </Box>

      {/* BOTTOM ROW: Subtitle (Left) and Increase (Right) */}
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h7"
          mt="2px"
          sx={{ color: colors.greenAccent[500] }}
        >
          {subTitle}
        </Typography>

        <Typography
          variant="h7"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
