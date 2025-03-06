import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'; 
import usePostStock from '../../hooks/post/usePostStock';

const StockHeader = ({ products }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { handleStock, handleInputChange, stockData, loading, error } = usePostStock();
    const modalRef = useRef(null);

    // Open and close modal functions
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => {
        if (!loading) setIsModalOpen(false); // Prevent closing while processing
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [loading]);

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stockData.product_id || !stockData.stock_count) {
            alert("Please fill all fields before submitting.");
            return;
        }
        await handleStock();  
        handleCloseModal();  // Close modal after submission
    };

    return (
        <header className="bg-gr mb-8 lg:px-20 lg:mt-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold mb-2 border-b-8">Stock Dash</h2>
                    <p className="text-base text-gray-600">Manage all your stock</p>
                </div>
                <div className="flex items-center gap-4">
                    {/* Refresh Button */}
                    <button 
                        onClick={() => console.log("Refreshing...")} 
                        className="bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 cursor-pointer">
                        <FontAwesomeIcon icon={faSyncAlt} className="h-5 w-5" />
                    </button>

                    {/* Add Stock Button */}
                    <button 
                        onClick={handleOpenModal} 
                        className="bg-[#1E293B] text-white py-2 px-4 rounded-md text-base hover:bg-blue-700 font-bold transition flex items-center gap-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
                        </svg>
                        Add Stock
                    </button>
                </div>
            </div>

            {/* Modal for adding stock */}
            {isModalOpen && (
                <div
                    ref={modalRef}
                    className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-gray-400 p-6 rounded-lg shadow-xl w-96"
                >
                    <h2 className="text-2xl font-semibold mb-4">Add Stock</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="product" className="block text-base font-bold text-black">Product Name</label>
                            <select
                                name="product_id"
                                id="product"
                                value={stockData.product_id}
                                onChange={handleInputChange}
                                className="w-full mt-2 p-2 border-2 border-black font-bold bg-white text-gray-400 rounded-md focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select a Product</option>
                                {products?.length > 0 ? (
                                    products.map((product) => (
                                        <option key={product.id} value={product.id}>
                                            {product.name}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">No products available</option>
                                )}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="stock_count" className="block text-base font-bold text-black">Stock Quantity</label>
                            <input 
                                type="number" 
                                name="stock_count" 
                                id="stock_count" 
                                placeholder="0"
                                value={stockData.stock_count} 
                                onChange={handleInputChange}
                                className="w-full mt-2 p-2 border-2 border-black font-bold bg-white rounded-md focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="flex justify-end gap-4 mt-6">
                            <button 
                                type="button" 
                                onClick={handleCloseModal} 
                                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-gray-400"
                                disabled={loading} // Prevent closing when loading
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="bg-green-600 text-white py-2 px-4 font-bold rounded-md hover:bg-green-700"
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? 'Processing Stock...' : 'Add Stock'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </header>
    );
};

export default StockHeader;
