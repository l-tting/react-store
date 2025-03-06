import React from 'react'
import axios from 'axios'
import { getToken } from '../../utils/getToken'


const url = import.meta.env.VITE_DARAJA_URL
const token = getToken()

export const darajaService = async (payload) => {
    try{
        const response = await axios.post(url,payload,{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        })
        return response
    }
    catch(error){
        console.log("Stk push error",error)
        throw error
    }
  
}


