import React from 'react'
import CompanyForm from '../components/company/CompanyForm'
import comp from '../assets/images/comp1.jpg'

const CompanyPage = () => {
  return (
    <div className='min-h-screen' style={{backgroundImage: `url(${comp})`}}>
        <CompanyForm/>
      
    </div>
  )
}

export default CompanyPage
