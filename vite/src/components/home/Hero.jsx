import React from 'react'
import hero from '../../assets/images/hero1.jpg'

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#2C3E50] to-gray-900 animate-bg-change">
      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[510px]">
          <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="h-full px-4 pt-2 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-20 lg:pb-14">
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <h1 className="text-4xl font-bold text-white sm:text-6xl xl:text-7xl">
                    Say Goodbye To Outdated Systems
                  </h1>
                  <p className="mt-6 text-base text-white sm:text-xl">
                    <span className='text-[#f5c77e]'> OneShop </span>  POS transforms how you run your business - smoother sales, smarter inventory and clearer insights.
                  </p>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-6 py-3 animate-bounce text-base border-2 rounded-4xl font-semibold text-[#f5c77e] border-white transition-all duration-200 bg-gray-200 mt-9 hover:bg-green-400 focus:bg-green-400"
                    role="button"
                  >
                    Explore Our Plans
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
            <div className="lg:absolute">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png"
                // src ={hero}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
