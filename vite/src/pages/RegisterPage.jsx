import React from 'react'
import { RegisterForm } from '../components/register/RegisterForm'
import comp from '../assets/images/comp1.jpg'


const RegisterPage = () => {
  return (
    <div className='lg:mt-0' style={{backgroundImage: `url(${comp})`}}>
        <RegisterForm/>
      
    </div>
  )
}

export default RegisterPage
