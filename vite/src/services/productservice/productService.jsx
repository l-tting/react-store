import axios from 'axios';


const url = import.meta.env.VITE_PRODUCT_URL; 

export const fetchProductsAndMetrics = async (token) => {
    console.log("Token:", token); 
    try {
        const productResponse = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });

        const metricResponse = await axios.get(`${url}/metrics`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return {
            productData : productResponse.data.products,
            productMetrics :metricResponse.data.product_metrics,
            
        }
    } catch (error) {
        console.error("Error fetching products:", error); // Log error if request fails
        throw error; // Throw error to handle it in the component
    }
};
