import { useState } from "react";
import ReactApexChart from 'react-apexcharts';

export const ApexChart2 = ({ activeSection, salesPerProduct, profitProduct, stockProductData }) => {
  const getChartData = () => {
    let series = [];
    let categories = [];

    // Handling different active sections for chart data
    if (activeSection === "sales") {
      const salesData = salesPerProduct?.sales_per_product || [];
      series = [{
        name: 'Sales',
        data: salesData.map(item => item.sale) // Extracting the sales values
      }];
      categories = salesData.map(item => item.prod_name); // Extracting product names
    } else if (activeSection === "profit") {
      const profitData = profitProduct?.profit_all_prods || [];
      series = [{
        name: 'Profit',
        data: profitData.map(item => item.profit) // Adjust based on your profit data structure
      }];
      categories = profitData.map(item => item.product); 
    } else if (activeSection === "products") {
      const stockData = stockProductData?.stock_per_product || []; // Default to empty array if no stock data
      if (Array.isArray(stockData)) {
        series = [{
          name: 'Stock',
          data: stockData.map(item => item.stock_count) // Adjust based on your stock data structure
        }];
        categories = stockData.map(item => item.product_name); // Adjust based on your stock data structure
      } else {
        console.error("Stock data is not an array or is missing:", stockProductData);
      }
    }

    return { series, categories };
  };

  const { series, categories } = getChartData();

  const options = {
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
      categories: categories, // Dynamically populated categories
    },
    yaxis: {
      title: {
        text: activeSection === 'products' ? 'Stock Count' : '$ (thousands)' // Adjust title dynamically
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          if (activeSection === 'sales') {
            return "$ " + val + " thousands"; // for sales
          } else if (activeSection === 'profit') {
            return "$ " + val + " profit"; // for profit
          } else {
            return val + " units"; // for stock
          }
        }
      }
    }
  };

  return (
    <div className="lg:w-100 bg-gray-300 p-4 lg:ml-20 mt-8">
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );
};
