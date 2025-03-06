import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useGetProducts from "../hooks/useGetProducts";

const TablePage = () => {
    const { products, loading, error } = useGetProducts();
    console.log("Prroducts",products)

  const [users, setusers] = useState([]);

  const columns = [
    {
      name: "id"

    },
    {
      name: "name"
    },
    {
      name: "buying_price"
    },
    {
      name: "selling_price",
    },
    {
        name: "stock_quantity"
      },
    {
      name: "quickActions", // New column for quick actions
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          // Create action buttons for each row
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <IconButton 
                onClick={() => handleInfoClick(tableMeta.rowIndex)} 
                color="primary">
                <InfoIcon />
              </IconButton>
              <IconButton 
                onClick={() => handleEditClick(tableMeta.rowIndex)} 
                color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton 
                onClick={() => handleDeleteClick(tableMeta.rowIndex)} 
                color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          );
        },
      }
    }
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setusers(data?.users)
      })
  }, []);

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

  const handleInfoClick = (index) => {
    const user = users[index];
    console.log("User info clicked:", user);
    // Here you can add functionality to show user details
  };

  const handleEditClick = (index) => {
    const user = users[index];
    console.log("Edit clicked for user:", user);
    // Here you can add functionality to open an edit form
  };

  const handleDeleteClick = (index) => {
    const user = users[index];
    console.log("Delete clicked for user:", user);
    // Here you can add functionality to delete the user
  };

  const getMuiTheme = () =>
    createTheme({
      typography: {
        fontFamily: "Poppins",
      },
      palette: {
        background: {
          paper: "#1e293b",
          default: "#0f172a"
        },
        mode: "dark"
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: "10px 4px"
            },
            body: {
              padding: "7px 15px",
              color: "e2e8f0"
            }
          }
        }
      }
    });

  return (
    <div>
      <div className="bg-slate-100 py-10 min-h-screen grid place-items-center">
        <div className="w-full sm:w-10/12 max-w-4xl">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Users List"}
              data={products}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
