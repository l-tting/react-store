import { loginService } from "../services/authservice/loginService";

export const getCurrentUser = async ()=>{
    const response = await loginService()
    console.log(response)
    return response}