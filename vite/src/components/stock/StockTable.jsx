import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const StockTable = ({stock}) => {


  const columns = [
    {
      name: "stock_id",
      label:"Stock Id",
      options: {
        customBodyRender: (value) => (
          <div style={{ textAlign: "center" }}>{value}</div>
        ),
      },
    },
    {
      name: "product_id",
      label:"Product Id",
      options: {
        customBodyRender: (value) => (
          <div style={{ textAlign: "center" }}>{value}</div>
        ),
      },
    },
    {
      name: "product_name",
      label:"Product Name",
      options: {
        customBodyRender: (value) => (
          <div style={{ textAlign: "center" }}>{value}</div>
        ),
      },
    },
    {
      name: "stock_count",
      label:"Stock count",
      options: {
        customBodyRender: (value) => (
          <div style={{ textAlign: "center" }}>{value}</div>
        ),
      },
    },
    
    {
      name: "quickActions", // New column for quick actions
      label:"Manage Stock",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          // Create action buttons for each row
          return (
            <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
              <IconButton
                onClick={() => handleInfoClick(tableMeta.rowIndex)}
                color="primary"
              >
                <InfoIcon />
              </IconButton>
              <IconButton
                onClick={() => handleEditClick(tableMeta.rowIndex)}
                color="secondary"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => handleDeleteClick(tableMeta.rowIndex)}
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          );
        },
      },
    },
  ];



  const options = {
    selectableRows: false,
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
    responsive: "scroll",
    download: true,
    print: true,
    viewColumns: true,
  };





  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: "Poppins",
      },
      palette: {
        background: {
          paper: "#1e293b",
          default: "#0f172a",
        },
        mode: "dark",
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: "10px 4px",
            },
            body: {
              padding: "7px 15px",
              color: "e2e8f0",
            },
          },
        },
      },
    });

  return (
    <div>
      <div className="bg-0 grid place-items-center">
        <div className="w-full sm:w-10/12 max-w-4xl">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Stock Outlook"}
              data={stock}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default StockTable;
