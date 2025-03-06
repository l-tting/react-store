
import axios from "axios"

const url = import.meta.env.VITE_REGISTER_URL

export const registerUser = async (credentials,company_id) => {

    try{
        console.log('Sending data to server:', credentials); 
        const response = await axios.post(`${url}?company_id=${company_id}`, credentials);
        console.log("Response:", response.data);
    }
    catch(error){
        throw new Error(error.response?.data?.message || 'Registration failed')

    }

}


