import React from 'react'

const Header = () => {
  return (
    <div>
        <section class="py-10 bg-white sm:py-16 lg:py-8">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <div class="max-w-2xl mx-auto text-center ">
            <h2 class="text-xl font-bold leading-tight text-[#f1b04c] sm:text-4xl lg:text-2xl">How does it work?</h2>

        </div> */}

        <div class="relative mt-12 lg:mt-8">
            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-4  border-[#1E293B] rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700 border-[#1E293B]"> 1 </span>
                    </div>
                    <h3 class="mt-6 text-lg font-extrabold leading-tight md:mt-10 text-[#1E293B]">Select a plan</h3>
                    <p class="mt-4 text-base text-gray-600"> <i>Getting started or scaling? We have a plan designed to fit your business needs.</i> </p>
                </div>

                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-4  border-[#1E293B] rounded-full shadow">
                        <span class="text-xl font-semibold text-gray-700"> 2 </span>
                    </div>
                    <h3 class="mt-6 text-lg font-bold leading-tight text-[#020035] md:mt-10">Sign your company up</h3>
                    <p class="mt-4 text-base text-gray-600 "> <i> Create your account in just a few clicks and you're ready to go.</i></p>
                </div>

                <div>
                    <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-4  border-[#1E293B] rounded-full shadow">
                        <span class="text-xl font-bold text-gray-700"> 3 </span>
                    </div>
                    <h3 class="mt-6 text-lg font-bold leading-tight text-[#020035] md:mt-10"> Launch your POS</h3>
                    <p class="mt-4 text-base text-gray-600"><i>Set up your store and begin processing payments right away.</i> </p>
                </div>
            </div>
        </div>
    </div>
</section>

      
    </div>
  )
}

export default Header
