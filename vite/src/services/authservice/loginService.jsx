import React from 'react'
import axios from 'axios'

const url = import.meta.env.VITE_LOGIN_URL
export const loginService = async (loginInfo) => {
    try{
        const response = await axios.post(url,loginInfo)
        return response.data
    }
    catch(error) {
        console.log(error) // Log more details during development
        // throw new Error(error.response?.data?.message || 'Login failed');
    }
}


