import React from 'react'
import axios from 'axios'
import { getToken } from '../../utils/getToken'

const token = getToken()
const url = import.meta.env.VITE_PRODUCT_URL

// Accepting product data as parameter
const postProduct = async (productData) => {
    try {
        const response = await axios.post(url, productData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        

        console.log("Response products:", response.data); 
        return response.data; 
    } catch (error) {
        console.error("Error adding products:", error); 
        throw error;  // Re-throw error for proper error handling in the hook
    }
}

export default postProduct
