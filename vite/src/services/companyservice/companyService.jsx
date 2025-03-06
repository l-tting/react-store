import axios from "axios";

import React from 'react'

const url = import.meta.env.VITE_COMPANY_URL
export const companyService = async (companyInfo) => {
    try{
        const response = await axios.post(url,companyInfo)
        console.log("Info",companyInfo)

        return response.data

    }
    catch(error){
        throw error

    }

}


