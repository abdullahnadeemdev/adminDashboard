import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Toolbar } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/shared/header/Header";
import { useTheme } from "@mui/material";
// import { GridToolbar } from "@mui/x-data-grid/internals";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarID", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "EMAIL",
      flex: 1,
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    {
      field: "address",
      headerName: "ADDRESS",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
    // {
    //   field: "access",
    //   headerName: "Access Level",
    //   flex: 1,
    //   renderCell: ({ row: { access } }) => {
    //     return (
    //       <Box
    //         width="60%"
    //         m="5px auto"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         backgroundColor={
    //           access === "admin"
    //             ? colors.greenAccent[500]
    //             : colors.greenAccent[700]
    //         }
    //       ></Box>
    //     );
    //   },
    // },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subTitle="List of Contacts For Future Reference"
      />
      <Box
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-virtualScrollerContent": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[500],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[500],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
