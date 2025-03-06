import React from 'react'
import StockHeader from '../components/stock/StockHeader'
import StockTable from '../components/stock/StockTable'
import StockTrackTable from '../components/stock/StockTrackTable'
import StockStats  from '../components/stock/StockStas'
import useGetStock from '../hooks/useGetStock'
import useGetProducts from '../hooks/useGetProducts'

const StockPage = () => {
  const {stockData,stockTracker,stockMetrics,loading,error} = useGetStock()
  const {productData} = useGetProducts()

  const metrics = stockMetrics

  const stock_only = stockData
  const stock_track = stockTracker

  console.log("Stock track ",stock_track)
  console.log("Stock only ",stock_only)
  
  return (
    <div>
        <div>
            <StockHeader products={productData}/>
        </div> 
        <div>
          <StockStats stock_metrics={stockMetrics}/>
        </div>
         <div>
            <StockTable stock={stock_only}/>
        </div> 
        <div className='font-bold'>

          Track all my stock listings
        </div>
       <div className='lg:mt-14 mb-8'>
          <StockTrackTable stock_track={stock_track}/>
       </div>

      
    </div>
  )
}

export default StockPage
