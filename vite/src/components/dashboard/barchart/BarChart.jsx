import { useState, useEffect } from "react";
import ReactApexChart from 'react-apexcharts';
import useDashBoard from "../../../hooks/useDashBoardData";

export const ApexChart = () => {
  const { data } = useDashBoard();
  
  // Get the data for stock, sales, and profit
  const stockProduct = data?.quickStats?.stock_per_product?.all || [];
  const salesProduct = data?.salesPerProduct || [];
  const profitProduct = data?.profitPerProduct?.profit_all_prods || [];
  console.log("Data:", stockProduct, salesProduct, profitProduct);

  // Extracting product names from stockProduct (assuming it's consistent across all data)
  const productNames = stockProduct.map(item => item.product_name) || [];

  // Initializing state to hold chart data
  const [state, setState] = useState({
    series: [
      {
        name: 'Profit',
        data: profitProduct.map(item => item.profit || 0),  // Safe fallback in case of missing data
      },
      {
        name: 'Sales',
        data: salesProduct.map(item => item.sale || 0),  // Safe fallback in case of missing data
      },
      {
        name: 'Stock',
        data: stockProduct.map(item => item.stock_count || 0),  // Safe fallback in case of missing data
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 5,
          borderRadiusApplication: 'end'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: productNames,  // Use consistent product names across all series
      },
      yaxis: {
        title: {
          text: '$ (thousands)'  // You can modify this depending on the data's unit
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val, { seriesIndex }) {
            const unit = seriesIndex === 0 ? 'Profit' : seriesIndex === 1 ? 'Sales' : 'Stock';
            return "$ " + val + " thousands (" + unit + ")";  // Tooltip with dynamic text
          }
        }
      }
    },
  });

  useEffect(() => {
    // Update state when the data changes
    setState(prevState => ({
      ...prevState,
      series: [
        {
          name: 'Profit',
          data: profitProduct.map(item => item.profit || 0),
        },
        {
          name: 'Sales',
          data: salesProduct.map(item => item.sale || 0),
        },
        {
          name: 'Stock',
          data: stockProduct.map(item => item.stock_count || 0),
        }
      ],
      options: {
        ...prevState.options,
        xaxis: {
          categories: productNames,
        },
      }
    }));
  }, []);  // Re-run effect if data changes

  return (
    <div className="lg:w-100 bg-gray-700 p-4 lg:ml-20 mt-8">
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
