import React, { useEffect, useState } from 'react';
import { fetchProductsAndMetrics } from '../services/productservice/productService';
import { getToken } from '../utils/getToken';

const useGetProducts = () => {
    const token = getToken()
    const [productData, setProductData] = useState([]); 
    const [prodMetrics, setProdMetrics] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const loadProductsAndMetrics = async () => {
            try {
                const data = await fetchProductsAndMetrics(token); 
                setProductData(data.productData); 
                setProdMetrics(data.productMetrics)
                console.log("hk prods",data.productData)
                console.log("hk mtrc",data.productMetrics)
            } catch (error) {
                // setError(error.message); 
                console.log("Error fetching products:", error); 
            } finally {
                setLoading(false); 
            }
        };

        loadProductsAndMetrics(); 

    }, []);  

    return { productData,prodMetrics, loading, error }; 
};

export default useGetProducts;
