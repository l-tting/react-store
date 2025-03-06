import React from 'react'
import api from '../../../utils/api'

const dashBoardService = async () => {
    try {
        const [
          salesDay,
          salesProduct,
          profitDay,
          profitProduct,
          quickStats
        ] = await Promise.all([
          api.get('/sales_day'),
          api.get('/sales_product'),
          api.get('/profit_day'),
          api.get('/profit_product'),
          api.get('/quick_stats')
        ]);
    
        return {
          salesPerDay: salesDay.data.sales_per_day,
          salesPerProduct: salesProduct.data.sales_per_product,
          profitPerDay: profitDay.data.profit_per_day,
          profitPerProduct: profitProduct.data.profit_per_product,
          quickStats: quickStats.data
        };
      } catch (error) {
        console.error('Dashboard API Error:', error);
        throw error;
      }
}

export default dashBoardService
