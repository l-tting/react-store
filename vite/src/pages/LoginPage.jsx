import React from 'react'
import { LoginForm } from '../components/login/LoginForm'
import logback from '../assets/images/logback2.webp'


const LoginPage = () => {
  return (
    <div className=' ' style={{ backgroundImage: `url(${logback})` }}>
       <LoginForm/>

    </div>
    

  )
}

export default LoginPage
