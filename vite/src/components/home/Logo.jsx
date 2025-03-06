import naivasLogo from '../../assets/images/naivas.png';
import care from '../../assets/images/caree.png'
import quick from '../../assets/images/quickma.png'


 const Logo = () => {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h3 className="font-bold text-sm text-gray-600 text-center">
                    TRUSTED BY BIG BRANDS AROUND THE COUNTRY
                </h3>
                <div className="mt-">
                  <ul className="flex gap-x-10 gap-y-2 flex-wrap items-center justify-center md:gap-x-10 lg:ml-12">
                        {/* LOGO 1 */}
                        
                      <li className='w-20 h-10'>
                        <img src={naivasLogo}/>
                      </li >

                        
                        
                      <li className='w-16 mt-8 '>
                      <img src={care} />
                       
                      </li>

                        {/* LOGO 3 */}
                      <li className='w-24 mt-8'>
                        <img src={quick}/>
                        
                      </li>

                        {/* LOGO 4 */}
                      <li>
                       
                      </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Logo