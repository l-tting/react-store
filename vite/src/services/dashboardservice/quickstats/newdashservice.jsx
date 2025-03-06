import api from "../../../utils/api";
import axios from 'axios'


export const getSalesTime = async ()=>{
    try{
        const response = await api.get('/sales_time')

        console.log("response qqq",response.data.sales)
        return response.data.sales;
        
    }catch(error){
        console.error("Error fetching sales time data:", error);
        throw error; 
    }
}

// Fetch sales per product data
export const getSalesPerProduct = async () => {
    try {
      const response = await api.get('/sales_product');
      return response.data.sales_product_data; // Assuming your response contains "sales_product_data"
    } catch (error) {
      console.error("Error fetching sales per product data:", error);
      throw error; // Re-throw error to be handled in the component
    }
  };

export const getProfitTime = async ()=>{
    try{
        const response = await api.get('/profit_time')

        return response.data.prof_data
        
    }catch(error){
        console.error("Error fetching profit on timedelta:", error);
      throw error; 
    }
}

export const getProfitProduct = async ()=>{
    try{
        const response = await api.get('/profit_product')
        return response.data.profit_per_product
    }catch(error){
        console.error("Error fetching profit on product:", error);
        throw error; 
    }
}

export const getStockProduct = async ()=>{
    try{
        const response = await api.get('/stock_product')
        return response.data.stock_product
    }catch(error){
        console.error("Error fetching stock on product:", error);
        throw error; 
    }
}
