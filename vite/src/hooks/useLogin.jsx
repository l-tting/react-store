import React, { useState, useContext } from 'react';
import { loginService } from '../services/authservice/loginService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const useLogin = () => {
  const { login } = useContext(AuthContext);
  const { notify } = useToast();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await loginService(credentials);
      const token = response.access_token;
      const current_user = response.current_user;
      
      localStorage.setItem('current_user', current_user);
      login(token);
      
      // 5-second delay for "Logging in..." message
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to dashboard
      navigate('/dashboard');
      
      // Immediate notification after navigation
      notify('Login successful!', 'success');
    } catch (error) {
      setError(error.message || 'Login failed');
      notify(error.message || 'Login failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return { 
    credentials, 
    handleInputChange, 
    error, 
    loading, 
    handleLogin 
  };
};

export default useLogin;