import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useGetProducts from "../../hooks/useGetProducts";

const ProductTable = ({products}) => {
  

  const [users, setusers] = useState([]);
  const [openModal, setOpenModal] = useState(false); // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product for details or editing
  const [isEditing, setIsEditing] = useState(false); // Flag to check if we are in "edit" mode or "view" mode
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false); // Delete confirmation dialog state
  const [productToDelete, setProductToDelete] = useState(null); // Store the product to be deleted

  const columns = [
    {
      name: "id",
      label: "Product Id",
      options: {
        customBodyRender: (value) => (
          <div style={{ textAlign: "center" }}>{value}</div>
        ),
      },
    },
    {
      name: "name",
      label: "Product Name",
      options: {
        customBodyRender: (value) => (
          <div style={{ textAlign: "center" }}>{value}</div>
        ),
      },
    },
    {
      name: "buying_price",
      label: "Buying Price",
      options: {
        customBodyRender: (value) => (
          <div style={{ textAlign: "center" }}>{value}</div>
        ),
      },
    },
    {
      name: "selling_price",
      label: "Selling Price",
      options: {
        customBodyRender: (value) => (
          <div style={{ textAlign: "center" }}>{value}</div>
        ),
      },
    },
    {
      name: "quickActions", // New column for quick actions
      label: "Manage Product",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          // Create action buttons for each row
          return (
            <div
              style={{ display: "flex", gap: "8px", justifyContent: "center" }}
            >
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

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setusers(data?.users);
      });
  }, []);

  const options = {
    selectableRows: 'none',
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
    responsive: "scroll",
    download: true,
    print: true,
    viewColumns: true,
  };

  const handleInfoClick = (index) => {
    const product = products[index];
    setSelectedProduct(product); // Set the selected product
    setIsEditing(false); // Set the modal to "view" mode
    setOpenModal(true); // Open the modal for info
  };

  const handleEditClick = (index) => {
    const product = products[index];
    setSelectedProduct(product); // Set the selected product for editing
    setIsEditing(true); // Set the modal to "edit" mode
    setOpenModal(true); // Open the modal for editing
  };

  const handleDeleteClick = (index) => {
    const product = products[index];
    setProductToDelete(product); // Set the product to be deleted
    setOpenDeleteConfirm(true); // Open the delete confirmation dialog
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  const handleSaveEdit = () => {
    // Logic to save the edited product data
    console.log("Saving product data:", selectedProduct);
    setOpenModal(false);
  };

  const handleDeleteConfirm = () => {
    // Logic to delete the product
    console.log("Product deleted:", productToDelete);
    setOpenDeleteConfirm(false);
    // Remove the product from the state (or call an API to delete it)
  };

  const handleDeleteCancel = () => {
    setOpenDeleteConfirm(false); // Close the delete confirmation dialog
  };

  // Define the getMuiTheme function for customizing the MUI theme
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
      <div className="bg-0 py-4 grid place-items-center">
        <div className="w-full sm:w-10/12 max-w-4xl">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Product Outlook"}
              data={products}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>

      {/* Modal for Product Info or Edit */}
      <Dialog open={openModal} onClose={handleCloseModal} className="">
        <DialogTitle
          className="text-white bg-[#1E293B]"
          style={{ textTransform: "uppercase" }}
        >
          {selectedProduct ? selectedProduct.name + " Details" : "Details"}
        </DialogTitle>
        <DialogContent className="bg-gray-100">
          {selectedProduct && (
            <div>
              <TextField
                label="Product Name"
                fullWidth
                value={selectedProduct.name}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    name: e.target.value,
                  })
                }
                margin="normal"
                disabled={!isEditing} // Disable for "Info" modal (read-only)
              />
              <TextField
                label="Buying Price"
                fullWidth
                value={selectedProduct.buying_price}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    buying_price: e.target.value,
                  })
                }
                margin="normal"
                disabled={!isEditing} // Disable for "Info" modal (read-only)
              />
              <TextField
                label="Selling Price"
                fullWidth
                value={selectedProduct.selling_price}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    selling_price: e.target.value,
                  })
                }
                margin="normal"
                disabled={!isEditing} // Disable for "Info" modal (read-only)
              />
            </div>
          )}
        </DialogContent>
        <DialogActions className="bg-[#1E293B]">
          <Button onClick={handleCloseModal} color="primary" className="text-red-400">
            Cancel
          </Button>
          {isEditing && (
            <Button onClick={handleSaveEdit} color="secondary">
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteConfirm} onClose={handleDeleteCancel}>
        <h3 className="bg-[#1E293B] min-h-10 px-8 text-lg text-white py-2">DELETE ITEM</h3>
        <DialogTitle>Are you sure you want to delete this product?</DialogTitle>
        <DialogActions className="bg-gray-200">
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductTable;
