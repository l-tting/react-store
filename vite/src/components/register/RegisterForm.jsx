import useRegister from "../../hooks/useRegister"

export const RegisterForm = () => {
    const { handleInputChange, credentials, handleRegister, error, loading } = useRegister();
    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-center  sm:px-4 md:flex md:items-center md:justify-center lg:ml-[28%] py-18">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    {/* <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" /> */}
                    <div className="mt- space-y-2">
                        <h3 className="text-white text-2xl font-bold sm:text-3xl">Create OneShop Account</h3>
                        {/* <p className="">Already have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a></p> */}
                    </div>
                </div>
                <div className=" shadow  sm:p-2 sm:rounded-lg">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleRegister(); }}
                        className="space-y-5"
                    >
                        <div>
                            
                            <input
                                type="text"
                                name="full_name"
                                value={credentials.full_name}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                required
                                className="w-full mt-2 px-3 py-3 text-white font-bold bg-transparent outline-none border-2 border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            
                            <input
                                type="email"
                                name="email"
                                value={credentials.email}
                                onChange={handleInputChange}
                                placeholder="Enter Email"
                                required
                                className="w-full mt-2 px-3 py-3 text-white font-bold bg-transparent outline-none border-2 border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            
                            <input
                                type="tel"
                                name="phone_number"
                                value={credentials.phone_number}
                                onChange={handleInputChange}
                                placeholder="Enter Phone Number"
                                required
                                className="w-full mt-2 px-3 py-3 border-2 text-white font-bold bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleInputChange}
                                placeholder="Enter Password"
                                required
                                className="w-full mt-2 px-3 py-3 text-white font-bold bg-transparent outline-none border-2 border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-[#f5c77e] font-bold bg-[#1E293B] hover:bg-gray-100 active:bg-indigo-600 rounded-lg duration-150 cursor-pointer"
                        >
                            Create account
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};
