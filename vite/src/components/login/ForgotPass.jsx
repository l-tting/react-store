import React from 'react';

const ForgotPass = () => {
    // CSS style object for the animated dark cool gradient background
    const backgroundStyle = {
        background: 'linear-gradient(45deg, #0a192f, #1e2a47, #4b6b8f)', // Darker cool colors
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 15s ease infinite',
    };

    return (
        <main
            className="py-28 border-black mb-40"
            style={backgroundStyle} // Applying the background animation here
        >
            <div className="lg:w-100 mx-auto px-4 bg-gray-100 text-gray-600 md:px-3 border-2 rounded-xl min-h-70 mt-8">
                <div className="max-w-lg mx-auto space-y-3 lg:mt-7">
                    <h3 className="text-indigo-600 font-semibold text-xl">
                        ONESHOP
                    </h3>
                    <p className="text-gray-800 text-lg font-semibold sm:text-lg">
                        Get OTP
                    </p>
                    <p>
                       We need to verify your identity.
                    </p>
                </div>
                <div className="mt-2 max-w-lg mx-auto">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-2 [&>*]:w-40 sm:flex-row">
                            
                        </div>
                        <div>
                           
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full mt-2 px-3 py-2 lg:w-80 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                       
                        
                        <button
                            className="w-full px-4 py-2 gap-y-4 lg:w-40 mb-4 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 cursor-pointer"
                        >
                            Get Code
                        </button>
                    </form>
                </div>
            </div>

            {/* Keyframes for animated background */}
            <style jsx="true">{`
                @keyframes gradientAnimation {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </main>
    );
}

export default ForgotPass;
