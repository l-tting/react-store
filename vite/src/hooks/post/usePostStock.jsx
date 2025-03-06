import { useState } from 'react';
import stockService from '../../services/stockservice/stockService';
import { useToast } from '../../context/ToastContext';

const usePostStock = () => {
    const [stockData, setStockData] = useState({
        product_id: "",
        stock_count: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Initialized as null for consistency
    const { notify } = useToast();

    const handleSuccessToast = () => {
        notify('Stock added successfully', 'success');
    };

    const handleStock = async () => {
        setLoading(true);
        try {
            // Simulate a 3-second delay (remove if unnecessary for real API calls)
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const data = await stockService(stockData);
            handleSuccessToast();
            setStockData({ product_id: "", stock_count: "" }); // Reset form
            setLoading(false);
            console.log("Post response:", data);
            return data;
        } catch (error) {
            setLoading(false);
            setError(error.message || 'Error posting stock');
            console.error("Error:", error); // Added for debugging
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStockData((prevData) => ({
            ...prevData,
            [name]: name === 'stock_count' ? (isNaN(value) ? "" : value) : value, // Ensure stock_count is numeric
        }));
    };

    return { handleStock, handleInputChange, stockData, loading, error };
};

export default usePostStock;