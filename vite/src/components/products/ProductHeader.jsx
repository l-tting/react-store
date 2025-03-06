import { useState, useRef, useEffect } from 'react';
import usePostProds from '../../hooks/post/usePostProds';

const ProductsHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleInputChange, handleProducts, productData, error, loading } = usePostProds();
  const modalRef = useRef(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Close the modal if a click is made outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gr mb-8 lg:px-20 lg:mt-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2 border-b-8">Product Dash</h2>
          <p className="text-base text-gray-600">Manage your product inventory</p>
        </div>
        <button
          onClick={handleOpenModal}
          className="bg- text-white py-2 px-4 rounded-md text-base bg-[#1E293B] hover:bg-blue-700 font-bold transition flex items-center gap-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v14m7-7H5"
            />
          </svg>
          Add Product
        </button>
      </div>

      {/* Modal for adding product */}
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-gray-100 border-2 border-black p-6 rounded-lg shadow-xl w-96"
        >
          <h2 className="text-2xl font-semibold mb-4 ml-16">Add New Product</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleProducts();
            }}
          >
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-bold text-black">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
                placeholder="e.g. milk"
                className="w-full mt-2 p-2 border-2 font-bold border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                required
                disabled={loading} // Disable input during loading
              />
            </div>
            <div className="mb-2">
              <label htmlFor="buying_price" className="block text-sm font-bold text-black">
                Buying Price
              </label>
              <input
                type="number"
                name="buying_price"
                value={productData.buying_price}
                onChange={handleInputChange}
                placeholder="Ksh 0"
                className="w-full mt-2 p-2 border-2 font-bold border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                required
                disabled={loading}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="selling_price" className="block text-sm font-bold text-black">
                Selling Price
              </label>
              <input
                type="number"
                name="selling_price"
                value={productData.selling_price}
                onChange={handleInputChange}
                placeholder="Ksh 0"
                className="w-full mt-2 p-2 border-2 font-bold border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                required
                disabled={loading}
              />
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={handleCloseModal}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-gray-400"
                disabled={loading} // Disable cancel during loading
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 font-bold flex items-center justify-center disabled:bg-green-400 disabled:opacity-70"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner inline-block w-4 h-4 border-2 border-t-white border-r-white border-b-transparent border-l-transparent rounded-full animate-spin mr-2"></span>
                    Adding...
                  </>
                ) : (
                  'Add Product'
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default ProductsHeader;