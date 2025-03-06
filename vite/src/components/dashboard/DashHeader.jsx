import RealTimeClock from "../../utils/clock"

 
 export const DashHeader= () => {
   const current_user = localStorage.getItem('current_user')


    return (
        <section className="py-4">
            <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-xl font-semibold sm:text-xl">
                        Welcome {current_user}
                    </h3>
                    <p className="mt-1 text-gray-600">
                        Here's what's happening in your store.
                    </p>
                </div>
                <div className="flex-none mt- md:mt-0 bg-gray-700 lg:w-60 rounded-3xl">
                   <p className="text-white font-bold text-[50%]"><RealTimeClock/></p> 
                </div>
            </div>
        </section>
    )
}