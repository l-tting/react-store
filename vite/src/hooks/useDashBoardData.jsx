import React from 'react'
import dashBoardService from '../services/dashboardservice/quickstats/dashBoardService';
import { useState,useEffect } from 'react';

const useDashBoard = () => {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const dashboardData = await dashBoardService();
        setData(dashboardData);
        console.log(dashboardData)
      } catch (err) {
        setError(err.message || 'Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return 'Loading'
  if (error) return "Error"

  return {data,loading,error}
}

export default useDashBoard
