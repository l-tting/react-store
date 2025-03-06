import React from 'react'
import StockHeader from '../components/stock/StockHeader'
import StockTable from '../components/stock/StockTable'
import StockTrackTable from '../components/stock/StockTrackTable'
import StockStats  from '../components/stock/StockStas'
import useGetStock from '../hooks/useGetStock'
import useGetProducts from '../hooks/useGetProducts'

const StockPage = () => {
  const {stockData,stockMetrics,loading,error} = useGetStock()
  const {productData} = useGetProducts()

  const metrics = stockMetrics

  const stock_only = stockData?.stock_data
  const stock_track = stockData?.stock_tracker
  console.log("Stock only ",metrics)
  
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
       <div className='lg:mt-14 mb-8'>
          <StockTrackTable stock_track={stock_track}/>
       </div>

      
    </div>
  )
}

export default StockPage
