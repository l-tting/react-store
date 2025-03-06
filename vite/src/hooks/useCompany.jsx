import React, { useState } from 'react'
import { companyService } from '../services/companyservice/companyService'
import { useNavigate } from 'react-router-dom'

const useCompany = () => {
    const navigate = useNavigate()

    const [companyInfo,setCompanyInfo] = useState({
        name:'',
        email:'',
        phone_number:'',
      
    })
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    const handleCompany =async (e)=>{

        setLoading(true)
        try{
            const response = await companyService(companyInfo)
            const companyId = response.company_id
            navigate(`/signup?company_id=${companyId}`)

            setCompanyInfo({
                name:'',
                email:'',
                phone_number:'',
               
            })

            setError(null)

        }
        catch(err){
            setError("Error posting company company data")
            console.error(err)
        }finally{
            setLoading(false)
        }
    }
  return {companyInfo,setCompanyInfo,error,loading,handleCompany}
}

export default useCompany
