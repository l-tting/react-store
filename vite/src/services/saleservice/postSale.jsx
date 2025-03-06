import React from 'react'
import axios from 'axios'
import { getToken } from '../../utils/getToken'

const token = getToken()
const url = import.meta.env.VITE_SALES_URL

// Accepting product data as a parameter
const postSale = async (salesData) => {
    if (!token) {
        throw new Error('Authorization token is missing');
    }

    try {
        const response = await axios.post(url, salesData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log("Response sales:", response.data); 
        return response.data; 
    } catch (error) {
        console.error("Error making sale:", error); 
        throw error;  // Re-throw error for proper error handling in the hook
    }
}

export default postSale
