import React from 'react'
import ProductTable from '../components/products/ProductTable'

import ProductsHeader from '../components/products/ProductHeader'
import ProductsSta from '../components/products/ProductsSta'
import useGetProducts from '../hooks/useGetProducts'


const ProductsPage = () => {
  const {prodMetrics,productData,loading,error} = useGetProducts()



  return (
    <div>
      <div>
        <ProductsHeader/>
      </div>
        <div>
          <ProductsSta product_metrics={prodMetrics}/>
        </div>
        <div>
            <ProductTable products={productData}/>
        </div>
      
    </div>
  )
}

export default ProductsPage
