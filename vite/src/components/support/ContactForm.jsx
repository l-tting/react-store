import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import useMail from '../../hooks/useMail';


const ContactForm = () => {

    const {handleMail,handleInputChange,mailData,loading,error} = useMail()
    const current_user = localStorage.getItem('current_user') || 'Guest'

  return (
    <div>
        <section className="bg-gray-200 sm:py-16 lg:py-8">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-xl">Reach Out To Us</h2>
            <p className="max-w-xl mx-auto mt-2 text-base leading-relaxed text-gray-500">Hi {current_user}. Welcome to OneShop Support.</p>
        </div>

        <div className="max-w-5xl lg:mt-4">
            <div className="grid grid-cols-1 gap-4 px-8 text-center md:px-0 md:grid-cols-3 lg:h-10 ">
                <div className="overflow-hidden  rounded-xl bg-gray-300">
                    <div className=" text-center ">
                       
                        <p className="mt-2 text-sm font-medium text-gray-900">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-base text-gray-900" />
                           <span className='px-3'>+254714056473</span>  </p>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-300 rounded-xl">
                    <div className=" text-center ">
                        <p className="mt-2 text-sm font-medium text-gray-900">
                        <FontAwesomeIcon icon={faEnvelope} className="text-lg text-gray-900" />
                            
                            <span className='px-3 '>oneshop@support.com</span>  </p>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-300 rounded-xl ">
                    <div className=" text-center">
                       
                        <p className="mt-2 text-sm font-medium leading-relaxed text-gray-900">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg text-gray-900" />
                                <span className='px-3'> 8502 Kimathi St. - Nairobi, Kenya</span> </p>
                    </div>
                </div>
            </div>

            <div className="mt-4 overflow-hidden bg-white rounded-xl">
                <div className="px-6 py-0  lg:px-8">
                    <h3 className="text-2xl font-semibold text-center text-gray-900 lg:mb-6 lg:mt-4">Send us a message</h3>

                    <form className="mt-2" onSubmit={(e) => { e.preventDefault(); handleMail();}} >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                            <div>
                                <label for="" className="text-sm font-medium text-gray-900"> Your name </label>
                                <div className="mt-2 relative">
                                    <input type="text" name="sender_name" value={mailData.sender_name} onChange={handleInputChange}  placeholder="Enter your full name" className="block w-full px-4 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border-2 border-black rounded-xl focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                                <div className="mt-2 relative">
                                    <input type="email" name="sender_email" value={mailData.sender_email} onChange={handleInputChange} placeholder="Enter your email address" className="block w-full px-4 py-3 text-black placeholder-gray-500  transition-all duration-200 bg-white border-2 border-black rounded-xl focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" className="text-base font-medium text-gray-900"> Phone number </label>
                                <div className="mt-2 relative">
                                    <input type="tel" name="sender_phone" value={mailData.sender_phone} onChange={handleInputChange} id="" placeholder="Enter your phone number" className="block w-full px-4 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border-2 border-black rounded-xl focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            {/* <div>
                                <label for="" className="text-base font-medium text-gray-900"> Full name </label>
                                <div className="mt-2 relative">
                                    <input type="text" name="sender_name" value={mailData.sender_name} onChange={handleInputChange} placeholder="Enter your  name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div> */}

                            <div className="sm:col-span-2">
                                <label for="" className="text-base font-medium text-gray-900"> Message </label>
                                <div className="mt-2 relative">
                                    <textarea name="body" value={mailData.body} onChange={handleInputChange} placeholder="Fill in your request here" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border-2 border-black rounded-xl resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="8"></textarea>
                                </div>
                            </div>

                            <div className="sm:col-span-2 mb-2">
                                <button type="submit" className="inline-flex items-center justify-center w-72 px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#020035] border border-transparent rounded-md focus:outline-none  focus:bg-blue-700 cursor-pointer" disabled={loading} >
                                {loading ? 'Sending Mail...' : 'Send Mail'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
      
    </div>
  )
}

export default ContactForm;
