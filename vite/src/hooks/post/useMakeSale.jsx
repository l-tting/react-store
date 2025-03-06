import { useState } from 'react';
import postSale from '../../services/saleservice/postSale';
import { useToast } from '../../context/ToastContext';

const useMakeSale = () => {
    const [saleData, setSaleData] = useState({
        pid: "",
        quantity: "",
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { notify } = useToast();
    const handleSuccessToast = () => {
        notify('Sale Made successfully', 'success');
      };

    const handleSale = async () => {
        setLoading(true);
        try {
            // Simulate a 3-second delay before posting the sale
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const response = await postSale(saleData);
            console.log("Response:", response);
            handleSuccessToast();
            setLoading(false);
            setSaleData({ pid: "", quantity: "" });  // Reset the form
            return response;  // Optionally return the response
        } catch (error) {
            setLoading(false);
            setError(error.message || 'Error posting sale');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // For quantity, ensure it is a valid number and update the saleData
        setSaleData((prevData) => ({
            ...prevData,
            [name]: name === 'quantity' ? (isNaN(value) ? "" : value) : value, // Handle quantity as a number
        }));
    };

    return { handleSale, handleInputChange, saleData, error, loading };
};

export default useMakeSale;