import { useState } from 'react';
import postProduct from '../../services/productservice/postProduct';
import { useToast } from '../../context/ToastContext';

const usePostProds = () => {
  const [productData, setProductData] = useState({
    name: '',
    buying_price: '',
    selling_price: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { notify } = useToast();

  const handleSuccessToast = () => {
    notify('Product added successfully', 'success');
  };

  const handleErrorToast = (errorMessage) => {
    notify(errorMessage, 'error');
  };

  const handleProducts = async () => {
    if (!productData.name || !productData.buying_price || !productData.selling_price) {
      setError('All fields are required');
      handleErrorToast('All fields are required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await postProduct(productData);
      console.log('Response:', response);

      // Add 5-second delay to show spinner
      await new Promise(resolve => setTimeout(resolve, 5000));

      handleSuccessToast();
      setProductData({ name: '', buying_price: '', selling_price: '' });
      return response;
    } catch (error) {
      setError(error.message || 'Error posting products');
      handleErrorToast(error.message || 'Error posting products');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return { handleInputChange, handleProducts, productData, error, loading };
};

export default usePostProds;