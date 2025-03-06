import React from 'react'
import axios from 'axios'
import { getToken } from '../../utils/getToken'

const url = import.meta.env.VITE_STOCK_URL
const token = getToken()
const stockService = async (stockData) => {
    try{
        const response = await axios.post(url,stockData,{
            headers:{
                Authorization : `Bearer ${token}`
            }
        })
        return response.data
    }catch(error){
        throw error
    }
   

}

export default stockService
