import axios from 'axios'
import { getToken } from '../../utils/getToken'

const token = getToken()

const url = import.meta.env.VITE_MAIL_URL

const mailService = async (mailPayLoad) => {
    try{
        const response = await axios.post(url,mailPayLoad,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response.data
    }
    catch(error){
        throw error
    }
}

export default mailService
