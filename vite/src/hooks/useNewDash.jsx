import React from 'react'
import { useState,useEffect } from 'react'
import { getSalesTime,getSalesPerProduct,getProfitTime,getProfitProduct,getStockProduct } from '../services/dashboardservice/quickstats/newdashservice'

const useNewDash = () => {

    const [salesTime,setSalesTime] = useState([])
    const [salesPerProduct,setSalesPerProduct] = useState([])
    const [profitTime,setProfitTime] = useState([]);
    const [profitProduct,setProfitProduct] = useState([])
    const [stockProductData,setStockProductData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
            const fetchDashData = async () =>{
                try{
                    const [salesTimeData, salesProductData,profitTimeData,profitProductData,stockProduct] = await Promise.all([
                        getSalesTime(),
                        getSalesPerProduct(),
                        getProfitTime(),
                        getProfitProduct(),
                        getStockProduct(),
                      ]);
                    setSalesTime(salesTimeData);
                    setSalesPerProduct(salesProductData);
                    setProfitTime(profitTimeData);
                    setProfitProduct(profitProductData)
                    setStockProductData(stockProduct)
                      
                }catch(error){
                    setError('Failed to fetch dashboard data');
                }
                finally{
                    setLoading(false);
                }
            }
            fetchDashData();
    },[])
  
    return {salesTime,salesPerProduct,profitTime,profitProduct,stockProductData,loading,error}
}

export default useNewDash
