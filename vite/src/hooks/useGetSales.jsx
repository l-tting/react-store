import { useEffect, useState } from 'react';
import { fetchSalesAndMetrics } from '../services/saleservice/salesService';
import { getToken } from '../utils/getToken';

const useGetSales = () => {
    const token = getToken()
    const [salesData, setSalesData] = useState([]); 
    const [saleMetrics,setSaleMetrics] = useState([])
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const loadSalesAndMetrics = async () => {
            try {
                const data = await fetchSalesAndMetrics(token); 
                setSalesData(data.salesData); 
                setSaleMetrics(data.salesMetrics)
                console.log("Sales Data:", data.salesData); 
                console.log("Sales Metrics:", data);
            } catch (error) {
                // setError(error.message); 
                console.log("Error fetching sales and metrics:", error); 
            } finally {
                setLoading(false); 
            }
        };

        loadSalesAndMetrics(); 

    }, []);  

    return { salesData,saleMetrics, loading, error }; 
};

export default useGetSales;
