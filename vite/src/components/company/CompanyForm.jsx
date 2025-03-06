import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useCompany from '../../hooks/useCompany'

const CompanyForm = () => {
    const { companyInfo, setCompanyInfo, error, loading, handleCompany } = useCompany()
    const location = useLocation()

    // Scroll to the top when the component mounts or the location changes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const handleChange = (e) => {
        setCompanyInfo({
            ...companyInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <main className="min-h-120 flex flex-col items-center justify-center  sm:px-4 lg:w-120 lg:h-20 mb-24 rounded-md lg:ml-[28%] py-10 ">
            <div className="w-full space-y- text-gray-600 sm:max-w-md flex flex-col items-center justify-center">
                <div className="text-center">
                    {/* <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" /> */}
                    <div className="mt-5 space-y-2">
                        <h3 className="text-white text-2xl font-bold sm:text-3xl">Company Details</h3>
                    </div>
                </div>
                <div className=" shadow  sm:p-2 sm:rounded-lg w-full max-w-md mx-auto">
                    <form onSubmit={(e) => { e.preventDefault(); handleCompany(); }} className="space-y-8">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={companyInfo.name}
                                onChange={handleChange}
                                placeholder="Enter Company Name"
                                required
                                className="w-full mt-8 px-3 py-3 border-2 border-white text-white font-bold bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={companyInfo.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                                className="w-full mt-2 px-3 py-3 border-2 border-white font-bold text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone_number"
                                value={companyInfo.phone_number}
                                onChange={handleChange}
                                placeholder="Enter Phone Number"
                                required
                                className="w-full mt-2 px-3 py-3 border-2 border-white text-white font-bold  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                       
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-[#1E293B] hover:bg-gray-100 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            <span className='text-[#f5c77e] font-bold'>Register Company</span> 
                        </button> 
                    </form>
                </div>
            </div>
        </main>
    )
}

export default CompanyForm
