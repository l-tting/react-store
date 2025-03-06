import React, { useEffect, useState } from 'react'
import { registerUser } from '../services/authservice/registerService'
import { useNavigate } from 'react-router-dom';


const useRegister = () => {
    const navigate = useNavigate();
    const [credentials,setCredentials] = useState({
        full_name:"",
        email:"",
        password:"",
        
    })
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const company_id = new URLSearchParams(location.search).get('company_id');

    const handleRegister = async ()=>{
        setLoading(true);
        setError('');
        try{
            const response = await registerUser(credentials,company_id)
            setLoading(false); 
            navigate('/signin')
            return response; 


        }catch(error){
            setLoading(false); 
            setError(error.message || 'Registration failed'); 
            throw error; 
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        //spread prev state and override the property whose key is name with new value
        setCredentials((prevCredentials) => ({
          ...prevCredentials,
          [name]: value
        }));
    };
  return {credentials,handleInputChange,handleRegister,error,loading}
}

export default useRegister
