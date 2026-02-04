import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import Header from "../../components/shared/Header";
import { geoFeatures } from "../../data/mockGeoFeautres";
import { mockGeographyData as data } from "../../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* 1. Only show Header if NOT on Dashboard */}
      {!isDashboard && (
        <Box mb="20px">
          <Header title="Geography Chart" subTitle="Simple Geography Chart" />
        </Box>
      )}

      {/* 2. Fix Height and Border: 
          On Dashboard, we want it to fill the container (100% or fixed height) 
          and remove the border so it looks integrated. */}
      <Box
        height={isDashboard ? "200px" : "75vh"}
        border={isDashboard ? "none" : `1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <ResponsiveChoropleth
          data={data}
          theme={{
            axis: {
              domain: {
                line: { stroke: colors.grey[100] },
              },
              legend: {
                text: { fill: colors.grey[100] },
              },
              ticks: {
                line: { stroke: colors.grey[100], strokeWidth: 1 },
                text: { fill: colors.grey[100] },
              },
            },
            legends: {
              text: { fill: colors.grey[100] },
            },
            tooltip: {
              container: {
                color: colors.primary[500],
              },
            },
          }}
          features={geoFeatures.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          /* 3. Scale Fix: Maps need much lower scale for small dashboard boxes */
          projectionScale={isDashboard ? 40 : 150}
          projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          borderWidth={1.5}
          borderColor="#ffffff"
          legends={
            !isDashboard
              ? [
                  {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: colors.grey[100],
                    itemOpacity: 0.85,
                    symbolSize: 18,
                  },
                ]
              : undefined
          }
        />
      </Box>
    </Box>
  );
};

export default GeographyChart;
