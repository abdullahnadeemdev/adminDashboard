import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../../data/mockData";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/shared/Header";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={isDashboard ? "0" : "20px"}>
      {!isDashboard && <Header title="Bar Chart" subtitle="Simple Bar Chart" />}

      {/* When on dashboard, we use a smaller fixed height or 100% of parent */}
      <Box height={isDashboard ? "250px" : "75vh"}>
        <ResponsiveBar
          data={data}
          theme={{
            axis: {
              domain: { line: { stroke: colors.grey[100] } },
              legend: { text: { fill: colors.grey[100] } },
              ticks: {
                line: { stroke: colors.grey[100], strokeWidth: 1 },
                text: { fill: colors.grey[100] },
              },
            },
            legends: { text: { fill: colors.grey[100] } },
            tooltip: { container: { color: colors.primary[500] } },
          }}
          keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
          indexBy="country"
          margin={
            isDashboard
              ? { top: 10, right: 10, bottom: 40, left: 30 }
              : { top: 50, right: 130, bottom: 50, left: 60 }
          }
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "country",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "food",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          enableLabel={!isDashboard}
          labelSkipWidth={12}
          labelSkipHeight={12}
          legends={
            isDashboard
              ? []
              : [
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                  },
                ]
          }
          role="application"
        />
      </Box>
    </Box>
  );
};

export default BarChart;
