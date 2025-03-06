import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IconButton, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import useGetSales from "../../hooks/useGetSales";
import usePayment from "../../hooks/usePayment";
import mpesa from '../../assets/images/mpesa.png'



const SalesTable = ({sales}) => {
  // const { sales } = useGetSales();
  const { handlePayment, handleInputChange, payload, loading: paymentLoading } = usePayment();

  const [openModal, setOpenModal] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

  const columns = [
    {
      name: "id",
      label: "Sale ID",
      options: {
        customBodyRender: (value) => <div style={{ textAlign: "center" }}>{value}</div>,
      },
    },
    {
      name: "pid",
      label: "Product ID",
      options: {
        customBodyRender: (value) => <div style={{ textAlign: "center" }}>{value}</div>,
      },
    },
    {
      name: "quantity",
      label: "Quantity Sold",
      options: {
        customBodyRender: (value) => <div style={{ textAlign: "center" }}>{value}</div>,
      },
    },
    {
      name: "created_at",
      label: "Date of Sale",
      options: {
        customBodyRender: (value) => <div style={{ textAlign: "center" }}>{value}</div>,
      },
    },
    {
      name: "quickActions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex", gap: "8px" }}>
              <IconButton onClick={() => handleInfoClick(tableMeta.rowIndex)} color="primary">
                <InfoIcon />
              </IconButton>
              <IconButton onClick={() => handleEditClick(tableMeta.rowIndex)} color="secondary">
                <EditIcon />
              </IconButton>

              <Button
                onClick={() => handlePaymentClick(tableMeta.rowIndex)}
                variant="contained"
                color="success"
               
                sx={{
                  backgroundColor: 'white',  // Set the background color to white
                  color: 'green',
                  height: '32px',  // Optionally set text color to maintain contrast
                  '&:hover': {
                    backgroundColor: '#f0f0f0',  // Add hover effect to make the button visually interactive
                  }
                }}
              >
               <img src={mpesa}  style={{ width: '40px', height: 'auto' }}  />
              </Button>
            </div>
          );
        },
      },
    },
  ];

  useEffect(() => {
    console.log("Sales Data", sales);
  }, [sales]);

  const options = {
    selectableRows: "none",
    elevation: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
    responsive: "scroll",
    download: true,
    print: true,
    viewColumns: true,
  };

  const handleInfoClick = (index) => {
    console.log("Info clicked for sale:", sales[index]);
  };

  const handleEditClick = (index) => {
    console.log("Edit clicked for sale:", sales[index]);
  };

  const handlePaymentClick = (index) => {
    const sale = sales[index];

    // Calculate the amount based on sales data
    const calculatedAmount = sale.price * sale.quantity;

    // Update payload with the calculated amount
    handleInputChange({
      target: { name: "amount", value: calculatedAmount },
    });

    // Open the modal to capture phone number
    setSelectedSale(sale);  // Store the selected sale
    setOpenModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment(); // Proceed with the payment using the updated payload

    // Optionally, close modal after payment submission
    setOpenModal(false);
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
      <div className="bg-0 py-4 grid place-items-center">
        <div className="w-full sm:w-10/12 max-w-4xl">
          <ThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Sales Outlook"}
              data={sales}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </div>
      </div>

      {/* Modal for Payment Form */}
      {openModal && (
        <div
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gray-500 p-6 rounded-lg shadow-xl w-96 border-gray"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
          <img src={mpesa} style={{ width: '40px', height: 'auto', marginLeft: '12px' }} /> Lipa na  <span className="text-green-500 ml-2"> M-Pesa</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="calculatedAmount" className="block text-base font-bold text-black">
                Calculated Amount
              </label>
              <input
                type="text"
                name="calculatedAmount"
                id="calculatedAmount"
                value={payload.amount}  // Display the amount in payload
                className="w-full mt-2 p-2 border-2 border-gray-300 bg-white font-bold rounded-md focus:ring-2 focus:ring-blue-500"
                required
                readOnly  // Read-only because it's calculated
              />
            </div>

            <div className="mb-2 mt-4">
              <label htmlFor="phone_number" className="block text-base font-bold text-black">
                Enter Phone Number
              </label>
              <input
                type="tel"
                name="phone_number"
                placeholder="Format e.g 254XXXXXXXXX"
                value={payload.phone_number}  
                onChange={handleInputChange}   
                className="w-full mt-2 p-2 border-2 border-gray-300 bg-white font-bold rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-2 mt-6">
              <h6 className="text-sm font-bold text-black">Instructions:</h6>
              <p className="text-xs text-gray-100 font-semibold">A prompt will pop on this phone number for processing.</p>
             
            </div>


            <div className="flex justify-end gap-30 mt-6">
              <button
                type="button"
                onClick={() => setOpenModal(false)}  // Close modal
                className="bg-gray-300 text-gray-700 py-2 px-4 bg-white f rounded-md hover:bg-gray-400 mr-8"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 font-bold"
                disabled={paymentLoading}  // Disable button if payment is in progress
              >
                {paymentLoading ? "Processing..." : "Send Prompt"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SalesTable;
