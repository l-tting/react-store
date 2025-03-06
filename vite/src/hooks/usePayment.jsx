import { useState } from "react"
import { darajaService } from "../services/daraja/darajaService"


const usePayment = () => {
    const [payload,setPayload] = useState({
        phone_number:"", 
        amount:"",
    })
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePayment = async ()=>{
        setLoading(true);
        try{
            const response = await darajaService(payload)
            setLoading(false);  
            setPayload({ phone_number: "", amount:"" });  
            return response;  

        }catch(error){
            setLoading(false);
            setError(error.message || 'STK Push Error');

        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPayload((prevData) => ({
            ...prevData,
            [name]: value
        }));
      };
      
    return {handlePayment,handleInputChange,payload,error,loading}
}


export default usePayment
