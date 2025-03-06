import React from 'react'
import SalesTable from '../components/sales/SalesTable'
import  SalesHeader  from '../components/sales/SalesHeader'
import SalesSta from '../components/sales/SalesSta'
import useGetSales from '../hooks/useGetSales'
import useGetProducts from '../hooks/useGetProducts'



const SalesPage = () => {

  const {salesData,saleMetrics,loading,error} = useGetSales()
  const {productData} = useGetProducts()
  return (
    <div>
      
        <div>
            <SalesHeader products={productData}/>
        </div>
        
        <div>
          <SalesSta metrics={saleMetrics}/>
      </div>
        <div>
            <SalesTable sales={salesData}/>
        </div>
        
      
    </div>
  )
}

export default SalesPage
