import React from 'react'

import axios from 'axios'


const url = import.meta.env.VITE_STOCK_URL
const getStockAndMetrics = async (token) => {
    try{
        const stockResponse = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        })
        
        const metricResponse = await axios.get(`${url}/metrics`,{
            headers:{
                Authorization :`Bearer ${token}`
            }
        })
        return({
            stockData:stockResponse.data.my_stock,
            stockMetric:metricResponse.data
        })
    }catch(error){
        throw error
    }
    
  
}

export default getStockAndMetrics
