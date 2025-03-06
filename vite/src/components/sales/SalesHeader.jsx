import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faSyncAlt, faSpinner } from '@fortawesome/free-solid-svg-icons'; // Added faSpinner
import useMakeSale from '../../hooks/post/useMakeSale';

const SalesHeader = ({ products }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Using the custom hook useMakeSale
    const { handleSale, handleInputChange, saleData, error, loading } = useMakeSale();

    const modalRef = useRef(null); // Create a reference to the modal

    // Open and close modal functions
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

    // Handle form submit to post sale
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!saleData.pid || !saleData.quantity) {
            alert("Please fill all fields before submitting.");
            return;
        }

        handleSale();  // Use the handleSale function from the custom hook to post the sale
        // Note: Modal will close after loading is false if you want it to close immediately, keep this line
        // handleCloseModal(); 
    };

    return (
        <header className="bg-gr mb-8 lg:px-20 lg:mt-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold mb-2 border-b-8">Sales Dash</h2>
                    <p className="text-base text-gray-600">Manage your sale inventory</p>
                </div>
                <div className="flex items-center gap-4">
                    {/* Refresh Button */}
                    <button 
                        onClick={() => console.log("Refreshing...")} 
                        className="bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 cursor-pointer">
                        <FontAwesomeIcon icon={faSyncAlt} className="h-5 w-5" />
                    </button>

                    {/* Make Sale Button */}
                    <button 
                        onClick={handleOpenModal} 
                        className="bg-[#1E293B] text-white py-2 px-4 rounded-md text-base hover:bg-blue-700 font-bold transition flex items-center gap-2 cursor-pointer">
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
                        Make Sale
                    </button>
                </div>
            </div>

            {/* Modal for making a sale */}
            {isModalOpen && (
                <div
                    ref={modalRef}
                    className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-white p-6 rounded-lg shadow-xl w-96"
                >
                    <h2 className="text-2xl font-semibold mb-4">Make a Sale</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                            <select
                                name="pid"
                                id="name"
                                value={saleData.pid}
                                onChange={handleInputChange}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select a Product</option>
                                {products && products.length > 0 ? (
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
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Quantity</label>
                            <input 
                                type="number" 
                                name="quantity" 
                                id="description" 
                                placeholder="0"
                                value={saleData.quantity} 
                                onChange={handleInputChange}
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="flex justify-end gap-4 mt-6">
                            <button 
                                type="button" 
                                onClick={handleCloseModal} 
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400">
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center gap-2"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <FontAwesomeIcon icon={faSpinner} className="animate-spin h-5 w-5" />
                                        Processing Sale...
                                    </>
                                ) : (
                                    'Complete Sale'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </header>
    );
};

export default SalesHeader;