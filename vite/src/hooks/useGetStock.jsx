import React, { useEffect, useState } from 'react'
import getStockAndMetrics from '../services/stockservice/getStockService'
import { getToken } from '../utils/getToken'

const useGetStock = () => {

    const token = getToken()
    const [stockData,setStockData] = useState([])
    const [stockTracker,setStockTracker] = useState([])
    const [stockMetrics,setStockMetrics] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const loadStockAndMetrics = async ()=>{
            try{
                const data = await getStockAndMetrics(token)
               setStockData(data.stockData.stock_data)
               setStockTracker(data.stockData.stock_tracker_data)
               setStockMetrics(data.stockMetric)
               console.log("srock",data)
            }catch(error){
                // setError(error.message); 
                console.log("Error fetching products:", error); 
            }finally{
                setLoading(false); 
            }
        };
        loadStockAndMetrics()
    },[])

  return {stockData,stockTracker,stockMetrics ,loading, error}
}

export default useGetStock
