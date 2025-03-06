import React, { useState } from 'react'
import mailService from '../services/mail/mailService'
import { useToast } from '../context/ToastContext'

const useMail = () => {
    const {notify} = useToast()
    const handleSuccessToast =()=>{
        notify("Mail sent successfully",'success')
    }

    const [mailData,setMailData] = useState({
        sender_name:"",
        sender_email:"",
        sender_phone:"",
        body:"",
    })
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const handleMail = async ()=>{
        setLoading(true)
        try{
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const response = await mailService(mailData)
            handleSuccessToast()
            setLoading(false);  
            setMailData({
                sender_name:"",  sender_email:"",  sender_phone:"",  body:"",
            })
            return response
        }
        catch(error){
            setLoading(false);
            setError(error.message || 'Error sending mail');
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMailData((prevData) => ({
            ...prevData,
            [name]: value
        }));
      };
  return {handleMail,handleInputChange,mailData,loading,error}
}

export default useMail
