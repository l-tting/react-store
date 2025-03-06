import axios from 'axios';

const url = import.meta.env.VITE_SALES_URL; 

export const fetchSalesAndMetrics = async (token) => {
    try {
        // Fetching sales data
        const salesResponse = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Fetching sales metrics
        const metricsResponse = await axios.get(`${url}/metrics`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Combine both responses into one
        return {
            salesData: salesResponse.data.sales_data,
            salesMetrics: metricsResponse.data, // Assuming the response has data under "Sales data" and "counts"
        };
    } catch (error) {
        console.error("Error fetching sales or metrics:", error);
        throw error; 
    }
};
